<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">요루플레이스</a>
            <button type="button" class="btn btn-primary discord">
              <i class="fa-brands fa-discord"></i>
              로그인 <span class="badge text-bg-secondary" v-if="role">{{role}}</span>
            </button>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Nav-bar',
  props: {
    msg: String
  },
  data () {
    return {
      role: ''
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
