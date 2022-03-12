<template>
  <div>
    <div>{{turn}}님의 턴입니다.</div>
    <table-component :tableData="tableData"></table-component>
    <div v-if="winner">{{winner}}님의 승리</div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import store from './store'
import TableComponent from "./TableComponent";
export default {
  store,
  components: {
    TableComponent
  },
  computed: {
    ...mapState(['winner','turn']),
    // winner() {
    //   return this.$store.state.winner;
    // },
    // turn() {
    //   return this.$store.state.turn;
    // },
    // tableData() {
    //   return this.$store.state.tableData;
    // },
  },
  methods: {
    onClickTd(rowIndex, cellIndex) {
      // const rootData = this.$root.$data;

    },
  },
};
</script>

<style>
  table {
    border-collapse: collapse;
  }
  td {
    border: 1px solid black;
    width: 200px;
    height: 200px;
    text-align: center;
  }
</style>