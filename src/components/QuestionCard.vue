<template>
<div class="card" v-for="(q, i) in questions" :key="i">
  <div class="card-header card-title"><i class="fa-solid fa-lock" v-if="q.hide"></i> # {{q.id}}</div>
  <div class="card-body 흐에흐에" v-bind:class="{ blur: q.hide }">
    <blockquote class="blockquote mb-0">
      <p class="card-question">{{q.question}}</p>
      <footer class="blockquote-footer">{{q.answer}}</footer>
    </blockquote>
  </div>
   <!-- <div class="card-header card-title card-footer">
    <i class="fa-solid fa-thumbs-up" style="margin-right:10px"></i>
    <i class="fa-solid fa-thumbs-down"></i>
  </div> -->
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'QuestionCard',
  props: {
    questions: Array
  },
  data () {
    return {

    }
  },
  methods: {

  }
})
</script>

<style>
.card {
  margin: 15px;
}
.card-title {
  color: #4C4B4C;
  background-color: #ffffff;
}
.card-footer {
  color: #4C4B4C;
  background-color: #e2e2e2;
}
.card-question {
  color: #F4F4F4;
}
.흐에흐에 {
  background: linear-gradient(to right, rgb(85, 205, 252), rgb(179, 157, 233), rgb(247, 168, 184), rgb(246, 216, 221), rgb(246, 220, 232));
  color: #CDCDCD;
}
</style>
