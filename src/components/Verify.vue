<template>
<main class="bsod container" v-if="type===1">
  <h1 class="neg title"><span class="bg">인증</span></h1>
  <p>요루플레이스 인증</p>
  <p>* 안전한 요루플레이스의 사용을 위해 카카오인증이 완료되지 않은 이용자에 대해서는 몇가지 제한사항이 있습니다<br/></p>
  <p>* 카카오 계정을 사용하셔서 인증을 해주세요!<br/></p>
</main>
<main class="bsod container" v-if="type===2">
  <h1 class="neg title"><span class="bg">서버 참가</span></h1>
  <p>요루플레이스 참가방법</p>
  <p>* 스팸봇등 레이드 방지를 위해 요루플레이스는 초대링크를 사용하지 않습니다<br/></p>
  <p>* 아래 캡챠를 완료하시고 참가버튼을 누르시면 로그인된 디스코드계정으로 서버에 참가됩니다<br/></p>
</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { VueRecaptcha } from 'vue-recaptcha'

export default defineComponent({
  name: 'Welcome-Message',
  props: {
    user: Object,
    logined: Boolean,
    type: Number
  },
  methods: {
    load () {
      this.$router.push('/loading')
    }
  }
})
</script>

<style>
</style>
