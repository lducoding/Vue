<template>
  <td @click="onClickTd">
    {{cellData}}
  </td>
</template>

<script>
export default {
  name: "TdComponent",
  props: {
    rowIndex: Number,
    cellData: String,
    cellIndex: Number,
  },
  data() {
    return {

    }
  },
  methods: {
    onClickTd() {
      const rootData = this.$root.$data;
      this.$set(rootData.tableData[this.rowIndex], this.cellIndex, rootData.turn);
      rootData.turn = rootData.turn === 'O' ? 'X' : 'O';
    }
  }
}
</script>

<style scoped>

</style>