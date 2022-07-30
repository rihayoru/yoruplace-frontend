<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" @click="$router.go(0)">요루플레이스</a>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" @click="PageHome()">홈</a>
            <a class="nav-link active" aria-current="page" @click="PageVerify()">인증</a>
            <a class="nav-link active" aria-current="page" @click="PageInvite()">서버참가</a>
          </div>
        </div>
        <button type="button" class="btn btn-primary discord" @click="login()">
          <i class="fa-brands fa-discord" v-if="!logined"></i>
          <i class="fa-solid fa-arrow-right-from-bracket" v-if="logined"></i>
          {{ logined ? '로그아웃' : '로그인' }}
        <span class="badge text-bg-secondary" v-if="logined">{{user?.username}}#{{user?.discriminator}}</span>
      </button>
    </div>
  </nav>
</template>

<script lang="ts">
import { config } from '@/config'
import { defineComponent } from 'vue'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

export default defineComponent({
  name: 'Nav-bar',
  components: {
  },
  props: {
    logined: Boolean,
    user: Object,
    avatar: String
  },
  data () {
    return {
    }
  },
  methods: {
    login () {
      if (this.logined) {
        cookies.remove('token')
        this.$router.go(0)
      } else {
        window.location.href = `https://discord.com/api/oauth2/authorize?client_id=1001463528911274115&redirect_uri=${encodeURI(config.DISCORD_CALLBACK_URI)}&response_type=code&scope=identify%20email%20guilds%20guilds.join`
      }
    },
    PageVerify () {
      this.$router.push('/verify')
    },
    PageInvite () {
      this.$router.push('/invite')
    },
    PageHome () {
      this.$router.push('/')
    }
  }
})
</script>

<style scoped lang="scss">
@font-face {
    font-family: 'EarlyFontDiary';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_220508@1.0/EarlyFontDiary.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
a {
 font-family: 'EarlyFontDiary';
}
.discord {
  font-family: 'EarlyFontDiary';
  background-color: #5865F2;
}
</style>
