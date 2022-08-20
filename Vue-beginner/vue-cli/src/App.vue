<template>
  <div>
    <app-header
        v-bind:propsdata="str"
        v-on:renew="renewStr"></app-header>
    {{str}}
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";

export default {
  components: {
    AppHeader,
    'app-header': AppHeader
  },
  // vue cli에서는 재사용때문에 data: 이런식으로 안하고 밑의 방식으로 한다.
  data: function () {
    return {
      str: 'merlin'
    }
  },
  methods: {
    renewStr: function (val) {
      this.str = val;
    }
  }
}
</script>

<style scoped>

</style>