import Vue from 'vue'
import VueRouter from 'vue-router'

import * as guards from '@/router/guards'

import Home from '../components/Home.vue'
import About from '../components/About.vue'
import Login from '../components/Login.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]


const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach(guards.authGuard)

export default router
