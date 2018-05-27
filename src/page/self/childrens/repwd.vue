<template>
  <div class="reset">
    <label for="old">请输入旧密码：</label>
    <p>
      <input type="password" id='old'>
    </p>
    <label for="new">请输入新密码：</label>
    <p>
      <input type="password" id='new'>
    </p>
    <label for="again">请再次输入新密码：</label>
    <p>
      <input type="password" id='again'>
    </p>
    <p class="btn">
      <input type="reset">
      <input type="button" value="修改">
    </p>
  </div>
</template>
<script>
export default {
  name: 'reset'
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
.reset {
  padding: px2rem(200) px2rem(28);
  label {
    font-size: px2rem(28);
  }
  input[type='password'] {
    width: 100%;
    display: inline-block;
    border: 1px solid $ce8e8e8;
    height: px2rem(80);
    line-height: px2rem(80);
    border-radius: 10px;
    padding-left: px2rem(20);
    font-size: px2rem(30);
  }
  .btn {
    display: flex;
    margin-top: px2rem(100);
    text-align: center;
    input {
      font-size: px2rem(40);
      flex: 1;
      height: px2rem(70);
    }
    input[type='reset'] {
      border-radius: 10px 0 0 10px;
    }
    input[type='button'] {
      border-left: 1px solid $ce8e8e8;
      color: $c10903d;
      border-radius: 0 10px 10px 0;
    }
  }
}
</style>
