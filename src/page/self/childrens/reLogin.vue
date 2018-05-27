<template>
  <div class="reLogin">
    <label for="userName">用户名：</label>
    <p>
      <input type="text" id='userName'>
    </p>
    <label for="pwd">密码：</label>
    <p>
      <input type="passwod" id='pwd'>
    </p>

    <div class="btn">
      <input type="reset">
      <input type="button" value="修改">
    </div>
  </div>
</template>
<script>
export default {
  name: 'reLogin'
}
</script>
<style lang='scss' scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
.reLogin {
  padding: px2rem(200) px2rem(28);
  label {
    font-size: px2rem(30);
  }
  p {
    margin: px2rem(30) 0;
    input {
      font-size: px2rem(30);
      height: px2rem(80);
      line-height: px2rem(80);
      border: 1px solid $ce8e8e8;
      border-radius: 10px;
      width: 100%;
    }
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
