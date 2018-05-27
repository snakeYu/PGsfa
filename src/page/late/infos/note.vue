<template>
  <div id="note">
    <commonHeader :slotData='{title:"备注"}'></commonHeader>
    <textarea maxlength="20" placeholder="请填写备注信息~" class="text" @input="dec" v-model="decs">
    </textarea>
    <span class="fr biaoji">字数({{zishu}}/20)</span>
    <input type="button" value="确定" class="not-btn" @click="sbm">
  </div>
</template>
<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
#note {
  height: 100%;
  .text {
    width: 100%;
    font-size: px2rem($f28);
    padding: px2rem(28);
    background: #fafafa;
    height: px2rem(344);
  }
  .biaoji {
    font-size: px2rem(22);
    margin-right: px2rem(28);
    color: #000;
  }
  .not-btn {
    width: 100%;
    height: px2rem(110);
    background: #ffffff;
    border-top: 1px solid #8e8e8e;
    font-size: px2rem($f36);
    color: #10903d;
    position: fixed;
    bottom: 0;
  }
}
</style>
<script>
import commonHeader from '@/components/header.vue'
export default {
  name: 'note',
  components: { commonHeader },
  data() {
    return {
      zishu: 20,
      decs: ''
    }
  },
  methods: {
    dec() {
      this.zishu = 20 - this.decs.length
    },
    sbm() {
      console.log(this.decs)
    }
  }
}
</script>
