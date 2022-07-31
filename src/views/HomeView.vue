<template>
  <main class="bsod container">
    <WelcomeMessage :user="user" :logined="logined" :verifeid="user.kakao"/>
    <!-- <GuestBook/> -->
  </main>
</template>

<script lang="ts">
import Auth from '@/auth'
import NProgress from 'nprogress'
import { defineComponent } from 'vue'
import WelcomeMessage from '@/components/WelcomeMessage.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    WelcomeMessage
  },
  data () {
    return {
      user: {},
      logined: false,
      avatar: ''
    }
  },
  async mounted () {
    NProgress.start()
    const data = await Auth()
    if (data.status) {
      this.user = data.user
      this.avatar = data.avatar
      this.logined = true
    } else {
      this.logined = false
    }
    NProgress.done()
  }
})
</script>
