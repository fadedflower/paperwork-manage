<template>
  <div
    class="record-card"
    @click="visitDetail"
  >
    <div class="card-header">
      <p class="card-header-title">
        {{ certLeader }}的{{ certName }}{{ certName === '台湾通行' ? '证' : '' }}
      </p>
      <p class="card-header-id">
        {{ certId }}
      </p>
    </div>
    <div class="card-content">
      <p> 借出时间：{{ borrowTime }} </p>
      <p> 归还时间：{{ returnTime }} </p>
      <p> 借出类型： {{ lendTypeText }}</p>
      <p> 地点： {{ destination }}</p>
      <p> 事由： {{ reason }}</p>
    </div>
    <div class="card-footer">
      <van-tag
        type="primary"
        size="medium"
        color="#b13a3d"
      >
        {{ certLeader[0] }}
      </van-tag>
      <p class="card-footer-name">
        由 {{ certLeader }} 提交
      </p>
    </div>
  </div>
</template>

<script>
import { UPDATE_RECORD } from '@/store/mutation-types'

export default {
  name: 'RecordCard',
  props: {
    applyId: {
      type: String,
      required: true
    },
    certLeader: {
      type: String,
      required: true
    },
    certName: {
      type: String,
      required: true
    },
    certId: {
      type: String,
      required: true
    },
    borrowTime: {
      type: String,
      required: true
    },
    returnTime: {
      type: String,
      required: true
    },
    lendType: {
      type: String,
      required: true
    },
    destination: {
      type: String,
      required: true
    },
    reason: {
      type: String,
      required: true
    }
  },
  computed: {
    lendTypeText () {
      if (this.lendType === '1') {
        return '出国境借出'
      } else {
        return '出行港澳借出'
      }
    }
  },
  methods: {
    visitDetail () {
      this.$store.commit(UPDATE_RECORD, {
        certLeader: this.certLeader,
        certName: this.certName,
        certId: this.certId,
        borrowTime: this.borrowTime,
        returnTime: this.returnTime,
        lendType: this.lendType,
        destination: this.destination,
        reason: this.reason
      })
      this.$router.push(`/record-detail/${this.applyId}`)
    }
  }
}
</script>

<style scoped>
.record-card {
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

.card-header-title { font-size: 4vw; }

.card-header-id {
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
