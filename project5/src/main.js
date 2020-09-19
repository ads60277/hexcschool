import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jquery from 'jquery'

import {
  ValidationObserver,
  ValidationProvider, configure, localize, extend
} from 'vee-validate' // 驗證套件
import * as rules from 'vee-validate/dist/rules' // 規則檔案（ex: email...）

import 'bootstrap'
import App from './App.vue'
import router from './router'
import './bus'

import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

window.$ = jquery
Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.use(Loading)
Vue.component('Loading', Loading)

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule])
}) // 所有驗證規則
configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
})

localize('tw')
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
