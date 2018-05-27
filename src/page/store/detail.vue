<template>
  <div id="detail">
    <commonHeader :slotData="{title:'产品选择'}"></commonHeader>
    <sort></sort>
    <div class="detail">
      <div class="store brod">
        <span>仓库</span>
        <div class="addr">
          <span v-text="goodsList.addr[0]">地址</span>
          <img src="@/assets/images/Right-s@3x.png" alt="">
        </div>
      </div>
      <div class="total brod">
        <span>库存</span>
        <span v-text="goodsList.repertory">1231232</span>
      </div>
      <div class="num brod">
        <span>数量</span>
        <div class="comp">
          <span @click="num++">+</span>
          <input type="text" v-model="num">
          <span @click="num>0?num--:0">-</span>
        </div>
      </div>
    </div>
    <div class="btn">
      <div class="cancel">取消</div>
      <div class="addcart" @click="addcart">加入购物车</div>
    </div>
  </div>
</template>
<script>
import commonHeader from '@/components/header.vue'
import sort from '@/components/store/sort.vue'
import { mapMutations } from 'vuex'
export default {
  name: 'detail',
  data() {
    return {
      goodsList: '',
      num: 1
    }
  },
  components: { commonHeader, sort },
  methods: {
    ...mapMutations(['getAll', 'funHid', 'addCart']),
    addcart() {
      this.goodsList.num = this.num
      this.goodsList.addr = '1'
      this.$router.push({
        path: '/cart',
        name: 'cart',
        params: this.goodsList
      })
      this.goods = {
        addr: this.goodsList.addr,
        list: [this.goodsList]
      }
      this.addCart(this.goods)
    }
  },
  computed: {},
  created() {
    const params = JSON.parse(localStorage.getItem('params'))
    this.goodsList = params
    this.getAll([params])
    this.funHid(false)
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
.detail {
  font-size: px2rem(30);
  .brod {
    display: flex;
    justify-content: space-between;
    padding: px2rem(20) px2rem(30);
    border-bottom: px2rem(1) solid #ccc;
    .comp {
      input {
        display: inline-block;
        width: px2rem(60);
        height: px2rem(40);
        border: px2rem(1) solid #ccc;
        font-size: px2rem(30);
        text-align: center;
        margin: 0px px2rem(10);
      }
    }
  }
}
.btn {
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  overflow: hidden;
  border-top: px2rem(1) solid #ccc;
  div {
    float: left;
    width: 50%;
    text-align: center;
    font-size: px2rem(36);
    height: px2rem(110);
    line-height: px2rem(110);
    color: #88c89e;
  }
  .cancel {
    border-right: px2rem(1) solid #ccc;
    color: #ff0000;
  }
}
</style>
