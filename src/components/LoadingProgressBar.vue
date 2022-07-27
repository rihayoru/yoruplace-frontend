<template>
<div class="loader">
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
  <div class="bar4"></div>
  <div class="bar5"></div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Loading-Progress',
  props: {

  }
})
</script>

<style lang="scss">
body,html {
  background-color: #1c2020;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.loader {
  margin: 0 auto;
  width: 60px;
  height: 50px;
  text-align: center;
  font-size: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translateY(-50%) translateX(-50%);

  > div {
    height: 100%;
    width: 10px;
    display: inline-block;
    float: left;
    margin-left: 2px;
    -webkit-animation: delay 0.8s infinite ease-in-out;
    animation: delay 0.8s infinite ease-in-out;
  }

  .bar1{
    background-color: #7ACBF5;
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s;
  }
  .bar2{
    background-color: #EAACB8;
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s;
  }
  .bar3{
    background-color: #FFFFFF;
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s;
  }
  .bar4{
    background-color: #EAACB8;
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s;
  }
  .bar5{
    background-color: #7ACBF5;
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s;
  }
}

@-webkit-keyframes delay {
  0%, 40%, 100% { -webkit-transform: scaleY(0.05) }
  20% { -webkit-transform: scaleY(1.0) }
}

@keyframes delay {
  0%, 40%, 100% {
    transform: scaleY(0.05);
    -webkit-transform: scaleY(0.05);
  }  20% {
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
</style>
