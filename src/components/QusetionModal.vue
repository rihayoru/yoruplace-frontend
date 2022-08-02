<template>
<div class="modal fade" id="Add" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">질문 등록</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="input-group">
          <span class="input-group-text">질문</span>
          <textarea class="form-control" aria-label="With textarea" v-model="question"></textarea>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">닫기</button>
        <button type="button" class="btn btn-primary btn-pink" @click="addQuestion()" data-bs-dismiss="modal">등록</button>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { config } from '@/config'
import { post } from 'superagent'

export default defineComponent({
  name: 'QusetionModal',
  data () {
    return {
      question: ''
    }
  },
  methods: {
    async addQuestion () {
      await post(config.API_URL + '/asked/add').send({ question: this.question })
      this.$emit('reload')
    }
  }
})
</script>

<style>
.modal-title {
  color: #4C4B4C;
}
</style>
