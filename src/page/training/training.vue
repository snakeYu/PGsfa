<template>
  <div class="training">
    <commonHeader :to="{path:'/home'}" :slotData="{title:' 培训资料 '}"></commonHeader>
    <div class="to">
      <router-link to="/training/imageText">图文</router-link>
      <router-link to="/training/video">视频</router-link>
      <router-link to="/training/questionAnswer">问答</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import commonHeader from '@/components/header'
export default {
  name: 'training',
  components: {
    commonHeader
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
.training {
  height: 100%;
  .to {
    display: flex;
    height: px2rem(84);
    justify-content: center;
    align-items: center;
    line-height: px2rem(84);
    box-sizing: border-box;
    background-color: $cfafafa;
    border-bottom: px2rem(1) solid $ce8e8e8;
    a {
      display: inline-block;
      line-height: px2rem(60);
      padding: 0 px2rem(96);
      font-size: px2rem($f28);
      margin: px2rem(14) 0;
      color: $c000;
    }
    .router-link-active {
      color: $c10903d;
    }
    a:nth-child(2) {
      border: px2rem(1) solid $ce8e8e8;
      border-top: none;
      border-bottom: none;
    }
  }
}
</style>
