<template>
  <Navbar :user="user" :logined="logined" :avatar="avatar"/>
  <main class="bsod container">
    <WelcomeMessage :user="user" :logined="logined"/>
  </main>
</template>

<script lang="ts">
import Auth from '@/auth'
import { io } from 'socket.io-client'
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'
import WelcomeMessage from '@/components/WelcomeMessage.vue'

const socket = io('ws://localhost:3000')
socket.on('connect', () => {
  console.log(socket.id)
})
export default defineComponent({
  name: 'HomeView',
  components: {
    Navbar,
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
    const data = await Auth()
    if (data.status) {
      this.user = data.user
      this.avatar = data.avatar
      this.logined = true
    } else {
      this.logined = false
    }
  }
})
</script>
