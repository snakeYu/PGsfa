<template>
  <div id="addr">
    <div class="top">
      <div class="name">
        <span>收货人:</span>
        <span>qinghua</span>
      </div>
      <div class="phone">123</div>
    </div>
    <div class="addr">
      <img src="@/assets/images/map@3x.png" alt="">
      <span>头像北京北京市海淀区西三旗黑泉路8号 三旗黑泉路8号保 盛广场c座南保领地啥养公司
      </span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'addr'
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
#addr {
  font-size: px2rem(28);
  background: #fafafa;
  padding-bottom: px2rem(10);
  overflow: hidden;
  .top {
    display: flex;
    justify-content: space-between;
    margin: px2rem(20) px2rem(30);
  }
  .addr {
    padding: 0 px2rem(30);
    img {
      width: px2rem(20);
      float: left;
      margin: px2rem(5) px2rem(10);
    }
    span {
      float: left;
      color: #9f9f9f;
      width: px2rem(650);
    }
  }
}
</style>
