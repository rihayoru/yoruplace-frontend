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
import LoadingProgress from '@/components/LoadingProgress.vue'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

export default defineComponent({
  name: 'NotFound',
  components: {
    LoadingProgress
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
      const token = cookies.get('token')
      const response = await get(config.API_URL + '/auth/kakao').set('Authorization', `Bearer ${token}`).query({ code })
      if (response.body.status !== 200) {
        this.$emit('reload')
        return this.$router.push('/')
      }
      this.$router.push('/')
    } catch (err) {
      this.$router.push('/')
    }
  }
})
</script>

<style lang="scss">
</style>
