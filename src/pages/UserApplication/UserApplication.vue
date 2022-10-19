<template>
  <layout-view
    title="我的申请"
    :refresh="refreshData"
    :empty="approvalList.length == 0"
    :tab-click="switchCategory"
    tabs
  >
    <template #tabs>
      <van-tab
        title="等待审批"
        :badge="waitApprovalCount"
      />
      <van-tab title="通过" />
      <van-tab title="拒绝" />
      <van-tab title="全部" />
    </template>
    <approval-card
      v-for="apro in approvalList"
      :key="apro.id"
      :apply-id="apro.applyId"
      :leader="apro.leader ?? 'Null'"
      :datetime="apro.createDate"
      :phone="apro.tellphone"
      :department="apro.department"
      :approval-node-org="apro.approvalProcessList?.at(-1).currentOrganization ?? 'Undefined'"
      :approval-node-leader="apro.approvalProcessList?.at(-1).leader ?? 'Undefined'"
      :status="apro.status"
    />
  </layout-view>
</template>

<script>
import LayoutView from '@/layouts/LayoutView.vue'
import ApprovalCard from '@/pages/components/ApprovalCard.vue'
import { auth, approval } from '@/api'

export default {
  name: 'UserApplication',
  components: { LayoutView, ApprovalCard },
  data () {
    return {
      status: 5,
      waitApprovalCount: 0,
      approvalList: []
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
      this.approvalList = []
      approval.list(1, 10, this.status).then(resp => {
        this.approvalList = resp.list
        if (this.status === 5) this.waitApprovalCount = resp.count
        this.$toast.clear()
      }, () => this.$toast.clear())
    },
    switchCategory (name, title) {
      const categoryMap = {
        等待审批: 5,
        通过: 0,
        拒绝: 1,
        全部: undefined
      }
      this.status = categoryMap[title]
      this.refreshData()
    }
  }
}
</script>
