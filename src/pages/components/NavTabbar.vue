<template>
  <van-tabbar
    active-color="#b13a3d"
    fixed
    route
  >
    <van-tabbar-item
      replace
      to="/home"
      icon="home-o"
    >
      首页
    </van-tabbar-item>
    <van-tabbar-item
      replace
      to="/personal"
      icon="contact"
    >
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
export default {
  name: 'NavTabbar'
}

</script>
