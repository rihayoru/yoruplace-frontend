<template>
<main class="bsod container">
  <LoadingProgress v-if="isLoading"/>
</main>
</template>

<script lang="ts">
/* eslint-disable camelcase */
import { get } from 'superagent'
import { config } from '@/config'
import { defineComponent } from 'vue'
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
    try {
      const response = await get(config.API_URL + '/auth/callback').query({ code })
      const { token } = response.body
      cookies.set('token', token)
      this.$emit('reload')
      this.$router.push('/')
    } catch (err) {
      alert('로그인에 실패했습니다')
      this.$router.push('/')
    }
  }
})
</script>

<style lang="scss">
</style>
