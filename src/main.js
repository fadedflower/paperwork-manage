import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import useVant from './plugins/vant'

import 'reset-css'
import 'normalize.css'

Vue.config.productionTip = false
useVant()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
