<template>
  <section class="info-section">
    <p class="info-title">
      {{ title }}
    </p>
    <slot />
  </section>
</template>

<script>

export default {
  name: 'InformationSection',
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.info-section {
  padding: 6.66667vw 6.66667vw;
}

.info-title {
  font-size: 5.86667vw;
  color: #282828;
}
</style>
