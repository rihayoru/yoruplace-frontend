<template>
<Navbar :user="user" :logined="logined" class="blur"/>
<main class="bsod container">
  <WelcomeMessage :user="user" :logined="logined" class="blur"/>
  <LoadingProgress/>
</main>
</template>

<script lang="ts">
/* eslint-disable camelcase */
import Auth from '@/auth'
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'
import LoadingProgress from '@/components/LoadingProgress.vue'
import WelcomeMessage from '@/components/WelcomeMessage.vue'

export default defineComponent({
  name: 'NotFound',
  components: {
    WelcomeMessage,
    LoadingProgress,
    Navbar
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

<style lang="scss">
.blur {
  filter: blur(4px);
}
</style>
