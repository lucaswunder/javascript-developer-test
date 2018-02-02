import Vue from 'vue'
import Vuex from 'vuex'
import Users from './modules/users'
import Repos from './modules/repos'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Users,
    Repos
  }
})
