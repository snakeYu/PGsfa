<template>
  <div class="orderStatus">

    <commonHeader :to="{path:'/home'}" :slotData='{title:"订单状态"}'>
    </commonHeader>
    <div class="h4Title">
      我的订单
    </div>
    <ul class="list">
      <li v-for='(item,index) in orderList' :key='index'>
        <router-link tag='div' :to='item.target'>
          <p v-if='item.num>0?true:false' class="alert">
            <span>未读信息：{{item.num}}</span>
          </p>
          <span :class="['bg '+item.target]"></span>
          <p class="msg"> {{item.name}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import commonHeader from '@/components/header.vue'
export default {
  name: 'orderStatus',
  data() {
    return {
      orderList: [
        {
          name: '下单成功',
          target: 'success'
        },
        {
          name: '处理中',
          target: 'dispose',
          num: 13
        },
        {
          name: '待审核',
          target: 'wait'
        },
        {
          name: '无效订单',
          target: 'invalid'
        }
      ]
    }
  },

  components: { commonHeader }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
.orderStatus {
  height: 100%;
  .h4Title {
    line-height: px2rem(84);
    padding-left: px2rem(28);
    font-size: px2rem($f28);
    background-color: $cfafafa;
    border-bottom: px2rem(1) solid #dfdfdf;
  }
  .list {
    // display: flex;
    // justify-content: flex-start;
    // flex-wrap: wrap;
    li {
      float: left;
      width: 33.33333334%;
      position: relative;
      text-align: center;
      border-right: px2rem(1) solid #dfdfdf;
      border-bottom: px2rem(1) solid #dfdfdf;
    }
  }
  // 选项的通用背景图样式
  span.bg {
    display: inline-block;
    width: px2rem(50);
    height: px2rem(50);
    background-repeat: no-repeat;
    background-size: contain;
    color: $c757575;
    font-size: px2rem(28);
    margin: px2rem(108) px2rem(100) px2rem(28) px2rem(98);
  }
  // 选项名称
  p.msg {
    margin-bottom: px2rem(94);
    font-size: px2rem($f28);
  }
  //处理中的单独样式
  p.alert {
    position: absolute;
    top: px2rem(34);
    left: 0;
    width: 100%;
    text-align: center;
    span {
      display: inline-block;
      color: $cfff;
      width: px2rem(164);
      font-size: px2rem($f22);
      height: px2rem(36);
      line-height: px2rem(36);
      background-color: #ff5353;
      border-radius: px2rem(18);
    }
  }

  // 选项不同的背景图样式
  span.success {
    @include bgImage($url: '../../assets/images/success');
  }
  span.wait {
    @include bgImage($url: '../../assets/images/wait');
  }
  span.invalid {
    @include bgImage($url: '../../assets/images/invalid');
  }
  span.dispose {
    @include bgImage($url: '../../assets/images/dispose');
  }
}
</style>
