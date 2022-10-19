import { request } from '@/utils'

export const auth = {
  async login () {
    const tokenResponse = await request({
      url: '/login',
      method: 'post',
      params: {
        // 唯一指定测试账号，用户名和密码貌似经过SM2国密算法进行了加密，这里进行了重放攻击（雾）
        username: '041ce731119f486777da56d344f107dd96883a2571ff52475e06c1ccb90427782246347c1d4da78d3cc0c961c53a846b280a94649839f1669fce1e99efe7e073bb97a5c583c7fa392c756d95a3808a70a5ba45c50f052fb77b535a82d5318eadf87e19d58a4912',
        password: '04cf1df23cc274ee63aa3b3df9daafc08643bfd5ef7ec90420b00acb929822f67aadf4cfa23a314f8658d116078aa06f46f162fd6b7688be0455c6bea33ed234dac0e7f67a6300b6c658970851373c5e525c756c36ad3cb0cee4041dd644e9eeb6c226de31d29f'
      }
    })
    localStorage.setItem('tokenInfo', JSON.stringify(tokenResponse.item.token))
    const userResponse = await request({
      url: '/lics/loginLic/loginLic',
      method: 'post',
      params: {
        token: this.getAccessToken()
      }
    })
    localStorage.setItem('userInfo', JSON.stringify(userResponse.item.user))
  },
  logout () {
    if (!this.checkLoginState()) return
    localStorage.removeItem('tokenInfo')
    localStorage.removeItem('userInfo')
  },
  getAccessToken () {
    if (!this.checkLoginState()) return null
    return JSON.parse(localStorage.getItem('tokenInfo')).access_token
  },
  getUserInfo () {
    if (!this.checkLoginState()) return null
    return JSON.parse(localStorage.getItem('userInfo'))
  },
  checkLoginState () {
    return localStorage.getItem('tokenInfo') !== null
  },
  checkLoginRedirect (router) {
    if (!this.checkLoginState()) { router.push('/login') }
  }
}
