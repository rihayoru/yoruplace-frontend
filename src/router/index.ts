import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginProgress from '@/views/LoginProgress.vue'
import Loading from '@/views/Loading.vue'
import NotFound from '@/views/NotFound.vue'
import Verify from '@/views/VerifyView.vue'
import KakaoLogin from '@/views/KakaoLogin.vue'
import Invite from '@/views/Invite.vue'
import Asked from '@/views/AskedView.vue'
import Auth from '@/auth'
import NProgress from 'nprogress'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
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
      NProgress.start()
      const status = await Auth()
      if (status.status) {
        next()
      } else {
        next('/')
        alert('로그인이 필요합니다')
      }
      NProgress.done()
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
      NProgress.start()
      const status = await Auth()
      if (status.status) {
        next()
      } else {
        next('/')
        alert('로그인이 필요합니다')
      }
      NProgress.done()
    }
  },
  {
    path: '/asked',
    component: Asked
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
