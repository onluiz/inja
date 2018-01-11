import Vue from 'vue'
import Router from 'vue-router'
import PHome from '@/pages/PHome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PHome',
      component: PHome
    }
  ]
})
