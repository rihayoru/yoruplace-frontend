<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" @click="$router.push('/')">요루플레이스</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" @click="PageVerify()" :class="{'active': currentPage === 1 }">인증</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" @click="PageInvite()" :class="{'active': currentPage === 2 }">서버참가</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" @click="PageAsked()" :class="{'active': currentPage === 3 }">질문함</a>
          </li>
        </ul>
        <button type="button" class="btn btn-primary discord" @click="login()">
            <i class="fa-brands fa-discord" v-if="!logined"></i>
            <i class="fa-solid fa-arrow-right-from-bracket" v-if="logined"></i>
            {{ logined ? '로그아웃' : '로그인' }}
          <span class="badge text-bg-secondary" v-if="logined">{{user?.username}}#{{user?.discriminator}}</span>
        </button>
      </div>
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
    avatar: String,
    currentPage: Number
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
    PageAsked () {
      this.$router.push('/asked')
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
