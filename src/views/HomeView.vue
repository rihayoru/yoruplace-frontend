<template>
  <Navbar :logined="logined"/>
  <main class="bsod container">
    <WelcomeMessage :user="user" :logined="logined"/>
    <!-- <GuestBook/> -->
  </main>
</template>

<script lang="ts">
import Auth from '@/auth'
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'
import WelcomeMessage from '@/components/WelcomeMessage.vue'
// import GuestBook from '@/components/GuestBook.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Navbar,
    WelcomeMessage
    // GuestBook
  },
  data () {
    return {
      user: {},
      logined: false
    }
  },
  async mounted () {
    const data = await Auth()
    console.log(data)
    if (data.status) {
      this.user = data.user
      this.logined = true
    } else {
      this.logined = false
    }
  }
})
</script>
