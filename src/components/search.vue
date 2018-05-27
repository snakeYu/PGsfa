<template>
  <div class="searchWrap">
    <label for="searchInput"></label>
    <input type="text" :placeholder="keyWord">
  </div>
</template>
<script>
export default {
  name: 'search',
  props: ['keyWord']
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
.searchWrap {
  padding-left: px2rem(28);
  height: px2rem(105);
  display: flex;
  align-items: center;
  background-color: $cf5f5f5;
  border: px2rem(1) solid $ce8e8e8;
  label {
    display: inline-block;
    width: px2rem(34);
    height: px2rem(34);
    background-repeat: no-repeat;
    background-size: contain;
    @include bgImage($url: '../assets/images/search');
  }
  input {
    display: inline-block;
    height: px2rem(100);
    width: 100%;
    background-color: $cf5f5f5;
    padding-left: 10px;
    font-size: px2rem($f24);
    color: $c000;
  }
  ::-webkit-input-placeholder,
  :-moz-placeholder,
  ::-moz-placeholder,
  :-ms-input-placeholder {
    color: $c000;
  }
}
</style>
