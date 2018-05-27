<template>
  <div id="whouse">
    <commonHeader :slotData='{title:"新增门店",rMsg:"确定"}'></commonHeader>

    <div class="search">
      <input type="search" name="" id="" placeholder="点击进行搜索~">
    </div>
    <ul class="list">
      <li v-for="(item) in msg" :key="item.id" @click="xuanze(item)">{{item.name}}
        <span class="fr" v-show="item.flag"></span>
      </li>
    </ul>

  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';

#whouse {
  font-size: px2rem($f28);
  line-height: px2rem(110);
  color: #000;
  .search {
    padding: 0 px2rem($f28);
    background: #fafafa;
    input {
      font-size: px2rem($f28);
      width: 100%;
      height: px2rem(110);
      background: #fafafa url('../../../assets/images/search@3x.png') no-repeat;
      background-position: 0 center;
      padding-left: px2rem(45);
    }
  }
  .list {
    width: 100%;
    li {
      height: px2rem(110);
      border-bottom: 1px solid #ebebeb;
      padding: 0 px2rem($f28);
      font-weight: 600;

      span {
        background: url('../../../assets/images/xuanzhong.png') no-repeat;
        background-position: center;
        margin-top: px2rem(40);
        width: px2rem(40);
        height: px2rem(28);
        // display: none;
      }
    }
  }
}
</style>
<script>
import commonHeader from '@/components/header.vue'

export default {
  name: 'whouse',
  components: { commonHeader },
  data() {
    return {
      msg: [
        { id: 1, name: '新乐阳光超市', flag: false },
        { id: 2, name: '平山阳光超市', flag: false },
        { id: 3, name: '新乐宝阳光超市', flag: false },
        { id: 4, name: '新乐阳光超市', flag: false },
        { id: 5, name: '平山阳光超市', flag: false },
        { id: 6, name: '新乐宝阳光超市', flag: false },
        { id: 7, name: '平山阳光超市', flag: false }
      ]
    }
  },
  methods: {
    xuanze(item) {
      console.log(item.flag)
      item.flag = !item.flag
    }
  }
}
</script>
