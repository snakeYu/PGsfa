<template>
  <div id="info">
    <commonHeader :slotData='titl' @fun='btn'></commonHeader>

    <div class="tijiao">
      <a href="#" @click.prevent="complate('over')" :class="{'red': type === 'over'}">已提交数据</a>
      <!-- <router-link to="/late/info/inf">已提交数据</router-link> -->
      <span>|</span>
      <a href="#" @click.prevent="undecom('out')" :class="{'red': type === 'out'}">未提交数据</a>
      <!-- <router-link to="/late/info/und">未提交数据</router-link> -->
    </div>
    <component :is="comname"></component>

    <!-- <router-view></router-view> -->
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';

.tijiao {
  display: flex;
  justify-content: space-between;
  padding: 0 px2rem(120);
  height: px2rem(85);
  background: #fafafa;
  line-height: px2rem(85);
  font-size: px2rem($f28);
  border-bottom: 1px solid #ededed;
  span {
    font-size: px2rem(60);
    color: #ededed;
  }
  .red {
    color: #10903d;
  }
}
</style>

<script>
import commonHeader from '@/components/header.vue'
import complate from '@/page/late/infos/complate'
import unde from '@/page/late/infos/unde'

export default {
  name: 'info',
  components: { commonHeader, complate, unde },
  data() {
    return {
      comname: 'complate',
      type: 'over',
      titl: {
        title: '数据同步',
        rMsg: null
      }
    }
  },
  methods: {
    complate(type) {
      this.comname = 'complate'
      this.type = type
      this.titl.rMsg = null
    },
    undecom(type) {
      this.comname = 'unde'
      this.type = type
      this.titl.rMsg = '全部提交'
    },
    btn() {
      confirm('确认全部提交？') ? console.log('okok') : console.log('nono')
    }
  }
}
</script>
