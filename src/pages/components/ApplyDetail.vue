<template>
  <div>
    <section class="apply-header van-hairline--bottom">
      <p class="apply-header-title">
        {{ name }}提交的用证申请
      </p>
      <p class="apply-header-tip">
        等待我处理
      </p>
    </section>
    <ul class="apply-form-section">
      <detail-item
        title="姓名"
        :value="name"
      />
      <detail-item
        title="性别"
        :value="gender"
      />
      <detail-item
        title="出生日期"
        :value="birthDate"
      />
      <detail-item
        title="籍贯"
        :value="birthPlace"
      />
      <detail-item
        title="民族"
        :value="ethnic"
      />
      <detail-item
        title="政治面貌"
        :value="politics"
      />
      <detail-item
        title="身份证号码"
        :value="id"
      />
      <detail-item
        title="文化程度"
        :value="education"
      />
      <detail-item
        title="工作部门"
        :value="department"
      />
      <detail-item
        title="职务"
        :value="occupation"
      />
      <detail-item
        title="家庭住址"
        :value="address"
      />
      <detail-item
        title="联系电话"
        :value="phone"
      />
      <detail-item
        title="应急联系人"
        :value="emergencyName"
      />
      <detail-item
        title="联系电话"
        :value="emergencyPhone"
      />
      <detail-item
        title="证件名称"
        :value="credentialName"
      />
      <detail-item
        title="证件号码"
        :value="credentialId"
      />
      <detail-item
        title="出发时间"
        :value="departureTime"
      />
      <detail-item
        title="回程时间"
        :value="returnTime"
      />
      <detail-item
        title="目的地"
        :value="destination"
      />
      <detail-item
        title="使用事由"
        :value="reason"
      />
    </ul>
    <section :class="['apply-form-section', {'apply-process': !approval && status === '5' }]">
      <p class="process-title">
        流程
      </p>
      <process-step
        :name="approval ? name : '我'"
        title="发起申请"
        :date-time="createDate"
        head
      />
      <process-step
        v-for="(proc, index) in processList"
        :key="processListKeys[index]"
        :name="proc.approval"
        :title="proc.currentOrganization"
        :date-time="proc.updateDate"
        :status="proc.status"
      />
    </section>
    <section
      v-if="!approval && status === '5'"
      class="apply-footer van-hairline--top"
    >
      <van-button
        type="info"
        size="normal"
        color="#b13a3d"
        block
        round
        @click="showCancel = true"
      >
        取消申请
      </van-button>
    </section>
    <van-popup
      v-model="showCancel"
      class="popup-expand"
      position="right"
      get-container="body"
    >
      <layout-view-plain
        title="取消用证申请"
        no-nav
        @navBack="showCancel = false"
      >
        <van-form>
          <van-field
            v-model="inputReason"
            class="reason-field"
            type="textarea"
            placeholder="请输入原因"
            :rules="[{ required: true }]"
            autosize
          />
          <div class="cancel-action">
            <van-button
              type="info"
              native-type="submit"
              color="#b13a3d"
              block
              round
              @click="cancelApply"
            >
              确定
            </van-button>
          </div>
        </van-form>
      </layout-view-plain>
    </van-popup>
  </div>
</template>

<script>
import LayoutViewPlain from '@/layouts/LayoutViewPlain.vue'
import DetailItem from './DetailItem.vue'
import ProcessStep from './ProcessStep.vue'
import { auth, approval, process } from '@/api'
import shortId from 'shortid'

export default {
  name: 'ApplyDetail',
  components: { LayoutViewPlain, DetailItem, ProcessStep },
  props: {
    applyId: {
      type: String,
      required: true
    },
    approval: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      name: '',
      gender: '',
      birthDate: '',
      phone: '',
      birthPlace: '',
      ethnic: '',
      politics: '',
      id: '',
      education: '',
      department: '',
      occupation: '',
      address: '',
      emergencyName: '',
      emergencyPhone: '',
      credentialName: '',
      credentialId: '',
      departureTime: '',
      returnTime: '',
      destination: '',
      reason: '',
      status: '',
      createDate: '',
      processList: [],
      processListKeys: [],
      showCancel: false,
      inputReason: ''
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
      let api = approval
      if (this.approval) api = process
      api.getProcess(this.applyId).then(resp => {
        this.name = resp.leader ?? '无'
        this.gender = resp.sex === '0' ? '男' : '女'
        this.birthDate = resp.birthDate
        this.phone = resp.tellphone
        this.birthPlace = resp.birthplace
        this.ethnic = resp.nation
        this.politics = resp.politicsStatus
        this.id = resp.idCard
        this.education = resp.education
        this.department = resp.department
        this.occupation = resp.job
        this.address = resp.address
        this.emergencyName = resp.emergencyContact ?? '-'
        this.emergencyPhone = resp.emergencyPhone ?? '-'
        this.credentialName = resp.certificate
        this.credentialId = resp.certificateId
        this.departureTime = resp.applyBegin
        this.returnTime = resp.endTime
        this.destination = resp.destination
        this.reason = resp.reason
        this.createDate = resp.createDate
        this.status = resp.status
        this.messageListKeys = resp.approvalProcessList.map(v => shortId.generate())
        this.processList = resp.approvalProcessList
        this.$toast.clear()
      }, () => this.$toast.clear())
    },
    cancelApply () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      approval.delete(this.applyId, this.inputReason).then(() => {
        this.$toast.clear()
        this.$notify({ type: 'success', message: '申请单撤回成功' })
        this.showCancel = false
        this.refreshData()
      }, () => this.$toast.clear())
    }
  }
}
</script>

<style scoped>
.apply-header {
  padding: 2.66667vw 4vw;
  background-color: #fff;
}

.apply-header-title {
  display: flex;
  align-items: center;
  font-size: 4.8vw;
  line-height: 1.6;
}

.apply-header-tip {
  font-size: 3.2vw;
  line-height: 1.6;
  color: #ff976a;
}

.apply-form-section {
  padding: 4vw 4vw;
  margin: 4vw 2.66667vw;
  background-color: #fff;
  border-radius: 2.66667vw;
}

.process-title {
  margin-bottom: 4vw;
  font-size: 4vw;
  font-weight: 500;
}

.apply-footer {
  position: absolute;
  bottom: 0;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2.66667vw 8vw;
  background-color: #fff;
}

.apply-process { margin-bottom: 19.06667vw; }

.popup-expand {
  width: 100%;
  height: 100%;
}

.reason-field { height: calc(100vh - 30vw); }

.cancel-action {
  position: absolute;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 5.33333vw 8vw;
  background-color: #fff;
}
</style>
