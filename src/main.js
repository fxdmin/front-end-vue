import Vue from 'vue'
import App from '@/App.vue'
import router from './router'
import store from './store'

import axios from "./apis/axiosConfig"

Vue.config.productionTip = false

//저장소를 사용하겠다! 인스턴스간의 연결
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
