<template>
  <layout-view-plain title="用证申请">
    <van-overlay :show="showAgreement">
      <div class="agreement-overlay">
        <div class="agreement-container">
          <p class="agreement-title">
            行前教育
          </p>
          <div class="agreement-content">
            <p class="agreement-paragraph">
              根据国家和省外办相关规定，为加强我校因公出国（境）教师的政治意识、组织意识和纪律意识，特明确相关纪律要求如下：
            </p>
            <p class="agreement-paragraph">
              一、请登录中国领事服务网http://cs.mfa.gov.cn,浏览有关注意事项和安全提示，注意了解往访国的安全形势和当地治安状况，如遇突发事件或紧急情况，尽量减少外出或避开人群密集、敏感场所，必要时请报警并寻求中国驻当地使领馆的协助。
            </p>
            <p class="agreement-paragraph">
              二、增强大局意识，对外交往中，要忠于使命，认真履责，谨守纪律，切实维护国家以及学校的形象和利益。
            </p>
            <p class="agreement-paragraph">
              三、自觉遵守保密法律法规，严守保密纪律。增强安全保密意识，未经批准，不得携带涉密载体（包括纸质文件和电磁介质等)；妥善保管内部材料，未经批准，不得对外提供内部文件和资料（如批件、出国（境）申请表、经费情况表、备案表等）；不在非保密场所谈论涉密事项；不得泄露国家秘密和商业秘密。严禁使用个人电脑、手机或其他非涉密载体处理、存储涉密信息。
            </p>
            <p class="agreement-paragraph">
              四、教师出访“在外停留天数”和“出访时间”均有特定的计算方法和严格的规定（根据中办发〔2013〕16号文及省外办规定）。例如，经审批，出访时间：2018年8月1日离境（指中国边检出境章日期）～2018年8月5日回抵境内（指中国边检入境章日期），您选择航班和办理通关手续时，须保证护照（或通行证）上加盖的中国边检出、入境章日期分别为2018-08-01、2018-08-05（注：中国边检出境章日期视作离境日期，中国边检入境章日期视作回抵境内日期；如在京、沪、广、厦等地通关离境或入境通关，离境日期可能不同于离开福州的日期，回抵境内日期也可能不同于回到福州的日期）中国边检出、入境章日期均计入在外停留天数，故此例中，在外停留天数为5天。教师出访严禁超期，即，在外停留天数不得超过批准天数。
            </p>
            <p class="agreement-paragraph">
              五、严格按批准的往访国别、地区和在外停留时间（离、抵境当日计入在外停留时间）合理安排行程，不得擅自延长在外停留时间；未经批准不得变更出访路线（特别是境外路线），增加出访国家、地区或城市（包括转机），前往与出访任务无关的国家、地区或城市考察、观光，或以任何理由绕道旅行。经批准，需在第三国（地区）转机的，不可出机场。
            </p>
            <p class="agreement-paragraph">
              六、严禁安排与公务活动无关的娱乐活动；对商定的公务活动不得应付敷衍甚至随意取消或压缩；不得参加与访问任务无关的活动或会议。
            </p>
            <p class="agreement-paragraph">
              七、严禁出入赌博场所，不得使用任何形式的资金参与赌博活动，不准以任何借口自行或接受接待单位安排前往赌博场所，严禁进行网络赌博。
            </p>
            <p class="agreement-paragraph">
              八、严禁出入色情场所和观看色情表演，不得参加涉及低级趣味的娱乐旅游项目。
            </p>
            <p class="agreement-paragraph">
              九、不得借出访之机谋取私利。
            </p>
            <p class="agreement-paragraph">
              十、不得违反囯家规定收送礼品。
            </p>
            <p class="agreement-paragraph">
              十一、不得使用公款大吃大喝，聚众酗酒；不得使用公款购买高档消费品、礼品或参加高消费娱乐活动。
            </p>
            <p class="agreement-paragraph">
              十二、教师出访应把确保人身生命安全放在第一位，增强防盗、防抢、防诈骗的自我保护意识，如在境外遇到交通和其他意外事故，应立即求助于当地的警察、我驻当地使领馆（或拨打外交部领事保护中心电话：0086-10-12308），或国际救援组织，并尽快向当地外事主管部门报告。在处置突发事件时，如果难以获得其他渠道的援助，可求救于SOS国际组织。
            </p>
            <p class="agreement-paragraph">
              十三、增强应急应变意识，注意防范反华敌对势力的干扰、破坏，避免与可疑人员接触，拒收任何可疑信函和物品。不在反华组织活动现场停留、围观。不得随意发表有损国格、人格和不符合国家对外政策的言论。不要随意接受媒体采访。若受到前往国家或地区专门机关的调查或不公正待遇，应保持冷静，遇紧急情况，应及时向派出单位以及我国驻当地使领馆请示报告。
            </p>
            <p class="agreement-paragraph">
              十四、在外期间自觉抵制“法轮功”等邪教组织的非法宣传和渗透，不拿各类非法宣传品。要保证严格遵守相关纪律，主动接受我驻外使领馆的领导和监督，遇到突发状况应及时请示报告。
            </p>
            <p class="agreement-paragraph">
              十五、建议随身携带邀请函、英文机票订单、英文酒店订单和保单，以备海关查验。
            </p>
            <p class="agreement-paragraph">
              十六、增强证照管理意识，切实遵守证照管理的有关规定。交回前请自行扫描、复印证照资料页、签证（注）页及中外方出入境章等，留存备用。
            </p>
            <p class="agreement-paragraph">
              十七、保留全程登机牌和电子客票行程单备核。如遇航班延误，请及时向航空公司索要《航班延误证明》（加盖航空公司公章）。
            </p>
            <p class="agreement-paragraph">
              十八、教师出访前应知悉并承诺遵守《福州大学关于印发修订后的教职工出国（境）留学管理规定的通知》（福大人〔2019〕74号）、《福州大学关于印发修订后的教职工进修培训管理办法（试行）的通知》（福大人〔2015〕41号）以及出国（境）留学协议书等相关规定。
            </p>
          </div>
          <div class="agreement-btn">
            <van-button
              class="agreement-btn"
              type="info"
              size="small"
              color="#b13a3d"
              round
              :disabled="agreementTime !== 0"
              @click="showAgreement = false"
            >
              已阅读并同意({{ agreementTime }}s)
            </van-button>
          </div>
        </div>
      </div>
    </van-overlay>
    <van-form @submit="submitSave">
      <van-field
        v-model="name"
        label="姓名"
        required
        readonly
      />
      <van-field
        label="性别"
        required
      >
        <template #input>
          <van-radio-group
            v-model="gender"
            direction="horizontal"
            disabled
          >
            <van-radio name="0">
              男
            </van-radio>
            <van-radio name="1">
              女
            </van-radio>
          </van-radio-group>
        </template>
      </van-field>
      <van-field
        v-model="birthDate"
        label="出生日期"
        required
        readonly
      />
      <van-field
        v-model="birthPlace"
        label="籍贯"
        required
        readonly
      />
      <van-field
        v-model="ethnic"
        label="民族"
        required
        readonly
      />
      <van-field
        v-model="politics"
        label="政治面貌"
        required
        readonly
      />
      <van-field
        v-model="id"
        label="身份证号码"
        required
        readonly
      />
      <van-field
        v-model="education"
        label="文化程度"
        required
        readonly
      />
      <van-field
        v-model="department"
        label="工作部门"
        required
        readonly
      />
      <van-field
        v-model="occupation"
        label="职务"
        required
        readonly
      />
      <van-field
        v-model="address"
        label="家庭住址"
        required
        readonly
      />
      <van-field
        v-model="phone"
        label="联系电话"
        required
        readonly
      />
      <van-field
        v-model="emergencyName"
        label="紧急联系人"
        placeholder="请输入紧急联系人"
        required
        readonly
      />
      <van-field
        v-model="emergencyPhone"
        label="紧急联系电话"
        placeholder="请输入紧急电话"
        required
        readonly
      />
      <van-field
        v-model="certTypesText"
        label="选择证件"
        placeholder="请选择申请的证件"
        :rules="[{ required: true }]"
        required
        readonly
        clickable
        @click="showCertTypeSheet = true"
      />
      <van-action-sheet
        v-model="showCertTypeSheet"
        get-container="body"
        cancel-text="确定"
        :close-on-click-overlay="false"
        close-on-click-action
      >
        <sheet-checkbox
          v-for="(v, index) in certTypes"
          :key="v.name"
          v-model="showCertTypes[index]"
          :title="v.name"
        />
      </van-action-sheet>
      <cert-field-section
        v-for="v in activeCertTypes"
        :key="v.name"
        v-model="certFormList[v.type - 1]"
        :cert="v.name"
        :type="v.type.toString()"
      />
      <div class="apply-footer">
        <van-button
          type="info"
          native-type="submit"
          size="normal"
          color="#b13a3d"
          block
          round
        >
          提交
        </van-button>
      </div>
    </van-form>
  </layout-view-plain>
</template>

<script>
import LayoutViewPlain from '@/layouts/LayoutViewPlain.vue'
import SheetCheckbox from './components/SheetCheckbox.vue'
import CertFieldSection from './components/CertFieldSection.vue'
import { auth, dictionary, approval } from '@/api'

export default {
  name: 'Apply',
  components: { LayoutViewPlain, SheetCheckbox, CertFieldSection },
  data () {
    return {
      showAgreement: true,
      agreementTime: 2,
      name: '',
      gender: '',
      birthDate: '',
      phone: '',
      birthPlace: '',
      ethnic: '',
      politics: '',
      id: '',
      education: '',
      rawEducation: '',
      department: '',
      occupation: '',
      address: '',
      emergencyName: '',
      emergencyPhone: '',
      showCertTypeSheet: false,
      certTypes: [],
      certFormList: [],
      showCertTypes: []
    }
  },
  computed: {
    activeCertTypes () {
      return this.certTypes.filter((v, i) => this.showCertTypes[i])
    },
    submitCertFormList () {
      return this.certFormList.filter((v, i) => this.showCertTypes[i])
    },
    certTypesText () {
      const types = []
      this.activeCertTypes.forEach(v => types.push(v.name))
      return types.join('、')
    }
  },
  mounted () {
    auth.checkLoginRedirect(this.$router)
    this.name = auth.getUserInfo().xm
    this.gender = auth.getUserInfo().xbm
    this.birthDate = auth.getUserInfo().csrq
    this.phone = auth.getUserInfo().phone
    this.birthPlace = auth.getUserInfo().jgm
    this.ethnic = auth.getUserInfo().mzm
    this.politics = auth.getUserInfo().zzmmm
    this.id = auth.getUserInfo().zjhm
    this.rawEducation = auth.getUserInfo().xwm
    dictionary.dictionary(1, 1000, 'education').then(resp => {
      resp.forEach(v => {
        if (v.value === this.rawEducation) {
          this.education = v.label
        }
      })
    })
    dictionary.dictionary(1, 1000, 'paperwork_type').then(resp => {
      this.certTypes = []
      resp.forEach((v, i) => this.certTypes.push({
        name: v.label,
        type: i + 1
      }))
      this.showCertTypes = Array(resp.length).fill(false)
      this.certFormList = Array(resp.length).fill({})
    })
    this.department = auth.getUserInfo().sjtszdw
    this.occupation = auth.getUserInfo().przyjszwm
    this.address = auth.getUserInfo().jtzz
    this.emergencyName = auth.getUserInfo().yjlxr ?? ''
    this.emergencyPhone = auth.getUserInfo().yjlxrdh ?? ''
    setTimeout(this.agreementTimeout, 1000)
  },
  methods: {
    agreementTimeout () {
      if (--this.agreementTime !== 0) {
        setTimeout(this.agreementTimeout, 1000)
      }
    },
    submitSave () {
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      approval.save({
        address: this.address,
        approvalFormEntityList: this.submitCertFormList,
        birthDate: this.birthDate,
        birthplace: this.birthPlace,
        department: this.department,
        education: this.rawEducation,
        emergencyContact: this.emergencyName === '' ? null : this.emergencyName,
        emergencyPhone: this.emergencyPhone === '' ? null : this.emergencyPhone,
        idCard: this.id,
        job: this.occupation,
        leader: this.name,
        nation: this.ethnic,
        politicsStatus: this.politics,
        sex: this.gender,
        tellphone: this.phone
      }).then(() => this.$toast.clear(), () => this.$toast.clear())
    }
  }
}
</script>

<style scoped>
.agreement-overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

.agreement-container {
  padding: 4vw;
  margin: 0 4vw;
  background-color: #fff;
  border-radius: 5.33333vw;
}

.agreement-content {
  height: 60vh;
  margin: 4vw 0;
  overflow: auto;
  font-size: 3.46667vw;
  line-height: 1.4;
}

.agreement-title {
  font-size: 4.53333vw;
  font-weight: 500;
  line-height: 1.6;
  text-align: center;
}

.agreement-btn { text-align: center; }

.agreement-paragraph { text-indent: 2em; }

.apply-footer {
  padding: 5.33333vw 4vw;
  background-color: #fff;
}
</style>
