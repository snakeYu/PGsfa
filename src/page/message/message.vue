<template>
  <div class="message">

    <router-view></router-view>
    <div class="bottomMenu">
      <router-link to="/message/conversation">
        <span class="bg con"></span>
        <p>会话记录</p>
      </router-link>
      <router-link to="/message/single">
        <span class="bg sin"></span>
        <p>
          个人信息
        </p>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'message',

  methods: {
    to() {
      console.log(this.$router.push({ path: '' }))
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
.message {
  position: relative;
  height: 100%;
  .bottomMenu {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    display: flex;
    border-top: 1px solid $ce8e8e8;
    a {
      margin: px2rem(20) 0 px2rem(28);
      display: inline-block;
      width: 50%;
      box-sizing: border-box;
      text-align: center;
      // padding: 0 px2rem(140);
      font-size: px2rem($f24);
      color: $c000;
      &:first-child {
        border-right: 1px solid $ce8e8e8;
      }
      .bg {
        display: inline-block;
        width: px2rem(45);
        height: px2rem(45);
        background-repeat: no-repeat;
        background-size: 100%;
      }
      .con {
        background-image: url('../../assets/images/bMsg.png');
      }
      .sin {
        background-image: url('../../assets/images/bSingle.png');
      }
    }
    .router-link-active {
      p {
        color: $c10903d;
      }
      .con {
        background-image: url('../../assets/images/gMsg.png');
      }
      .sin {
        background-image: url('../../assets/images/gSingle.png');
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
    background-image: url('../../assets/images/msgAdd.png');
  }
}
</style>
