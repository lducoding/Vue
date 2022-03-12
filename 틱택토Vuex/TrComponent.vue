<template>
  <tr>
    <td-component v-for="(cellData, index) in rowData" :key="index" :cell-index="index" :row-index="rowIndex"></td-component>
  </tr>
</template>

<script>
import TdComponent from "./TdComponent";
export default {
  name: "TrComponent",
  components: {TdComponent},
  computed: {
    rowData() {
      return this.$store.state.tableData[this.rowIndex];
    }
  },
  props: {
    rowIndex: Number,
  },
  data() {
    return {
      parent: '부모'
    }
  },
}
</script>

<style scoped>

</style>