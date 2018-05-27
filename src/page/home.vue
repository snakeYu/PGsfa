<template>
  <div id="home">
    <commonHeader :slotData='{title:" SFA ",rCls:"bg add"}' @fun='to'>
    </commonHeader>
    <echarts></echarts>
    <sudoku></sudoku>
  </div>
</template>

<script>
import commonHeader from '../components/header.vue'
import echarts from '../components/echart.vue'
import sudoku from '../components/sudoku.vue'
export default {
  name: 'home',
  components: { commonHeader, echarts, sudoku },
  methods: {
    to() {
      this.$router.push({
        path: '/self'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  //header头部的右边加号按钮的样式
  & /deep/ .add {
    display: inline-block;
    width: px2rem(47);
    height: px2rem(48);
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('../assets/images/user.png');
  }
}
</style>
