<template>
  <header>
    <h1>{{ propsdata }}</h1>
    <button v-on:click="renewBtn">버튼</button>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  props: ['propsdata'],
  methods: {
    renewBtn: function () {
      this.$emit('renew', 'gogo')
    }
  }
}
</script>

<style scoped>

</style>