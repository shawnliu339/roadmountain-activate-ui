// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from './i18n'
// Ajax通信ライブラリ
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

// bootstrap vue
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css' // added
import 'bootstrap-vue/dist/bootstrap-vue.css' // added
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

// axios
Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL = `/api`;
// Vue.axios.defaults.baseURL = `http://localhost:8080`;

// validation
Vue.use(Vuelidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n: i18n,
  router,
  components: { App },
  template: '<App/>'
})
