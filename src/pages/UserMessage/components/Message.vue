<template>
  <div
    :class="['message-block', {'message-expand': expand}]"
    @click="expand = !expand"
  >
    <div class="message-header">
      <p class="message-title">
        过期提醒
      </p>
      <p class="message-header-time">
        {{ headerTime }}
      </p>
    </div>
    <div
      v-if="!expand"
      class="message-time"
    >
      {{ datetime }}
    </div>
    <div class="message-content">
      {{ content }}
    </div>
    <div class="message-btn">
      收起
    </div>
  </div>
</template>

<script>

export default {
  name: 'Message',
  props: {
    datetime: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      expand: false
    }
  },
  computed: {
    headerTime () {
      return this.expand ? this.datetime : ' 已读 '
    }
  }
}
</script>

<style scoped>
.message-block {
  height: 15.2vw;
  padding: 4vw 4vw 0;
  margin-bottom: 4vw;
  overflow: hidden;
  cursor: pointer;
  background-color: #fff;
  border-radius: 1.33333vw;
}

.message-expand { height: auto; }

.message-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4vw;
}

.message-title {
  font-size: 4vw;
  font-weight: 700;
  color: #282828;
}

.message-header-time {
  font-size: 2.93333vw;
  color: #868686;
}

.message-time {
  padding-bottom: 4vw;
  font-size: 2.93333vw;
  color: #868686;
  text-align: right;
}

.message-content {
  padding-bottom: 4vw;
  font-size: 2.93333vw;
  line-height: 1.8;
  text-indent: 2em;
}

.message-btn {
  font-size: 3.2vw;
  line-height: 12vw;
  color: #868686;
  text-align: center;
  border-top: 1px solid #ccc;
}
</style>
