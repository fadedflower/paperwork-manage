<template>
  <ul class="menu">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'Menu'
}

</script>

<style scoped>
.menu {
  display: flex;
  flex-wrap: wrap;
  padding: 4vw 4vw 1.33333vw;
}
</style>
