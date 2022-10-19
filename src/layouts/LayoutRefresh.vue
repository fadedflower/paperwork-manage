<template>
  <van-pull-refresh
    v-model="refreshLoading"
    head-height="46"
    @refresh="refreshView"
  >
    <template #pulling>
      <p class="refresh-title">
        下拉刷新
      </p>
    </template>
    <template #loosing>
      <p class="refresh-title">
        释放刷新
      </p>
    </template>
    <slot />
  </van-pull-refresh>
</template>

<script>
export default {
  name: 'LayoutRefresh',
  props: {
    refresh: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      refreshLoading: false
    }
  },
  methods: {
    refreshView () {
      this.refresh()
      this.refreshLoading = false
    }
  }
}
</script>

<style scoped>
.refresh-title {
  padding: 2.66667vw;
  font-size: 2.93333vw;
  color: #b13a3d;
}
</style>
