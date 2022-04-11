<template>
  <div>
    <div>
      <router-link to="/game/index">게임매쳐</router-link>
      <router-link to="/game/number-baseball?pages=3&offset=10&limit=1&sort=createdAt">숫자야구</router-link>
      <router-link to="/game/response-check">반응속도체크</router-link>
      <router-link to="/game/rock-scissors-paper">가위바위</router-link>
      <router-link to="/game/lotto-generator">로또</router-link>
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