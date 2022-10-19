<template>
  <layout-view-plain title="个人信息">
    <information-section title="基础信息">
      <information-cell
        title="姓名"
        :value="name"
      />
      <information-cell
        title="性别"
        :value="gender"
      />
      <information-cell
        title="出生日期"
        :value="birthDate"
      />
      <information-cell
        title="国籍"
        :value="nationality"
      />
      <information-cell
        title="联系电话"
        :value="phone"
      />
    </information-section>
    <information-section title="常用信息">
      <information-cell
        title="籍贯"
        :value="birthPlace"
      />
      <information-cell
        title="民族"
        :value="ethnic"
      />
      <information-cell
        title="政治面貌"
        :value="politics"
      />
      <information-cell
        title="身份证号"
        :value="id"
      />
      <information-cell
        title="文化程度"
        :value="education"
      />
      <information-cell
        title="工作部门"
        :value="department"
      />
      <information-cell
        title="职务"
        :value="occupation"
      />
      <information-cell
        title="家庭住址"
        :value="address"
      />
      <information-cell
        title="应急联系人"
        :value="emergencyName"
      />
      <information-cell
        title="联系电话"
        :value="emergencyPhone"
      />
    </information-section>
  </layout-view-plain>
</template>

<script>
import LayoutViewPlain from '@/layouts/LayoutViewPlain.vue'
import InformationSection from './components/InformationSection.vue'
import InformationCell from './components/InformationCell.vue'
import { auth } from '@/api'

export default {
  name: 'PersonalInformation',
  components: { LayoutViewPlain, InformationSection, InformationCell },
  data () {
    return {
      name: '',
      gender: '',
      birthDate: '',
      nationality: '',
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
      emergencyPhone: ''
    }
  },
  mounted () {
    auth.checkLoginRedirect(this.$router)
    this.loadData()
  },
  methods: {
    loadData () {
      this.name = auth.getUserInfo().xm
      this.gender = auth.getUserInfo().xbm === '0' ? '男' : '女'
      this.birthDate = auth.getUserInfo().csrq
      this.nationality = auth.getUserInfo().gjm
      this.phone = auth.getUserInfo().phone
      this.birthPlace = auth.getUserInfo().jgm
      this.ethnic = auth.getUserInfo().mzm
      this.politics = auth.getUserInfo().zzmmm
      this.id = auth.getUserInfo().zjhm
      this.education = auth.getUserInfo().xwm
      this.department = auth.getUserInfo().sjtszdw
      this.occupation = auth.getUserInfo().przyjszwm
      this.address = auth.getUserInfo().jtzz
      this.emergencyName = auth.getUserInfo().yjlxr ?? '-'
      this.emergencyPhone = auth.getUserInfo().yjlxrdh ?? '-'
    }
  }
}
</script>
