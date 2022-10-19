<template>
  <layout-view
    title="用证记录"
    :refresh="refreshData"
    :empty="recordList.length == 0"
    :tab-click="switchCategory"
    tabs
  >
    <template #tabs>
      <van-tab
        title="未归还"
        :badge="waitReturnCount"
      />
      <van-tab title="已归还" />
      <van-tab title="全部" />
    </template>
    <record-card
      v-for="rec in recordList"
      :key="rec.id"
      :apply-id="rec.applyId"
      :cert-leader="rec.leader ?? 'Null'"
      :cert-name="rec.certificate"
      :cert-id="rec.certificateId"
      :borrow-time="rec.outTime"
      :return-time="rec.returnTime"
      :lend-type="rec.lendType"
      :destination="rec.destination"
      :reason="rec.reason"
    />
  </layout-view>
</template>

<script>
import LayoutView from '@/layouts/LayoutView.vue'
import RecordCard from './components/RecordCard.vue'
import { auth, record } from '@/api'

export default {
  name: 'EvidenceRecord',
  components: { LayoutView, RecordCard },
  data () {
    return {
      status: 0,
      waitReturnCount: 0,
      recordList: []
    }
  },
  mounted () {
    auth.checkLoginRedirect(this.$router)
    this.refreshData()
  },
  methods: {
    refreshData () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      this.recordList = []
      record.list(1, 10, this.status).then(resp => {
        this.recordList = resp.list
        if (this.status === 0) this.waitReturnCount = resp.count
        this.$toast.clear()
      }, () => this.$toast.clear())
    },
    switchCategory (name, title) {
      const categoryMap = {
        未归还: 0,
        已归还: 1,
        全部: undefined
      }
      this.status = categoryMap[title]
      this.refreshData()
    }
  }
}
</script>
