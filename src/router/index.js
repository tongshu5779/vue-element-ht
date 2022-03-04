import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/login',
      component:() => import('@/view/Login/index')
    },
    {
      path: '/',
      component: Layout,
      redirect:'/index',
      children:[{
        path:'/index',
        name:'Index',
        component:() => import('@/view/index')
      }]
    },
  ]
})
