<template>
  <div class="orderInfo">
    <commonHeader :to="{path:'/success'}" :slotData="{title:'成功订单状态'}">
    </commonHeader>
    <div class="address">{{orders.address}}</div>
    <ul class="goodsList">
      <li class="caption">
        <span class="name">SKU</span>
        <span class="num">数量</span>
        <span class="price">价格</span>
      </li>
      <li v-for='(goods,index) in orders.data' :key="index" class="goods">
        <span class="name">{{goods.name}}</span>
        <span class="num">{{goods.num}}</span>
        <span class="price">{{goods.price}}</span>
      </li>
    </ul>
    <div class="isPush">
      <span class="msg">是否有赠品</span>
      <div class="box" ref='box' @click='toggle'></div>
    </div>
    <div class="comment">备注：</div>
    <textarea name="" id="" cols="30" rows="10" placeholder="点击填写备注~">

    </textarea>
    <div class="bottom">
      <span>
        总价：
        <i class="money">1920.00</i>
      </span>
      <span>
        已优惠：
        <i class="money">280.00</i>
      </span>
      <span>
        实付：
        <i class="money">0</i>
      </span>
    </div>
  </div>
</template>
<script>
import commonHeader from '@/components/header'
export default {
  name: 'orderInfo',
  components: {
    commonHeader
  },
  data() {
    return {
      orders: {
        address: '乌鲁木齐大西桥超市',
        data: [
          {
            name: '护舒宝轻柔纯棉超薄型超薄特惠装 152片',
            num: 12,
            price: 1520
          }
        ],
        isPush: true,
        comment: ''
      }
    }
  },
  methods: {
    toggle() {
      let bool = this.$refs.box.classList.contains('off')
      if (bool) {
        this.$refs.box.classList.remove('off')
      } else {
        this.$refs.box.classList.add('off')
      }
    }
  }
}
</script>
<style lang='scss' scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
.orderInfo {
  position: relative;
  height: 100%;
  .address {
    padding-left: px2rem($pl28);
    height: px2rem(84);
    line-height: px2rem(84);
    font-size: px2rem($f28);
    color: $c000;
    background-color: $cfafafa;
  }
  .caption {
    padding-left: px2rem($pl28);
    display: flex;
    align-items: center;
    height: px2rem(66);
    line-height: px2rem(66);
    font-size: px2rem($f24);
    color: $c000;
    text-align: center;
    border: px2rem(1) solid $ce8e8e8;
    border-left: none;
    border-right: none;
    .name {
      flex: 4;
    }
    .num,
    .price {
      flex: 1;
    }
  }
  .goods {
    height: px2rem(84);
    font-size: px2rem($f22);
    color: $c000;
    line-height: px2rem(84);
    padding-left: px2rem($pl28);
    display: flex;
    text-align: center;
    .name {
      flex: 4;
      text-align: left;
    }
    .num,
    .price {
      flex: 1;
    }
    .num {
      border: px2rem(1) solid $ce8e8e8;
      border-top: none;
      border-bottom: none;
    }
  }
  .isPush {
    display: flex;
    padding-left: px2rem($pl28);
    padding-right: px2rem($pl28);
    justify-content: space-between;
    align-items: center;
    height: px2rem(84);
    line-height: px2rem(84);
    font-size: px2rem($f24);
    color: $c000;
    border: px2rem(1) solid $ce8e8e8;
    border-left: none;
    border-right: none;
    .box {
      width: px2rem(72);
      height: px2rem(44);
      background-color: $c4bd963;
      position: relative;
      border-radius: px2rem(22);
    }
    .box:before {
      position: absolute;
      display: inline-block;
      content: ' ';
      width: px2rem(40);
      height: px2rem(40);
      border-radius: px2rem(20);
      background-color: $cfff;
      box-shadow: 0 0 px2rem(5) $c000;
      right: px2rem(2);
      top: px2rem(2);
    }
    .off {
      background-color: $ce8e8e8;
    }
    .off:before {
      right: auto;
      left: px2rem(2);
    }
  }
  .comment {
    font-size: px2rem($f24);
    line-height: px2rem(66);
    height: px2rem(66);
    background-color: $cfafafa;
    padding-left: px2rem($pl28);
  }
  textarea {
    padding-left: px2rem($pl28);
    padding-right: px2rem($pl28);
    border: px2rem(1) solid $ce8e8e8;
    border-left: none;
    border-right: none;
    width: 100%;
    font-size: px2rem($f22);
    color: $c757575;
    height: px2rem(200);
    line-height: px2rem(66);
  }
  .bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: px2rem(110);
    display: flex;
    padding-left: px2rem($pl28);
    padding-right: px2rem($pl28);
    justify-content: space-around;
    align-items: center;
    color: $c000;
    font-size: px2rem($f24);
    border-top: px2rem(1) solid $ce8e8e8;
    .money {
      font-size: px2rem($f30);
      color: $cf00;
    }
  }
}
</style>
