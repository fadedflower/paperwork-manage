<template>
  <layout-view-plain title="记录详情">
    <section class="record-header van-hairline--bottom">
      <p class="record-header-title">
        {{ record.certLeader }}的{{ record.certName }}{{ record.certName === '台湾通行' ? '证' : '' }}
        <van-tag
          class="status-tag"
          type="primary"
          color="#b13a3d"
          plain
          round
        >
          已归还
        </van-tag>
      </p>
      <p class="record-header-number">
        {{ record.certId }}
      </p>
    </section>
    <ul class="record-form-section">
      <detail-item
        title="借出时间"
        :value="record.borrowTime"
      />
      <detail-item
        title="归还时间"
        :value="record.returnTime"
      />
      <detail-item
        title="时长"
        :value="record.returnTime"
      />
      <detail-item
        title="借出类型"
        :value="lendTypeText"
      />
      <detail-item
        title="地点"
        :value="record.destination"
      />
      <detail-item
        title="事由"
        :value="record.reason"
      />
      <detail-item
        title="归还提醒时间"
        :value="record.returnTime"
      />
    </ul>
  </layout-view-plain>
</template>

<script>
import LayoutViewPlain from '@/layouts/LayoutViewPlain.vue'
import DetailItem from '@/pages/components/DetailItem.vue'
import { auth } from '@/api'

export default {
  name: 'RecordDetail',
  components: { LayoutViewPlain, DetailItem },
  computed: {
    lendTypeText () {
      if (this.$store.state.record.lendType === '1') {
        return '出国境借出'
      } else {
        return '出行港澳借出'
      }
    },
    record () {
      return this.$store.state.record
    }
  },
  mounted () {
    auth.checkLoginRedirect(this.$router)
  }
}
</script>

<style scoped>
.record-header {
  padding: 2.66667vw 4vw;
  background-color: #fff;
}

.record-header-title {
  display: flex;
  align-items: center;
  font-size: 4.8vw;
  line-height: 1.6;
}

.record-header-number {
  font-size: 3.2vw;
  line-height: 1.6;
  color: #868686;
}

.record-form-section {
  padding: 4vw 4vw;
  margin: 4vw 2.66667vw;
  background-color: #fff;
  border-radius: 2.66667vw;
}

.status-tag { margin-left: 10px; }
</style>
