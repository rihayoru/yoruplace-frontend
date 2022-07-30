<template>
<main class="bsod container">
  <h1 class="neg title"><span class="bg">요?루</span></h1>
  <p>여기에는 아무것도 없어요</p>
  <p>* 뭘 하시다 여기에 오신지는 모르겠지만 이곳은 404페이지에요.<br /></p>
  <div class="center">
    <button type="button" class="btn btn-secondary" @click="goBack()">뒤로가기</button>
  </div>
</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NotFound',
  components: {
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
})
</script>

<style lang="scss">
.center {
  text-align: center;
  padding-top: 10px;
}
</style>
