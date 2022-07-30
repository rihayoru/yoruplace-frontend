<template>
  <Navbar :user="user" :logined="logined" :avatar="avatar" :current-page="current" :key="componentKey"/>
  <router-view :me="user" v-on:reload="forceRerender()"/>
</template>

<script lang="ts">
import Auth from '@/auth'
import Navbar from '@/components/Navbar.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'APP',
  components: {
    Navbar
  },
  data () {
    return {
      user: {},
      logined: false,
      avatar: '',
      current: 0,
      componentKey: 0
    }
  },
  methods: {
    navbar () {
      switch (this.$router.currentRoute.value.path) {
        case '/':
          this.current = 0
          break
        case '/verify':
          this.current = 1
          break
        case '/invite':
          this.current = 2
          break
      }
    },
    async forceRerender () {
      this.componentKey += 1
      const data = await Auth()
      if (data.status) {
        this.user = data.user
        this.avatar = data.avatar
        this.logined = true
      } else {
        this.logined = false
      }
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
    setInterval(() => {
      this.navbar()
    }, 100)
  }
})

</script>

<style lang="scss">
@import '@/assets/css/index.scss'
</style>
