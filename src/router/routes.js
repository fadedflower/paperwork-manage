import Login from '@/pages/Login/Login.vue'

export default [
  {
    path: '/',
    component: Login
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/home',
    component: () => import('@/pages/Home/Home.vue')
  },
  {
    path: '/personal',
    component: () => import('@/pages/Personal/Personal.vue')
  },
  {
    path: '/user-message',
    component: () => import('@/pages/UserMessage/UserMessage.vue')
  },
  {
    path: '/personal-information',
    component: () => import('@/pages/PersonalInformation/PersonalInformation.vue')
  },
  {
    path: '/user-application',
    component: () => import('@/pages/UserApplication/UserApplication.vue')
  },
  {
    path: '/apply-process/:id',
    component: () => import('@/pages/ApplyProcess/ApplyProcess.vue')
  },
  {
    path: '/user-approve',
    component: () => import('@/pages/UserApprove/UserApprove.vue')
  },
  {
    path: '/approve-process/:id',
    component: () => import('@/pages/ApproveProcess/ApproveProcess.vue')
  },
  {
    path: '/evidence-record',
    component: () => import('@/pages/EvidenceRecord/EvidenceRecord.vue')
  },
  {
    path: '/record-detail/:id',
    component: () => import('@/pages/RecordDetail/RecordDetail.vue')
  },
  {
    path: '/apply',
    component: () => import('@/pages/Apply/Apply.vue')
  }
]
