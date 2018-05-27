<template>
  <div id="stores">
    <commonHeader :slotData='{title:"新增门店",rMsg:"确定"}'>
      <!-- <h4 class="title" slot='title'>新增门店</h4>
      <span>
        <a href="#" class="anniu">确定</a>
      </span> -->
    </commonHeader>
    <mapA></mapA>
    <address class="clearfix">
      <span class="fl">地址：</span>
      <a href="#" class="shuaxin fr"></a>

      <p class="">头像北京北京市海淀区西三旗黑泉路8号 三旗黑泉路8号保盛广场c座南保领地啥养公司</p>

    </address>
    <table class="form">
      <tr>
        <td>
          <span>*</span>商店名称</td>
        <td><input type="text" placeholder="请填写商店名称"></td>
      </tr>
      <tr>
        <td>
          <span>*</span>商店面积</td>
        <td><input type="text" placeholder="请填写商店名称"></td>
      </tr>
      <tr>
        <td>
          <span>*</span>所属渠道</td>
        <td><input type="text" placeholder="请填写商店名称" v-model="qudao">
          <a href="#" @click.prevent="openMd">

            .
          </a>
        </td>
      </tr>
      <tr>
        <td>
          <span>*</span>商店类型</td>
        <td><input type="text" placeholder="请填写商店名称">
          <router-link to="/late/whouse">
            .
          </router-link>
        </td>
      </tr>
      <tr>
        <td>
          <span>*</span>商店地址</td>
        <td><input type="text" placeholder="请填写商店名称"></td>
      </tr>
      <tr>
        <td>
          <span>*</span>商店负责人</td>
        <td><input type="text" placeholder="请填写商店名称"></td>
      </tr>
      <tr>
        <td>
          <span>*</span>商店电话</td>
        <td><input type="text" placeholder="请填写商店名称"></td>
      </tr>
      <tr>
        <td>
          <span>*</span>拍摄门头照</td>
        <td></td>
      </tr>
    </table>
    <div class="xiangce">
      <div>
        <a href='#'><img src='../../assets/images/paishe.png' /></a>
      </div>
      <div>
        <a href='#'><img src='../../assets/images/mendian.png' /></a>
      </div>
      <div>
        <a href='#'><img src='../../assets/images/shanchu.png' /></a>
      </div>
      <div>
        <a href='#'><img src='../../assets/images/shanchu.png' /></a>
      </div>
      <div>
        <a href='#'><img src='../../assets/images/shanchu.png' /></a>
      </div>
      <div>
        <a href='#'><img src='' /></a>
      </div>
    </div>
    <modal :inf='flag' @fun='show'></modal>
  </div>
</template>
<script>
import commonHeader from '@/components/header.vue'
import mapA from '@/page/late/stores/map.vue'
import modal from '@/page/late/stores/modall.vue'

export default {
  name: 'stores',

  components: { commonHeader, mapA, modal },
  data() {
    return {
      flag: false,
      qudao: ''
    }
  },
  methods: {
    openMd() {
      this.flag = !this.flag
      console.log(this.flag)
    },
    show(...val) {
      console.log(val)
      if (val.length >= 2) {
        this.qudao = val[0]
        this.flag = val[1]
      } else {
        this.flag = val[0]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
@mixin px1(
  $bd-color: #fafafa,
  $bd-top: 1,
  $bd-right: 1,
  $bd-bottom: 1,
  $bd-left: 1
) {
  content: ' ';
  position: absolute;
  left: 0;
  top: 0;
  width: 200%;
  height: 200%;
  border: 1px solid $bd-color;
  box-sizing: border-box;
  transform: scale(0.5, 0.5);
  transform-origin: left top;
  @if $bd-top != 1 {
    border-top: none;
  }
  @if $bd-right != 1 {
    border-right: none;
  }
  @if $bd-bottom != 1 {
    border-bottom: none;
  }
  @if $bd-left != 1 {
    border-left: none;
  }
}
#stores {
  .title {
    font-size: px2rem($f36);
  }
  .anniu {
    font-size: px2rem(30);
    color: #fff;
  }
  address {
    width: 100%;
    height: px2rem(120);
    background: #fafafa;
    font-size: px2rem(24);
    color: #000000;
    padding: px2rem(30) px2rem(20);
    box-sizing: border-box;
    span {
      width: px2rem(80);
    }
    p {
      font-size: px2rem(24);
      overflow: hidden;
    }
    .shuaxin {
      display: block;
      width: px2rem(60);
      height: px2rem(50);
      background: url('../../assets/images/shuaxin.png') no-repeat;
      background-size: contain;
      background-position: center;
      margin: 0 0 0 px2rem(20);
    }
  }
  .form {
    border-collapse: collapse;
    color: #000000;
    font-size: px2rem($f24);
    width: 100%;
    tr {
      position: relative;
      border-bottom: #ebebeb 1px solid;
      height: px2rem(99);
      line-height: px2rem(99);
      &:last-child {
        border-bottom: none;
      }
    }
    tr td:first-child {
      width: px2rem(180);
    }
    td {
      padding-left: px2rem(30);
      span {
        color: #ff0000;
      }
      input {
        height: px2rem(98);
        font-size: px2rem($f24);
        width: 85%;
      }
      a {
        display: inline-block;
        width: 8%;
        margin-right: 5%;
        color: #fff;
        background: url('../../assets/images/Right-s@2x.png') no-repeat;
        background-size: 50%;
        background-position: center;
      }
    }
  }
  .xiangce {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 px2rem(25);
    a {
      display: block;
      width: px2rem(218);
      height: px2rem(218);
      margin-bottom: px2rem(20);
      position: relative;
      img {
        width: 100%;
      }
      &::before {
        @include px1(#dddddd, 1, 1, 1, 1);
      }
    }
  }
}
</style>
