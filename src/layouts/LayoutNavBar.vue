<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      fixed
      @click-left="navigateBack"
    />
    <div class="nav-bar-dummy" />
  </div>
</template>

<script>

export default {
  name: 'LayoutNavBar',
  props: {
    title: {
      type: String,
      required: true
    },
    noNav: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    navigateBack () {
      if (!this.noNav) this.$router.back()
      this.$emit('navBack')
    }
  }
}
</script>

<style scoped>
.nav-bar-dummy {
  width: 100%;
  height: 48px;
}
</style>
