<template>
  <div id="order">
    <commonHeader @fun='fun' :slotData="{title:'下单',rCls:'add'}">
      <span slot='right'>
        <div class="icon" @click='$router.back()'>
          <img src="@/assets/images/购物车@3x.png" alt="">
        </div>
      </span>
    </commonHeader>
    <search></search>
    <div class="filtration">
      <div class="sort">
        <ul>
          <li v-for="(item,index) in sort" :key='item.key' v-text="item" @click="fn(index)">全部</li>
        </ul>
      </div>
      <div class="filt">
        <div class="number">
          <span class="current">123</span>
          <span>/</span>
          <span class="total">123123</span>
        </div>
        <div class="currentSort">
          <div class="name">
            <ul>
              <li>洗护
                <span>/</span>
              </li>
              <li>洗护
                <span>/</span>
              </li>
              <li>洗护</li>
            </ul>
          </div>
          <div class="img"> <img src="@/assets/images/筛选@3x.png" alt="筛选"></div>
        </div>
      </div>
    </div>
    <sort></sort>
  </div>
</template>
<script>
import commonHeader from '@/components/header.vue'
import search from '@/components/store/search.vue'
import sort from '@/components/store/sort.vue'
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'order',
  components: { commonHeader, search, sort },
  data() {
    return {
      sort: ['促销', '全部', 'PXKU-N', 'PXKU', 'QAUS'],
      start: 0
    }
  },
  methods: {
    ...mapMutations(['getAll', 'funHid']),
    async getGoodsList(start) {
      const { data } = await this.$http.get(`api/goodsList${start}`)
      if (data.code === 0) {
        this.getAll(data.data)
      }
    },
    fn(index) {
      let start = `?q=$(this.sort[index])`
      if (index <= 1) {
        start = `?_start=$(this.start)&_limit=5`
      }
      this.getGoodsList(start)
    },
    fun() {
      this.$router.push({
        path: '/cart',
        name: 'cart'
      })
    }
  },
  mounted() {
    const start = `?_start=$(this.start)&_limit=5`
    this.getGoodsList(start)
    this.funHid(true)
  },
  computed: {
    ...mapState(['selDate'])
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
#order {
  height: 100%;
  overflow: hidden;
  .filtration {
    .sort {
      border-bottom: px2rem(1) solid #ccc;
      ul {
        overflow: hidden;
        margin: px2rem(10) px2rem(30);
        li {
          font-size: px2rem(28);
          padding: px2rem(10) px2rem(30);
          float: left;
          border-right: px2rem(1) solid #ccc;
        }
        .hid {
          border-right: none;
        }
      }
    }
    .filt {
      padding: px2rem(20) px2rem(30);
      margin: 0 px2rem(30);
      border-bottom: px2rem(1) solid #ccc;
      font-size: px2rem(24);
      display: flex;
      justify-content: space-between;

      .currentSort {
        display: flex;
        ul {
          display: flex;
          li {
            span {
              font-size: px2rem(28);
              padding: 0 px2rem(5);
            }
          }
        }
        .img {
          margin-left: px2rem(30);
          img {
            width: px2rem(30);
            height: px2rem(30);
          }
        }
      }
    }
  }
  //header头部的右边加号按钮的样式
  & /deep/ .add {
    display: inline-block;
    width: px2rem(47);
    height: px2rem(48);
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('../../assets/images/购物车@3x.png');
  }
}
</style>
