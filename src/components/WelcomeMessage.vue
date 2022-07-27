<template>
<main class="bsod container">
  <h1 class="neg title"><span class="bg">환영합니다</span></h1>
  <p>잡다한 공간 요루플레이스 입니다</p>
  <p>* 디스코드 계정을 이용하여 요루플레이스를 이용하실 수 있어요<br/></p>
  <p v-if="!logined">* 계정정보 : 로그인되지 않음<br/></p>
  <p v-if="logined">* 계정정보 : {{user?.username}}#{{user?.discriminator}}<br/></p>
  <div class="d-grid gap-2">
  <button class="btn btn-primary 흐에흐에" type="button" @click="load()">로딩화면 계속보기</button>
</div>
</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Welcome-Message',
  props: {
    user: Object,
    logined: Boolean
  },
  methods: {
    load () {
      this.$router.push('/loading')
    }
  }
})
</script>

<style>
.흐에흐에 {
  background: linear-gradient(to right, rgb(85, 205, 252), rgb(179, 157, 233), rgb(247, 168, 184), rgb(246, 216, 221), rgb(255, 255, 255));
  color: slategrey;
}
</style>
