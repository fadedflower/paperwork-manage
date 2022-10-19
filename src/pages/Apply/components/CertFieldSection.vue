<template>
  <div>
    <van-field
      label="申领证件名称"
      :value="cert"
      required
      readonly
    />
    <van-field
      label="证件号码"
      value="无"
      required
      readonly
    />
    <van-field
      label="是否新证"
      value="是"
      required
      readonly
    />
    <cert-field-date-picker
      v-model="startDate"
      label="开始时间"
      placeholder="请选择证照开始使用时间"
      :min-date="today"
    />
    <cert-field-date-picker
      v-model="endDate"
      label="结束时间"
      placeholder="请选择证照结束使用时间"
      :min-date="startDate === null ? today : startDate"
      :check-open="checkOpenEndDate"
    />
    <van-field
      v-model="city"
      label="选择城市"
      placeholder="请选择一个城市"
      :rules="[{ required: true }]"
      required
      readonly
      clickable
      @click="showCityPicker = true"
    />
    <van-popup
      v-model="showCityPicker"
      class="popup-expand"
      get-container="body"
      position="right"
      :close-on-click-overlay="false"
    >
      <layout-view-plain
        title="选择地点"
        no-nav
        @navBack="showCityPicker = false"
      >
        <van-index-bar>
          <div
            v-for="anchor in cityAnchorList"
            :key="anchor"
          >
            <van-index-anchor :index="anchor" />
            <van-cell
              v-for="country in countries[anchor]"
              :key="country.short"
              :title="country.name"
              clickable
              @click="selectCountry(country.name)"
            />
          </div>
        </van-index-bar>
      </layout-view-plain>
    </van-popup>
    <van-field
      v-model="address"
      label="具体地点"
      placeholder="请输入具体的地点"
      :rules="[{ required: true }]"
      required
      @input="updateEntity"
    />
    <van-field
      v-model="reason"
      type="textarea"
      label="使用事由"
      placeholder="请输入使用的事由"
      :rules="[{ required: true }]"
      required
      @input="updateEntity"
    />
  </div>
</template>

<script>
import CertFieldDatePicker from './CertFieldDatePicker.vue'
import LayoutViewPlain from '@/layouts/LayoutViewPlain.vue'
import { dictionary } from '@/api'

export default {
  name: 'CertFieldSection',
  components: { CertFieldDatePicker, LayoutViewPlain },
  props: {
    cert: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      value: {},
      today: new Date(),
      startDate: null,
      endDate: null,
      showCityPicker: false,
      cityAnchorList: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      city: '',
      countries: {},
      address: '',
      reason: ''
    }
  },
  watch: {
    startDate () {
      this.updateEntity()
    },
    endDate () {
      this.updateEntity()
    },
    city () {
      this.updateEntity()
    }
  },
  mounted () {
    this.countries = {}
    this.cityAnchorList.forEach(v => {
      this.countries[v] = []
    })
    dictionary.dictionary(1, 1000, 'national').then(resp => {
      // 修正返回的国家数据，中国重复了 =.=
      resp.splice(resp.find(v => v.value === 'CN'), 1)
      resp = resp.map(v => {
        // 修正返回的国家数据，拼音首字母不可能是汉字 =.=
        switch (v.remarks) {
          case '斐':
            v.remarks = 'F'
            break
          case '瑙':
            v.remarks = 'N'
            break
          case '梵':
            v.remarks = 'F'
            break
        }
        return v
      })
      resp.forEach(v => {
        this.countries[v.remarks].push({ name: v.label, short: v.value })
      })
    })
  },
  methods: {
    checkOpenEndDate () {
      if (this.startDate === null) {
        this.$notify({ type: 'danger', message: '请选择证照开始使用时间' })
        return false
      }
      return true
    },
    selectCountry (country) {
      this.city = country
      this.showCityPicker = false
    },
    updateEntity () {
      this.value = {
        certificate: this.cert,
        certificateId: '',
        destination: this.city + this.address,
        endTime: this.endDate === null ? '' : `${this.endDate.getFullYear()}-${this.endDate.getMonth() + 1}-${this.endDate.getDate()}`,
        reason: this.reason,
        startTime: this.endDate === null ? '' : `${this.startDate.getFullYear()}-${this.startDate.getMonth() + 1}-${this.startDate.getDate()}`,
        type: this.type
      }
      this.$emit('input', this.value)
    }
  }
}
</script>

<style scoped>
.popup-expand {
  width: 100%;
  height: 100%;
}
</style>
