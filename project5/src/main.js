import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import jquery from 'jquery'
import 'bootstrap'
import App from './App.vue'
import router from './router'

window.$ = jquery
Vue.config.productionTip = false

Vue.use(VueAxios, axios)

// import Loading from 'vue-loading-overlay'
// import 'vue-loading-overlay/dist/vue-loading.css'
// Vue.use(Loading)
// Vue.component('Loading', Loading)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
