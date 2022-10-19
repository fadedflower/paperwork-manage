<template>
  <div class="sheet-checkbox">
    <van-checkbox
      v-model="checked"
      @change="emitInput"
    >
      {{ title }}
    </van-checkbox>
  </div>
</template>

<script>

export default {
  name: 'SheetCheckbox',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      checked: false,
      value: ''
    }
  },
  methods: {
    emitInput (checked) {
      this.value = checked ? this.title : ''
      this.$emit('input', checked ? this.title : '')
    }
  }
}
</script>

<style scoped>
.sheet-checkbox {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5.33333vw 0;
}
</style>
