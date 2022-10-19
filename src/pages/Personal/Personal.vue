<template>
  <div>
    <div class="personal-container">
      <van-nav-bar title="我的" />
      <section class="info-user">
        <van-image
          width="10.66667vw"
          height="10.66667vw"
          :src="avatar"
          round
        />
        <p class="info-user-name">
          {{ displayName }}
        </p>
        <van-icon
          class="message-icon"
          name="envelop-o"
          size="5.33333vw"
          :badge="messageCount"
          @click="$router.push('/user-message')"
        />
      </section>
      <div class="info-banner">
        <van-image
          width="100%"
          height="100%"
          :src="banner"
          fit="cover"
        />
      </div>
      <van-cell-group class="menu">
        <van-cell
          :icon="msgIcon"
          title="我的消息"
          to="/user-message"
          is-link
        />
        <van-cell
          :icon="personalIcon"
          title="个人信息"
          to="/personal-information"
          is-link
        />
        <van-cell
          :icon="applyIcon"
          title="我的申请"
          to="/user-application"
          is-link
        />
        <van-cell
          :icon="examineIcon"
          title="我的审批"
          to="/user-approve"
          is-link
        />
      </van-cell-group>
      <div
        class="menu-logout"
        @click="logout"
      >
        退出登录
      </div>
    </div>
    <nav-tabbar />
  </div>
</template>

<script>
import avatar from '@/assets/avatar.jpg'
import banner from '@/assets/personal/banner.png'
import msgIcon from '@/assets/personal/msg.png'
import personalIcon from '@/assets/personal/personal.png'
import applyIcon from '@/assets/personal/apply.png'
import examineIcon from '@/assets/personal/examine.png'

import { auth, message } from '@/api'
import NavTabbar from '../components/NavTabbar.vue'

export default {
  name: 'Personal',
  components: { NavTabbar },
  data () {
    return {
      avatar,
      banner,
      msgIcon,
      personalIcon,
      applyIcon,
      examineIcon,

      displayName: '',
      messageCount: 0
    }
  },
  mounted () {
    auth.checkLoginRedirect(this.$router)
    this.displayName = auth.getUserInfo().xm
    this.$toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration: 0
    })
    message.getCount().then(count => {
      this.$toast.clear()
      this.messageCount = count
    }, () => this.$toast.clear())
  },
  methods: {
    logout () {
      auth.logout()
      this.$router.push('/login')
    },
    visitUserMessage () {
      this.$router.push('/user-message')
    }
  }
}
</script>

<style scoped>
.personal-container {
  height: calc(100vh - 13.33333vw);
  overflow: auto;
  background-color: #f1f3f5;
}

.info-user {
  display: flex;
  align-items: center;
  padding: 4vw 4vw 16vw;
  background-color: #fff;
}

.info-user-name {
  flex: 1;
  padding: 0 2.66667vw;
  font-size: 4vw;
}

.info-banner {
  height: 26.66667vw;
  margin: -13.33333vw 4vw 0;
  overflow: hidden;
  border-radius: 4vw;
}

.menu {
  margin-top: 5.33333vw;
  color: #333;
}

.menu-logout {
  padding: 4vw 0;
  margin-top: 5.33333vw;
  font-size: 3.46667vw;
  color: #b13a3d;
  text-align: center;
  cursor: pointer;
  background-color: #fff;
}

.message-icon { cursor: pointer; }
</style>
