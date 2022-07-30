<template>
  <main class="bsod container">
    <Verify :user="user" :logined="logined" :type="2"/>
    <div class="center">
      <vue-recaptcha style="display: inline-block" sitekey="6LcvgzIhAAAAAIXKN6aZghz-zew5MwNA7LpRO1-c" @verify="invite()" />
    </div>
  </main>
</template>

<script lang="ts">
import Swal from 'sweetalert2'
import { config } from '@/config'
import { get } from 'superagent'
import { defineComponent } from 'vue'
import Verify from '@/components/Verify.vue'
import { VueRecaptcha } from 'vue-recaptcha'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

export default defineComponent({
  name: 'HomeView',
  components: {
    Verify,
    VueRecaptcha
  },
  data () {
    return {
      user: {},
      logined: false,
      avatar: ''
    }
  },
  methods: {
    async invite () {
      const token = cookies.get('token')
      try {
        const response = await get(config.API_URL + '/join').set('Authorization', `Bearer ${token}`)
        if (response.statusCode === 200) {
          Swal.fire({
            title: '참가완료!',
            text: '디스코드에서 확인해주세요',
            icon: 'success',
            confirmButtonText: '확인'
          })
          this.$router.push('/')
        } else {
          Swal.fire({
            title: '오류발생',
            text: '다시 시도해주세요',
            icon: 'error',
            confirmButtonText: '확인'
          })
          this.$router.push('/')
        }
      } catch (error) {
        Swal.fire({
          title: '오류발생',
          text: '다시 시도해주세요',
          icon: 'error',
          confirmButtonText: '확인'
        })
        this.$router.push('/')
      }
    }
  }
})
</script>

<style>
.center {
  text-align: center !important;
  padding-top: 10px;
}
</style>
