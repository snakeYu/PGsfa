<template>
  <div class="topNav">

    <span @click='$router.push(to)' class="icon iconfont icon-houtui"></span>
    <span class='title'>{{(slotData&&slotData.title)?slotData.title:' '}}</span>
    <span @click='self' :class="['wd',(slotData&&slotData.rCls)?slotData.rCls:'']">{{(slotData&&slotData.rMsg)?slotData.rMsg:''}}</span>

  </div>
</template>

<script>
export default {
  name: 'commonHeader',
  props: ['slotData', 'to'],
  methods: {
    self() {
      this.$emit('fun')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/var.scss';
.topNav {
  height: px2rem($headerHeight);
  background: linear-gradient($c24be5a, $c29db67);
  margin: 0 auto;
  font-size: px2rem($f36);
  padding: 0px px2rem($f28);
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon {
    color: $cfff;
    font-size: px2rem($f28);
  }
  .title {
    color: $cfff;
  }
  .wd {
    font-size: px2rem($f30);
    color: $cfff;
    text-align: right;
  }
  .bg {
    width: px2rem(47);
    height: px2rem(48);
    background-repeat: no-repeat;
    background-size: 100%;
  }
}
</style>
