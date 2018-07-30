import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/test/home'
import ComponeteList from '@/page/componentsList'
import searchPage from '@/components/searchPage/index'
import search from '@/components/search/index'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/components',
      name: 'Components',
      component: ComponeteList,
      children: [
        {
          path: 'searchPage',
          component: searchPage
        },
        {
          path: 'search',
          component: search
        }
      ]
    }
  ]
})

export default router
