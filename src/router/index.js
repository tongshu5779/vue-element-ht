import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'

Vue.use(Router)

const router=new Router({
  routes: [
    {
      path:'/login',
      component:() => import('@/view/Login/index')
    },
    {
      path:'/404',
      component:() => import('@/view/err-page/404')
    },
    {
      path: '/',
      component: Layout,
      redirect:'/customerSys',
      /* children:[{
        path:'/index',
        name:'Index',
        component:() => import('@/view/index')
      }] */
    },
    {
      path: '/customerSys',
      component: Layout,
      redirect:'/cusomerInquiries',
      children:[
        {
          path:'/cusomerInquiries',
          name:'cusomerInquiries',
          component:() => import('@/view/cusomerInquiries/cusomerInquiries')
        },
        {
          path:'/cusomerEntry',
          name:'cusomerEntry',
          component:() => import('@/view/cusomerEntry/cusomerEntry')
        },
      ]
    },
    {
      path: '/deliveryReceiptSys',
      component: Layout,
      redirect:'/deliveryNoteEntry                   ',
      children:[
        {
          path:'/deliveryNoteEntry',
          name:'deliveryNoteEntry',
          component:() => import('@/view/deliveryNoteEntry/deliveryNoteEntry')
        },
        {
          path:'/deliveryOrderQuery',
          name:'deliveryOrderQuery',
          component:() => import('@/view/deliveryOrderQuery/deliveryOrderQuery')
        },
        {
          path:'/deliveryNoteExport',
          name:'deliveryNoteExport',
          component:() => import('@/view/deliveryNoteExport/deliveryNoteExport')
        },
      ]
    },
    {
      path: '/constructionManagementSys',
      component: Layout,
      redirect:'/deliveryNoteEntry',
      children:[
        {
          path:'/constructionOrderEntry',
          name:'constructionOrderEntry',
          component:() => import('@/view/constructionOrderEntry/constructionOrderEntry')
        },
        {
          path:'/constructionManagement',
          name:'constructionManagement',
          component:() => import('@/view/constructionManagement/constructionManagement')
        },
      ]
    },
    {
      path: '/completionAcceptance',
      component: Layout,
      redirect:'/completionAcceptance',
      children:[
        {
          path:'/completionAcceptance',
          name:'completionAcceptance',
          component:() => import('@/view/completionAcceptance/CompletionAcceptance'),
          redirect:'/404',
        }
      ]
    },
    {
      path: '/afterService',
      component: Layout,
      redirect:'/afterService',
      children:[
        {
          path:'/afterService',
          name:'afterService',
          component:() => import('@/view/afterService/afterService'),  
          redirect:'/404',
        }
      ]
    }
  ]
})

export default router;