<template>
  <div class="ctn">
    <div class="img">
      <img src="../../../assets/images/headImg.png" alt="">
    </div>
    <ul>
      <li>
        <span class="key">员工姓名：</span>
        <span class="value">凌一零</span>
      </li>
      <li>
        <span class="key">手机号码：</span>
        <span class="value">15892013312</span>
      </li>
      <li>
        <span class="key">部门：</span>
        <span class="value">市场开拓</span>
      </li>
    </ul>
    <p class="loginTime">
      上次登录时间 ： 2016-09-23 19:53
    </p>
  </div>
</template>
<script>
export default {
  name: 'info'
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
.ctn {
  .img {
    text-align: center;
    img {
      margin: px2rem(56) 0;
      height: px2rem(220);
      width: px2rem(220);
    }
    border-bottom: 1px solid $ce8e8e8;
  }
  ul {
    li {
      margin-left: px2rem(28);
      display: flex;
      justify-content: space-between;
      height: px2rem(110);
      line-height: px2rem(110);
      border-bottom: 1px solid $ce8e8e8;
    }
    li:last-child {
      border: none;
    }
    .key,
    .value {
      font-size: px2rem(28);
      color: $c757575;
    }
    .value {
      color: $c000;
      margin-right: px2rem(28);
    }
  }
  .loginTime {
    background-color: $cfafafa;
    height: px2rem(84);
    line-height: px2rem(84);
    font-size: px2rem($f24);
    color: $c000;
    padding-left: px2rem(28);
    border: 1px solid $ce8e8e8;
    border-left: none;
    border-right: none;
  }
}
</style>
