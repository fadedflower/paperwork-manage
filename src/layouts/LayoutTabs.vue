<template>
  <van-tabs
    color="#b13a3d"
    @click="tabClick"
  >
    <slot />
  </van-tabs>
</template>

<script>

export default {
  name: 'LayoutTabs',
  props: {
    tabClick: {
      type: Function,
      required: true
    }
  }
}
</script>
