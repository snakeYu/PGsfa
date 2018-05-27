<template>
  <div id="noti">
    <commonHeader :slotData='{title:"公告信息"}'></commonHeader>
    <div class="info-box">
      <h5>销售代表全体成员：</h5>

      <p>又是一年团建日，请大家来参加。为庆祝销售的超额完成，特为大家庆功，组织大家郊游，大家可以放开心，玩的尽兴！又是一年团建日，请大家来参加。为庆祝销售的超额完成，特为大家庆功，组织大家郊游，大家可以放开心，玩的尽兴！</p>

      <div>时间：2016.5.12-2016.5.14</div>
      <address>地址：北京双龙峡冰瀑</address>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
.info-box {
  width: 100%;
  height: 100%;
  padding: px2rem($f28);
  h5 {
    font-size: px2rem($f28);
  }
  p,
  div,
  address {
    font-size: px2rem($f24);
  }
  p {
    margin: px2rem($f36) 0;
  }
}
</style>
<script>
import commonHeader from '@/components/header.vue'
export default {
  name: 'noti',
  components: { commonHeader }
}
</script>
