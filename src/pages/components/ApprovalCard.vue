<template>
  <div
    class="approval-card"
    @click="$router.push(`/${approval ? 'approve' : 'apply'}-process/${applyId}`)"
  >
    <div class="card-header">
      <p class="card-header-title">
        {{ leader }}提交的用证申请
      </p>
      <p class="card-header-time">
        {{ datetime }}
      </p>
    </div>
    <div class="card-content">
      <p> 联系电话：{{ phone }} </p>
      <p> 工作部门：{{ department }} </p>
      <p> 当前审批节点： {{ approvalNodeOrg }} {{ approvalNodeLeader }}</p>
    </div>
    <div class="card-footer">
      <van-tag
        type="primary"
        size="medium"
      >
        {{ leader[0] }}
      </van-tag>
      <p class="card-footer-name">
        由{{ leader }}提交
      </p>
      <component :is="statusComponent" />
    </div>
  </div>
</template>

<script>
import StatusWait from './StatusWait.vue'
import StatusPass from './StatusPass.vue'
import StatusDeny from './StatusDeny.vue'
import StatusCancel from './StatusCancel.vue'

export default {
  name: 'ApprovalCard',
  components: { StatusWait, StatusPass, StatusDeny, StatusCancel },
  props: {
    applyId: {
      type: String,
      required: true
    },
    leader: {
      type: String,
      required: true
    },
    datetime: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    department: {
      type: String,
      required: true
    },
    approvalNodeOrg: {
      type: String,
      required: true
    },
    approvalNodeLeader: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true
    },
    approval: {
      type: Boolean,
      required: false
    }
  },
  computed: {
    statusComponent () {
      const componetMap = {
        5: 'status-wait',
        4: 'status-cancel',
        0: 'status-pass',
        1: 'status-deny'
      }
      return componetMap[this.status]
    }
  }
}
</script>

<style scoped>
.approval-card {
  padding: 5.33333vw;
  margin-top: 4vw;
  cursor: pointer;
  background-color: #fff;
  border-radius: 2.66667vw;
}

.card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-header-title { font-size: 4.26667vw; }

.card-header-time {
  font-size: 2.93333vw;
  color: #868686;
}

.card-content {
  padding: 4vw 0;
  font-size: 3.46667vw;
  line-height: 1.8;
  color: #868686;
}

.card-footer {
  display: flex;
  align-items: center;
}

.card-footer-name {
  flex: 1;
  padding: 0 2.66667vw;
  font-size: 3.73333vw;
}
</style>
