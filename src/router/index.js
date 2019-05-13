import Vue from 'vue'
import Router from 'vue-router'
import PHome from '@/views/pc/PHome.vue'
import PMain from '@/views/pc/PMain.vue'
import PList from '@/views/pc/PList.vue'
import PDetail from '@/views/pc/PDetail.vue'

import MMain from '@/views/mobile/MMain.vue'
import MHome from '@/views/mobile/MHome.vue'
import MDetail from '@/views/mobile/MDetail.vue'
import MList from '@/views/mobile/MList.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/p',
      name: 'p-main',
      component: PMain,
      children:[
        {
          path: 'home',
          name: 'p-home',
          component: PHome,
        },
        {
          path: 'list',
          name: 'p-list',
          component: PList,
        },
        {
          path: 'detail',
          name: 'p-detail',
          component: PDetail,
        }
      ]
    },
    {
      path: '/m',
      name: 'm-main',
      component: MMain,
      children:[
        {
          path: 'home',
          name: 'm-home',
          component: MHome,
        },
        {
          path: 'detail',
          name: 'm-detail',
          component: MDetail
        },
        {
          path: 'list',
          name: 'm-list',
          component: MList
        }
        
      ]
    }
  ]
})
