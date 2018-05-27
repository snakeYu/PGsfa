<template>
  <div id="notice">
    <commonHeader :slotData='titl'></commonHeader>

    <!-- <div class="search">
      <input type="search" name="" id="" placeholder="点击进行搜索~">
    </div> -->
    <ul class="list">
      <router-link tag="li" v-for="(item) in msg" :key="item.id" to="/late/notice/noti">
        <span class="fl biaoji" :class="{'red': item.flag}">● </span>
        <span class="fr ifn" tag="span"></span>
        <h4>{{item.name}}</h4>
        <span class="time">{{item.Date}}</span>
      </router-link>
    </ul>

  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';

#notice {
  font-size: px2rem($f28);
  // line-height: px2rem(110);
  color: #000;
  .search {
    padding: 0 px2rem($f28);
    background: #fafafa;
    input {
      font-size: px2rem($f28);
      width: 100%;
      height: px2rem(110);
      background: #fafafa url('../../assets/images/search@3x.png') no-repeat;
      background-position: 0 center;
      padding-left: px2rem(45);
    }
  }
  .list {
    width: 100%;
    li {
      height: px2rem(124);
      border-bottom: 1px solid $ce8e8e8;
      padding: px2rem(32) px2rem($f28) 0 px2rem(40);
      .biaoji {
        height: 100%;
        margin-right: px2rem(36);
        color: #c6c6c6;
      }
      .red {
        color: $cf00;
      }
      h4 {
        font-size: px2rem($f28);
      }
      .ifn {
        background: url('../../assets/images/Right-s@3x.png') no-repeat;
        background-position: center;
        margin-top: px2rem(15);
        width: px2rem(40);
        height: px2rem(28);
        // display: none;
      }
      .time {
        font-size: px2rem($f22);
        color: $c757575;
      }
    }
  }
}
</style>

<script>
import commonHeader from '@/components/header.vue'

export default {
  name: 'notice',
  components: { commonHeader },
  data() {
    return {
      titl: { title: '公司通告' },
      msg: [
        {
          id: 1,
          name: '销售代团建通知',
          Date: new Date().toLocaleString(),
          flag: false
        },
        {
          id: 2,
          name: '代表团建通知',
          Date: new Date().toLocaleString(),
          flag: false
        },
        {
          id: 3,
          name: '产品团建通知',
          Date: new Date().toLocaleString(),
          flag: true
        },
        {
          id: 4,
          name: '销售关于项目通知',
          Date: new Date().toLocaleString(),
          flag: false
        },
        {
          id: 5,
          name: '销售代表通知',
          Date: new Date().toLocaleString(),
          flag: false
        },
        {
          id: 6,
          name: '代表团建通知',
          Date: new Date().toLocaleString(),
          flag: true
        },
        {
          id: 7,
          name: '平山阳光超市',
          Date: new Date().toLocaleString(),
          flag: false
        }
      ]
    }
  },
  methods: {}
}
</script>
