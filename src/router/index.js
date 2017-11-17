import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Pages from '@/pages/Pages'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/pages',
      name: 'Pages',
      component: Pages
    }
  ]
})
