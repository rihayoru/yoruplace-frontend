<template>
  <Navbar :user="user" :logined="logined" :avatar="avatar"/>
  <main class="bsod container">
    <Verify :user="user" :logined="logined" :type="1"/>
    <div class="center">
      <img src="@/assets/img/kakao_login_medium_narrow.png" @click="KakaoLogin()"/>
    </div>
  </main>
</template>

<script lang="ts">
import Auth from '@/auth'
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Verify from '@/components/Verify.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    Navbar,
    Verify
  },
  data () {
    return {
      user: {},
      logined: false,
      avatar: ''
    }
  },
  methods: {
    KakaoLogin () {
      window.location.href = 'https://kauth.kakao.com/oauth/authorize?client_id=9818ea7d25d176492a24cde6c43165e7&redirect_uri=http://localhost:8080/verify/callback&response_type=code'
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
  text-align: center;
  padding-top: 10px;
}
</style>
