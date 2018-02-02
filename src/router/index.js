import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from '@/components/Main'
import RepositoriesComponent from '@/components/Repositories'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainComponent
    },
    {
      path: '/repositories',
      name: 'repositories',
      component: RepositoriesComponent
    }
  ]
})
