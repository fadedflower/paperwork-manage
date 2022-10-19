<template>
  <li
    class="menu-item"
    @click="$router.push(to)"
  >
    <van-image
      width="8vw"
      height="8vw"
      fit="contain"
      :src="icon"
    />
    <div class="menu-item-content">
      <p class="menu-item-title">
        {{ title }}
      </p>
      <span class="menu-item-description">{{ description }}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    to: {
      type: String,
      default: ''
    }
  }
}

</script>

<style scoped>
.menu-item:nth-of-type(2n) { margin-right: 0; }

.menu-item {
  display: flex;
  align-items: center;
  width: 39.33333vw;
  padding: 2.66667vw;
  margin-right: 2.66667vw;
  margin-bottom: 2.66667vw;
  cursor: pointer;
  background-color: #f4f4f4;
  border-radius: 2.66667vw;
}

.menu-item-content { margin-left: 2.66667vw; }

.menu-item-title {
  margin-bottom: 2.66667vw;
  font-size: 4vw;
  font-weight: 500;
}

.menu-item-description { font-size: 3.46667vw; }
</style>
