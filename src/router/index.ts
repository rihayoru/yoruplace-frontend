import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginProgress from '../views/LoginProgress.vue'
import Loading from '../views/Loading.vue'
import NotFound from '../views/NotFound.vue'
import Auth from '@/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: async (to, from, next) => {
      await Auth()
      next()
    }
  },
  {
    path: '/loading',
    component: Loading
  },
  {
    path: '/callback',
    component: LoginProgress
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
