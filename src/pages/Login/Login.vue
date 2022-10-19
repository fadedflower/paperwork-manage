<template>
  <div class="login">
    <div class="login-logo" />
    <van-form
      class="login-form"
      @submit="verifyLogin"
    >
      <van-field
        v-model="username"
        placeholder="请输入账号"
        :rules="[{ required: true }]"
      >
        <template #left-icon>
          <div class="login-form-icon account" />
        </template>
      </van-field>
      <van-field
        v-model="password"
        placeholder="请输入密码"
        :rules="[{ required: true }]"
      >
        <template #left-icon>
          <div class="login-form-icon password" />
        </template>
      </van-field>
      <div class="login-form-btn">
        <van-button
          type="info"
          native-type="submit"
          color="#b13a3d"
          block
          round
        >
          登录
        </van-button>
        <van-button
          class="login-form-auth-btn"
          type="info"
          color="#b13a3d"
          block
          round
        >
          统一身份认证登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { auth } from '@/api'

export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  mounted () {
    if (auth.checkLoginState()) { this.$router.push('/home') }
  },
  methods: {
    verifyLogin () {
      if (this.username !== this.password || this.password !== 'T90040') {
        this.$notify({ type: 'danger', message: '账号或者密码错误。' })
      }
      this.$toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
      })
      auth.login().then(() => {
        this.$toast.clear()
        this.$router.push('/home')
      }, () => this.$toast.clear())
    }
  }
}
</script>

<style scoped>
.login {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 31.73333vw 17.33333vw 0;
  background-image: url(~@/assets/login/login-bg.png);
  background-size: cover;
}

.login-logo {
  box-sizing: border-box;
  width: 67.5vw;
  height: 19.5vw;
  background-image: url(~@/assets/login/logo.png);
  background-size: cover;
}

.login-form {
  width: 100%;
  margin-top: 37.33333vw;
}

.login-form-btn {
  width: 46.66667vw;
  margin: 13.33333vw auto 0;
}

.login-form-auth-btn {
  width: 46.66667vw;
  margin: 5.33333vw auto 0;
}

.login-form-icon {
  width: 4.8vw;
  height: 4.8vw;
  margin-right: 8px;
  background-position: 50%;
  background-size: contain;
}

.login-form-icon.account {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEQAAABICAMAAAB4D6P7AAACAVBMVEUAAAAAAACAgIBAQEBmZmZVVVVJSUlgYGBVVVVmZmZVVVVbW1tVVVVgYGBaWlpVVVVeXl5VVVVdXV1ZWVlgYGBcXFxYWFhbW1tdXV1aWlpdXV1aWlpXV1dcXFxaWlpcXFxbW1tbW1tcXFxYWFhaWlpbW1tcXFxZWVlaWlpdXV1bW1tcXFxbW1tcXFxcXFxZWVlcXFxaWlpcXFxbW1taWlpcXFxbW1taWlpcXFxbW1taWlpbW1taWlpbW1taWlpcXFxaWlpcXFxbW1tcXFxbW1taWlpbW1tbW1taWlpcXFxbW1tcXFxbW1taWlpaWlpbW1tbW1tbW1tcXFxbW1taWlpbW1tbW1tbW1tcXFxbW1tcXFxbW1taWlpbW1tbW1taWlpbW1tbW1tcXFxbW1tbW1tcXFxaWlpaWlpbW1tcXFxbW1tbW1tcXFxbW1tbW1taWlpbW1taWlpbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tcXFxbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1urifd/AAAAqnRSTlMAAQIEBQYHCAkKDA4PEBESExUWFxgZGhweHyEiIyQlJyotLzEzNTo8PkJDRUZIS01OT1BRUlZXWFlaW1xdX2BhY2RlZ2hpa21ub3Byc3R3eHl7fX5/g4aHiIqLjI2RkpOUlZaXmpyeoaOkpaanqausra+wsrS2t7i5u7y+v8DBw8THycrMzc7P0NLT1dfY2drc3d7f4OLj5OXn6eru8PHy8/T29/j5+/z9/hz+1FQAAANmSURBVBgZtcGNW1N1GAbgZ5uLydcqQNRCBAQs0QgJjVDRsBBL8jOQaEZQUVJEFoSGWUqE+YGLghlSDWJ7/sre92wSwjm/nbPr6r7xfys93Ds2FY1OjfUeLkVW8tpvcY1b7XnwavO5Ba6zcG4zPNkTpY3oHrjnO5+kreR5H1wKDjItPn7hWGPjsQvjcaYNBuGKf4gpU4dykZZ7aIopQ3640UNLrNmHNXzNMVp64EI9LVeLsE7RVVrqkVFBjGooiA2CQ1SxAmQSoRoLwkZwjCqCDEqWKWbDsBWepVgugVkX1T442EfVBSP/HMU4HI1TzPlhUktVB0d1VLUwOUMx54cj/xzFGZhcoRiAwQDFFZjMUByFwVGKGZgsUeyGwW6KJRgEqCpgUEEVgLMQVTkMyqlCMEhQVMOgmiIBk3mKJhg0UczDZIKiCwZdFBMwiVDchMFNighMGqh2wNEOqgaY5McpLsHRJYp4PowuU8S3w8H2OMVlmNVQjfpgyzdKVYMMrlGdgq1TVNeQSeUKVQtstFCtVCKjbqrkSWxwMknVjcw23aBluAhPKBqm5cYmuFA8Q8ujs2GsCp99RMtMMVwpizJleaRtVxgI72obWWZKtAwubZmkg8ktcC3nQ9oayIF7odZ7tPNX/064FGidpZPkZ2Vwo+4uTVYi+cgk72OuSvz40ek332h99UBr91cxrprbC7OqB0xbGmwswH98lZ2/8LGLARi8EmfKfHsBNqgZYdq3+XB0gikLHSHYqhpjynQJHHQy5fNiODr4kJb7pbB1nJb4EZgUf0fL9NOwUZ+g+r0KZoFeWq4/hQ12/kl1fysyOk1LP9YL3aa69yxceIuW17BOhCr2HFx5j2pxK55Qm6RYroY7vhGqUazln6TqgFuFv1K9hDVaqL72wbWaJMWdAFblzFL8vQ0e9FG9jlWtVO/Ai8KHFFE/HpummA/Bkw6q/Uh7kaoD3oTmKSaQ9gnFHyF41En1PCyhRYr34VXxPxSdsOynqoBnX1L8BEsfxR14d5DqGai7FD3wrjBB0QRRRPUCsnCd4gOIOopELrJwkeJ7iLcpbiMbBygWfQD6KT5FNsqpSgB8Q/EuspFDVQ3gZ4o2ZCVG8TKAaYq9yMoPFA0ATpB8kIOsHCf5Wy7EkeFIKbLU/EXfNuBfUgub6GUEoB0AAAAASUVORK5CYII=);
}

.login-form-icon.password {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABCCAMAAADQfyDnAAAB71BMVEUAAAAAAACAgIBVVVVAQEBmZmZVVVVJSUlgYGBVVVVmZmZdXV1VVVVbW1tVVVVgYGBaWlpVVVVeXl5ZWVldXV1ZWVlgYGBcXFxYWFhbW1tYWFhdXV1aWlpYWFhdXV1cXFxeXl5bW1tZWVldXV1cXFxaWlpYWFhaWlpbW1taWlpdXV1bW1tZWVlbW1taWlpcXFxbW1tcXFxbW1tZWVlaWlpcXFxbW1taWlpbW1tcXFxaWlpaWlpbW1taWlpbW1tcXFxbW1taWlpbW1tbW1tcXFxbW1taWlpbW1taWlpbW1tcXFxaWlpbW1tbW1tcXFxbW1taWlpcXFxbW1taWlpbW1tbW1taWlpaWlpbW1taWlpbW1tcXFxcXFxbW1tcXFxbW1taWlpbW1tbW1tcXFxbW1tcXFxbW1tcXFxbW1tbW1taWlpbW1tcXFxbW1tbW1tcXFxbW1tbW1tbW1tcXFxbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1taWlpbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1taWlpbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tcXFxbW1tbW1tbW1tbW1tbW1tbW1tbW1vhNV6wAAAApHRSTlMAAQIDBAUGBwgJCgsMDg8QERITFBYXGBkaHB0eHyAhJCYqKywvMDEzNTY3ODk7PkBDRUlNT1BRUlRWWFtcXWJkZWlqa2xtbnBxc3V3eHl6e3yAhIWKjI2QkZOVlpmanJ2eoKKkpqeoqquur7Cys7S1tre/wMHCw8TFx8nKy8zQ0dPU1dbX2Nnb3N7g4eLk5+jp6+zt7/Dx8vP09fb3+Pn6+/z9/iWqkQQAAAKZSURBVFjD7ZbrO1RRFMaXQdLtEBVRqKQbUlJRuoh0pajpokgXRlI6U0qlXLopYgxJMky/P7QPxzAyc2b2UfnS+2n2Wvv9PfM88641W8RMa7Jyc7etjxBLSipvcQPAmF6Rrmzf2ezFX0/3KH2P5EbmybkpfH+BmwCaOBGuv8Jn8bTX2+11zm++883IsPwXp68371tmFKJ23/YYpbvhEEqMu21b/YsbmoyqPbR/uwfAW2n7rX74OwCFofwx7wC8B+d3skcA3IkhAOcAKA7Uyp0EqDP3r3AB1ARungaYSjMFlAL0rwzctL0CuGoKeAFwPFg3D2Aw2sS/DmAkNmi/EyDXBFAEcCtERi+YAKoBDpnMKECTCcABsCV4PxagywSgA8SZXBgA+k36HQBmm6MXGA4FkP+ARQGkVDh0Xdd1fRTAbSIvMGncba7K8PlPjmNJPy8ZO7Ycy7ouIpIybh1AtohULsBPvYjcByiL0zRN05JTw1CKpmmapu0F6AlnAoOpDxjyATQLAF8m/i4gITMzyTogpfojwJeaDEsA2/kfM5G7FqsOWOLw/73bNWVA3dzEPIlSBBQYvs8Nd3qMT2fVALYegK9FESKS1wcwvEoJkAPg2TX9vnEBHFUCVAFcmfNsalQCOAB2+E7xAN1KAB1g9jk0AvQqAVoAZgIY4wXeKwHsAGd8p/0ArUqAAoCh6Tla3hUwCKaApS6A7nQRkcTHAFOpakk8Zby275Udqx0F4IZilKOfz52FT/Gqw5T41t8/uFl9H6x+OOt/udHSRsp/Ztg7j0Ra3Ylr80tKD6Qt6lb+J4BWgBx1f+ok8EFELgNMvOlQ1OsxgAcikrWQv/dCEZFa636nTUQkpsGqvy3BF7lHA+pul7M4Sv6AfgEjP3c/oXGmMwAAAABJRU5ErkJggg==);
}
</style>
