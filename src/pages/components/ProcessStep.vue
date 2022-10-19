<template>
  <div class="process-step">
    <div class="step-left">
      <div
        v-if="!head"
        class="step-line"
      />
      <div class="step-left-icon">
        <p class="step-left-icon-text">
          {{ name[0] }}
        </p>
        <van-icon
          :class="['step-left-icon-status', statusIconClass]"
          :name="statusIcon"
        />
      </div>
    </div>
    <div class="step-right">
      <div class="step-right-header">
        <p class="step-right-header-title">
          {{ title }}
        </p>
        <p class="step-right-header-time">
          {{ dateTime }}
        </p>
      </div>
      <p class="step-right-name">
        {{ name }}
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ProcessStep',
  props: {
    name: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    dateTime: {
      type: String,
      required: true
    },
    head: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      default: '0'
    }
  },
  computed: {
    statusIcon () {
      const iconMap = {
        5: 'more',
        4: 'warning',
        0: 'checked',
        1: 'clear'
      }
      return iconMap[this.status]
    },
    statusIconClass () {
      const iconClassMap = {
        5: 'icon-pending',
        4: 'icon-cancel',
        0: 'icon-success',
        1: 'icon-fail'
      }
      return iconClassMap[this.status]
    }
  }
}
</script>

<style scoped>
.process-step {
  display: flex;
  align-items: flex-end;
}

.step-left {
  display: flex;
  flex-direction: column;
}

.step-line {
  height: 8vw;
  margin: 1.33333vw auto;
  border-left: 0.66667vw dashed #ccc;
}

.step-left-icon {
  position: relative;
  width: 9.33333vw;
  height: 9.33333vw;
  text-align: center;
  background-color: #1989fa;
  border-radius: 1.33333vw;
}

.step-left-icon-text {
  font-size: 4vw;
  line-height: 9.33333vw;
  color: #fff;
}

.step-left-icon-status {
  position: absolute;
  right: -0.53333vw;
  bottom: -0.53333vw;
  background-color: #fff;
  border: 0.53333vw solid #fffbe8;
  border-radius: 50%;
}

.icon-success { color: #07c160; }

.icon-pending { color: #1989fa; }

.icon-cancel { color: #ff976a; }

.icon-fail { color: #ee0a24; }

.step-right {
  flex: 1;
  padding-left: 4vw;
}

.step-right-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.93333vw;
}

.step-right-header-title { font-size: 3.73333vw; }

.step-right-header-time {
  font-size: 2.93333vw;
  color: #868686;
}

.step-right-name {
  font-size: 3.2vw;
  color: #868686;
}
</style>
