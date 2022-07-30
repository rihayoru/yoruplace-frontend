<template>
  <main class="bsod container">
    <WelcomeMessage :user="user" :logined="logined"/>
  </main>
</template>

<script lang="ts">
import { io } from 'socket.io-client'
import { defineComponent } from 'vue'
import WelcomeMessage from '@/components/WelcomeMessage.vue'

const socket = io('ws://localhost:3000')
socket.on('connect', () => {
  console.log(socket.id)
})
export default defineComponent({
  name: 'HomeView',
  components: {
    WelcomeMessage
  },
  data () {
    return {
      user: {},
      logined: false
    }
  }
})
</script>
