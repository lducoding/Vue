<template>
  <div>
    <div>
      <router-link to="/number-baseball">숫자야구</router-link>
      <router-link to="/response-check">반응속도체크</router-link>
      <router-link to="/rock-scissors-paper">가위바위</router-link>
      <router-link to="/lotto-generator">로또</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import router from './routes'
export default {
  router,
};
</script>

<style scoped>

</style>