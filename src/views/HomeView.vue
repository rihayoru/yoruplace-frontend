<template>
  <Navbar msg="Welcome to Your Vue.js + TypeScript App"/>
  <main class="bsod container">
    <WelcomeMessage/>
    <!-- <GuestBook/> -->
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'
import WelcomeMessage from '@/components/WelcomeMessage.vue'
// import GuestBook from '@/components/GuestBook.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    Navbar,
    WelcomeMessage
    // GuestBook
  }
})
</script>
