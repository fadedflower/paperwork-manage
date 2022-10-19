<template>
  <layout-view
    title="我的消息"
    :refresh="refreshData"
    :empty="messageList.length == 0"
  >
    <message
      v-for="(msg, index) in messageList"
      :key="messageListKeys[index]"
      :datetime="msg.createDate"
      :content="msg.message"
    />
  </layout-view>
</template>

<script>
import LayoutView from '@/layouts/LayoutView.vue'
import Message from './components/Message.vue'
import { auth, message } from '@/api'
import shortId from 'shortid'

export default {
  name: 'UserMessage',
  components: { LayoutView, Message },
  data () {
    return {
      messageList: [],
      messageListKeys: []
    }
  },
  mounted () {
    auth.checkLoginRedirect(this.$router)
    this.refreshData()
  },
  methods: {
    refreshData () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      this.messageList = []
      message.list(1, 10).then(resp => {
        this.messageListKeys = resp.map(v => shortId.generate())
        this.messageList = resp
        this.$toast.clear()
      }, () => this.$toast.clear())
    }
  }
}
</script>
