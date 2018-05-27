<template>
  <div id="sudoku">
    <div v-for="item in object" :key='item.id'>
      <router-link :to="item.url">
        <div v-bind:class="[item.style]">
          <div class="container">
            <span v-bind:class="[item.icon]"></span>
            <span class="txt" v-text="item.txt"></span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'sudoku',
  data() {
    return {
      object: [
        {
          url: '/',
          style: 'ic',
          icon: 'icon iconfont icon-gonggao',
          txt: '公司公告'
        },
        {
          url: '/visit',
          style: 'ic',
          icon: 'icon iconfont icon-gonggao',
          txt: '进店拜访'
        },
        {
          url: '/',
          style: 'ic roc',
          icon: 'icon iconfont icon-gonggao',
          txt: '电话订单'
        },
        {
          url: '/orderStatus',
          style: 'ic',
          icon: 'icon iconfont icon-gonggao',
          txt: '订单状态'
        },
        {
          url: '/training/imageText',
          style: 'ic',
          icon: 'icon iconfont icon-gonggao',
          txt: '培训资料'
        },
        {
          url: '/message',
          style: 'ic roc',
          icon: 'icon iconfont icon-gonggao',
          txt: '消息中心'
        },
        {
          url: '/late/stores',
          style: 'ic boc',
          icon: 'icon iconfont icon-gonggao',
          txt: '新增门店'
        },
        {
          url: '/',
          style: 'ic boc',
          icon: 'icon iconfont icon-gonggao',
          txt: '数据同步'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../scss/var.scss';
#sudoku {
  width: px2rem(694);
  margin: 0px auto;
  overflow: hidden;
  .router-link-active {
    text-decoration: none;
  }
  .ic {
    width: px2rem(220);
    height: px2rem(270);
    float: left;
    position: relative;
    text-align: center;
    border-right: px2rem($f1) #ccc solid;
    border-bottom: px2rem($f1) #ccc solid;
    .container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .icon {
        font-size: px2rem(62);
        color: #5033f0;
      }
      .txt {
        display: block;
        font-size: px2rem($f24);
        margin-top: px2rem(30);
        color: #000;
      }
    }
  }
  .roc {
    border-right: none;
  }
  .boc {
    border-bottom: none;
  }
}
</style>
