<template>
  <div class="orderSearch">
    <commonHeader :to="{path:'/orderStatus'}" :slotData="{title:'成功订单'}">
    </commonHeader>
    <div class="date">
      <span class="startTime">2016年10月12日
        <i class="down"></i>
      </span>
      <span class="rightAllow"></span>
      <span class="endTime">
        2016年10月22日
        <i class="down"></i>
      </span>
    </div>
    <search :keyWord='"门店名称检索~"'></search>
    <ul class="marketList">
      <router-link tag="li" v-for='item in market' :key='item.id' :to="'/orderInfo/'+item.Mid">
        <div class="left">
          <h4>{{item.name}}</h4>
          <div class="time">下单时间：{{item.bookingTime}}</div>
          <div class="address">{{item.address}}</div>

        </div>
        <div class="rightTo"></div>
      </router-link>
    </ul>
    <div class="footBtn" @click='search'>
      点击查询
    </div>
  </div>
</template>
<script>
import commonHeader from '@/components/header'
import search from '@/components/search'
export default {
  name: 'success',
  components: { commonHeader, search },
  data() {
    return {
      keyWorld: '',
      market: [
        {
          Mid: 1001,
          name: '文悦超市',
          address: '乌鲁木齐大西桥超市',
          bookingTime: '2016年11月21日'
        },
        {
          Mid: 1002,
          name: '文悦超市',
          address: '乌鲁木齐大西桥超市',
          bookingTime: '2016年11月21日'
        }
      ]
    }
  },
  methods: {
    search() {
      console.log(this.keyWorld)
    }
  }
}
</script>
<style scoped lang='scss'>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
.orderSearch {
  height: 100%;
  position: relative;
  // 时间选择
  .date {
    display: flex;
    align-items: center;
    height: px2rem(110);
    font-size: px2rem(28);
    color: $c000;
    .startTime,
    .endTime {
      margin-left: px2rem(58);
      .down {
        display: inline-block;
        width: px2rem(16);
        height: px2rem(8);
        margin: 0 px2rem(20) 0 px2rem(20);
        background-repeat: no-repeat;
        background-size: contain;
        @include bgImage($url: '../../../assets/images/down');
      }
    }
    .rightAllow {
      display: inline-block;
      width: px2rem(35);
      height: px2rem(27);
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url('../../../assets/images/DirectionRight.png');
    }
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: px2rem(144);
    margin-left: px2rem(28);
    border-bottom: px2rem(1) solid $ce8e8e8;
    h4 {
      font-size: px2rem($f28);
      color: $c000;
      margin-top: px2rem(28);
    }
    .time,
    .address {
      color: $c757575;
      font-size: px2rem($f22);
    }
    .rightTo {
      width: px2rem(26);
      height: px2rem(26);
      background-repeat: no-repeat;
      background-size: contain;
      @include bgImage($url: '../../../assets/images/right');
    }
  }
  .footBtn {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: px2rem(110);
    line-height: px2rem(110);
    text-align: center;
    background-color: $c70cb8a;
    color: $cfff;
    font-size: px2rem($f36);
  }
}
</style>
