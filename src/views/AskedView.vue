<template>
  <QusetionModal v-on:reload="reload()"/>
  <main class="bsod container">
    <h1 class="neg title"><span class="bg">익명 질문함</span></h1>
    <p>귀염둥이 요루에게 질문을 마구마구 던져보아요!</p>
    <p class="warning">* 이상한 질문에는 대답해주지 않을수도 있어요</p>
    <div class="scroll">
      <QuestionCard :questions="questions"/>
    </div>
    <button type="button" class="btn btn-secondary btn-pink" style="float:right" data-bs-toggle="modal" data-bs-target="#Add"><i class="fas fa-plus"></i>질문 등록</button>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import QuestionCard from '@/components/QuestionCard.vue'
import QusetionModal from '@/components/QusetionModal.vue'
import { config } from '@/config'
import { get } from 'superagent'
import NProgress from 'nprogress'

export default defineComponent({
  name: 'AskedView',
  components: {
    QuestionCard,
    QusetionModal
  },
  data () {
    return {
      questions: []
    }
  },
  methods: {
    async reload () {
      NProgress.start()
      const response = await get(config.API_URL + '/asked/')
      this.questions = response.body.questions
      NProgress.done()
    }
  },
  async mounted () {
    this.reload()
  }
})
</script>

<style>
.warning{
  color: #EAACB8;
}
.btn-pink{
  background-color: #EAACB8;
  border: 0;
  outline: 0;
  --bs-btn-hover-bg: #e696a6;
}
.scroll{
  overflow:auto;
  height: 480px;
  margin-bottom: 15px;
}
</style>
