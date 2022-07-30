<template>
  <main class="bsod container">
    <Verify :user="user" :logined="logined" :type="1" :verified="this.me?.kakao"/>
    <div class="center">
      <img src="@/assets/img/kakao_login_medium_narrow.png" @click="KakaoLogin()" :class="{'verified': this.me?.kakao }"/>
    </div>
  </main>
</template>

<script lang="ts">
import { config } from '@/config'
import { defineComponent } from 'vue'
import Verify from '@/components/Verify.vue'
export default defineComponent({
  name: 'HomeView',
  components: {
    Verify
  },
  data () {
    return {
      user: {},
      logined: false,
      verified: true
    }
  },
  props: {
    me: Object
  },
  methods: {
    KakaoLogin () {
      if (!this.me?.kakao) window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=9818ea7d25d176492a24cde6c43165e7&redirect_uri=${config.KAKAO_CALLBACK_URI}&response_type=code`
    }
  }
})
</script>

<style>
.center {
  text-align: center;
  padding-top: 10px;
}
.verified {
  filter: grayscale(100%);
  display: none;
}
</style>
