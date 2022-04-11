<template>
  <td @click="onClickTd">
    {{cellData}}
  </td>
</template>

<script>
import EventBus from "./EventBus";
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
      if(this.cellData) return;
      EventBus.$emit('clickTd', this.rowIndex, this.cellIndex)
    }
  }
};
</script>

<style scoped>

</style>