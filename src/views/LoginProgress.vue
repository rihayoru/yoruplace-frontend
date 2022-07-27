<template>
<!-- <Navbar msg="Welcome to Your Vue.js + TypeScript App"/> -->
<main class="bsod container">
  <LoadingProgress v-if="isLoading"/>
</main>
</template>

<script lang="ts">
/* eslint-disable camelcase */
import { get } from 'superagent'
import { defineComponent } from 'vue'
// import Navbar from '@/components/Navbar.vue'
import { useCookies } from 'vue3-cookies'
import LoadingProgress from '@/components/LoadingProgress.vue'
const { cookies } = useCookies()

export default defineComponent({
  name: 'NotFound',
  components: {
    LoadingProgress
    // Navbar
  },
  data () {
    return {
      isLoading: true
    }
  },
  methods: {

  },
  async mounted () {
    if (!this.$route.query || !this.$route.query.code) {
      return this.$router.push('/')
    }
    const code = this.$route.query.code
    const response = await get('http://localhost:3000/auth/callback').query({ code })
    cookies.set('token', response.body.token)
    this.$router.push('/')
  }
})
</script>

<style lang="scss">
</style>
