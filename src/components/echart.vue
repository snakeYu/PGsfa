<template>
  <div>
    <div class="title" v-text="title"></div>
    <div id="echarts">
      <div class="myChart"></div>
      <div class="myChart"></div>
      <div class="myChart"></div>
    </div>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'echarts',
  data: () => {
    return {
      title: '',
      chartDate: ''
    }
  },
  methods: {
    async getlun() {
      const { data } = await this.$http.get('api/progress')
      if (data.code === 0) {
        this.title = data.data.title
        this.chartDate = data.data.chartDate
      }
    },
    charts(dom, data) {
      // 基于准备好的dom，初始化echarts实例
      const myChart = echarts.init(dom)
      window.onresize = myChart.resize
      const option = {
        color: ['#28d364', '#e2e2e2'],
        graphic: {
          type: 'text',
          left: 'center',
          top: 'center',
          style: {
            text: data.percent,
            textAlign: 'center',
            fill: '#000',
            width: 30,
            height: 30,
            fontSize: 48
          }
        },
        title: {
          text: data.name,
          x: 'center',
          y: 'bottom',
          textStyle: {
            fontSize: 24
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['80%', '90%'],
            avoidLabelOverlap: false,
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [{ value: data.data }, { value: 100 - data.data }]
          }
        ]
      }

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  },
  created() {
    this.getlun()
  },
  mounted() {},
  updated() {
    const dom = document.querySelectorAll('.myChart')
    const data = this.chartDate
    this.charts(dom[0], data[0])
    this.charts(dom[1], data[1])
    this.charts(dom[2], data[2])
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/var.scss';
.title {
  text-align: center;
  margin-top: px2rem(40);
}
#echarts {
  display: flex;
  justify-content: space-around;
  overflow: hidden;
  padding-bottom: px2rem(40);
  border-bottom: px2rem(1) solid #ccc;
  .myChart {
    margin-top: px2rem(-20);
    width: px2rem(180);
    height: px2rem(250);
  }
}
</style>
