import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginProgress from '@/views/LoginProgress.vue'
import Loading from '@/views/Loading.vue'
import NotFound from '@/views/NotFound.vue'
import Verify from '@/views/VerifyView.vue'
import KakaoLogin from '@/views/KakaoLogin.vue'
import Invite from '@/views/Invite.vue'
import Auth from '@/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
    // beforeEnter: async (to, from, next) => {
    //   await Auth()
    //   next()
    // }
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
    path: '/verify',
    component: Verify,
    beforeEnter: async (to, from, next) => {
      const status = await Auth()
      if (status.status) {
        next()
      } else {
        next('/')
        alert('로그인이 필요합니다')
      }
    }
  },
  {
    path: '/verify/callback',
    component: KakaoLogin
  },
  {
    path: '/invite',
    component: Invite,
    beforeEnter: async (to, from, next) => {
      const status = await Auth()
      if (status.status) {
        next()
      } else {
        next('/')
        alert('로그인이 필요합니다')
      }
    }
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
