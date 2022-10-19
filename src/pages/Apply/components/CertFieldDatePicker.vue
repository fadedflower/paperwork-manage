<template>
  <div>
    <van-field
      :label="label"
      :value="dateText"
      :placeholder="placeholder"
      :rules="[{ required: true }]"
      required
      readonly
      clickable
      @click="openDatePicker"
    />
    <van-popup
      v-model="showDatePicker"
      get-container="body"
      position="bottom"
      :close-on-click-overlay="false"
    >
      <van-datetime-picker
        v-model="tempDate"
        type="date"
        :min-date="minDate"
        @cancel="showDatePicker = false"
        @confirm="applyDate"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: 'CertFieldDatePicker',
  props: {
    label: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    minDate: {
      type: Date,
      required: true
    },
    checkOpen: {
      type: Function,
      default: () => true
    }
  },
  data () {
    return {
      value: null,
      showDatePicker: false,
      tempDate: null
    }
  },
  computed: {
    dateText () {
      return this.value === null ? '' : `${this.value.getFullYear()}-${this.value.getMonth() + 1}-${this.value.getDate()}`
    }
  },
  methods: {
    openDatePicker () {
      if (this.checkOpen()) {
        this.tempDate = this.value
        this.showDatePicker = true
      }
    },
    applyDate () {
      this.value = this.tempDate
      this.showDatePicker = false
      this.$emit('input', this.value)
    }
  }
}
</script>
