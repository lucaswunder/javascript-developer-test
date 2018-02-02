import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import store from './store'
import _ from 'lodash'

Vue.use(VueResource, Vuex)

window.Vue = Vue

window._ = _

require('../src/assets/style.css')

Vue.http.options.root = 'https://api.github.com/'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
