<template>
  <div id="cart">
    <commonHeader @fun='fun' :slotData="{title:title,rMsg:'编辑'}">
    </commonHeader>
    <div class="container">
      <cartList :tab="tab"></cartList>
    </div>
    <div class="footer">
      <div class="all" @click="totalAll">
        <div class="out">
          <div class="in" v-if="tab"></div>
        </div>
        <p>全选</p>
      </div>
      <div class="total">
        <span>合计：</span>
        <span v-text="total"></span>
      </div>
      <div class="btn" @click="submit">
        <span>确认</span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import commonHeader from '@/components/header.vue'
import cartList from '@/components/store/cartList.vue'
export default {
  name: 'cart',
  components: { commonHeader, cartList },
  data() {
    return {
      title: '',
      total: 0,
      tab: false
    }
  },
  methods: {
    totalAll() {
      this.tab = !this.tab
      let total = 0
      this.title = localStorage.getItem('storeName')
      this.cartList.forEach(element => {
        element.list.forEach(element => {
          total += parseInt(element.num) * parseFloat(element.pirce)
        })
      })
      this.total = total
    },
    ...mapMutations(['addCart']),
    fun() {
      console.log('编辑')
    },
    submit() {
      this.$router.push({
        path: '/submitOrder',
        name: 'submitOrder'
      })
    }
  },
  computed: {
    ...mapState(['cartList'])
  },
  mounted() {
    this.title = localStorage.getItem('storeName')
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
#cart {
  height: 100%;
  .container {
    height: 80%;
    overflow: auto;
  }
  .footer {
    width: 100%;
    font-size: px2rem(24);
    position: absolute;
    bottom: 0px;
    left: 0px;
    border-top: px2rem(1) solid #ccc;
    display: flex;
    justify-content: space-between;
    padding: px2rem(30);
    line-height: px2rem(70);
    .btn {
      width: px2rem(168);
      height: px2rem(70);
      background: #109d30;
      span {
        color: #fff;
      }
      text-align: center;
    }
    .all {
      display: flex;
      .out {
        cursor: pointer;
        width: px2rem(16);
        height: px2rem(16);
        border: 1px solid #9a9a9a;
        border-radius: px2rem(16);
        margin: 0 px2rem(10);
        position: relative;
        transform: translate(0, px2rem(25));
        .in {
          position: absolute;
          width: px2rem(10);
          height: px2rem(10);
          background: #00a2eb;
          border-radius: px2rem(10);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
</style>
