import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Room from '@/pages/Room'
import Pages from '@/pages/Pages'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'front',
      component: Hello
    },
    { path: '/rooms/:slug', name: 'room', props: true, component: Room },
    {
      path: '/pages',
      name: 'Pages',
      component: Pages
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
