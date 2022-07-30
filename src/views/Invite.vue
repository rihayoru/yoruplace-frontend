<template>
  <Navbar :user="user" :logined="logined" :avatar="avatar"/>
  <main class="bsod container">
    <Verify :user="user" :logined="logined" :type="2"/>
    <div class="center">
      <vue-recaptcha style="display: inline-block" sitekey="6LcvgzIhAAAAAIXKN6aZghz-zew5MwNA7LpRO1-c" @verify="invite()" />
    </div>
  </main>
</template>

<script lang="ts">
import Auth from '@/auth'
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Verify from '@/components/Verify.vue'
import { VueRecaptcha } from 'vue-recaptcha'
export default defineComponent({
  name: 'HomeView',
  components: {
    Navbar,
    Verify,
    VueRecaptcha
  },
  data () {
    return {
      user: {},
      logined: false,
      avatar: ''
    }
  },
  methods: {
    invite () {
      alert('인증됨')
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

<style>
.center {
  text-align: center !important;
  padding-top: 10px;
}
</style>
