<template>
  <div class="info-cell van-hairline--bottom">
    <p class="info-cell-title">
      {{ title }}
    </p>
    <p class="info-cell-value">
      {{ value }}
    </p>
  </div>
</template>

<script>

export default {
  name: 'InformationSection',
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
.info-cell { margin: 5.86667vw 0; }

.info-cell-title {
  font-size: 3.46667vw;
  color: #282828;
}

.info-cell-value {
  padding: 3.2vw 0;
  font-size: 4vw;
  color: #868686;
}
</style>
