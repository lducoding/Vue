<template>
  <div>
    <div>{{turn}}님의 턴입니다.</div>
    <table-component :tableData="tableData"></table-component>
    <div v-if="winner">{{winner}}님의 승리</div>
  </div>
</template>

<script>
import TableComponent from "./TableComponent";
import EventBus from "./EventBus";
export default {
  components: {
    TableComponent
  },
  data() {
    return {
        tableData: [
          ['','',''],
          ['','',''],
          ['','',''],
        ],
        turn: 'O',
      winner: '',
    };
  },
  computed: {

  },
  methods: {
    onClickTd(rowIndex, cellIndex) {
      // const rootData = this.$root.$data;
      this.$set(this.tableData[rowIndex], cellIndex, this.turn);

      let win = false;
      if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn) {
        win = true;
      }
      if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn) {
        win = true;
      }
      if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
        win = true;
      }
      if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
        win = true;
      }

      if (win) { // 이긴 경우: 3줄 달성
        this.winner = this.turn;
        this.turn = 'O';
        this.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
      } else { // 무승부
        let all = true; // all이 true면 무승부라는 뜻
        this.tableData.forEach((row) => { // 무승부 검사
          row.forEach((cell) => {
            if (!cell) {
              all = false;
            }
          });
        });
        if (all) { // 무승부
          this.winner = '';
          this.turn = 'O';
          this.tableData = [['', '', ''], ['', '', ''], ['', '', '']];
        } else {
          this.turn = this.turn === 'O' ? 'X' : 'O';
        }

      }
    },
  },
  created() {
    EventBus.$on('clickTd', this.onClickTd)
  }
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