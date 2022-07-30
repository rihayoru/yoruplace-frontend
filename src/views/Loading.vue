<template>
<Navbar :user="user" :logined="logined" class="blur"/>
<main class="bsod container">
  <WelcomeMessage :user="user" :logined="logined" class="blur"/>
  <LoadingProgress/>
</main>
</template>

<script lang="ts">
/* eslint-disable camelcase */
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
  }
})
</script>

<style lang="scss">

</style>
