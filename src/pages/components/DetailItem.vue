<template>
  <li class="detail">
    <p class="detail-title">
      {{ title }}
    </p>
    <p class="detail-value">
      {{ value }}
    </p>
  </li>
</template>

<script>

export default {
  name: 'DetailItem',
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.detail {
  margin-bottom: 2.66667vw;
  line-height: 1.6;
}

.detail-title {
  font-size: 3.2vw;
  color: #868686;
}

.detail-value { font-size: 4vw; }
</style>
