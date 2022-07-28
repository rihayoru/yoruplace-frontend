<template>
<!-- <vue-basic-alert :duration="300" :closeIn="3000" ref="alert" /> -->
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" @click="$router.go(0)">요루플레이스</a>
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
        window.location.href = 'https://discord.com/api/oauth2/authorize?client_id=1001463528911274115&redirect_uri=https%3A%2F%2Fyoru.rlato.icu%2Fcallbck&response_type=code&scope=identify%20email'
      }
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
