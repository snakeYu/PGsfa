<template>
  <div class="select">
    <commonHeader @fun='to' :to="{path:'/message'}" :slotData="{title:'选择联系人',rMsg:'确定'}" :fun='to'></commonHeader>
    <div class="menu">
      <router-link to='/select/one' class="sPerson">人员选择</router-link>
      <router-link to='/select/group' class="sGroup">部门选择</router-link>
    </div>
    <search :keyWord='"点击进行检索~"'></search>
    <router-view></router-view>
  </div>
</template>
<script>
import commonHeader from '@/components/header'
import search from '@/components/search'
export default {
  name: 'selectTalker',
  components: {
    commonHeader,
    search
  },
  methods: {
    to() {
      this.$router.push({ path: '/groupTalk' })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
.select {
  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .sPerson,
    .sGroup {
      width: 50%;
      height: px2rem(108);
      line-height: px2rem(108);
      background-color: $cfff;
      font-size: px2rem($f24);
      border-bottom: 1px solid $ce8e8e8;
      text-align: center;
    }
    .sPerson {
      border-right: 1px solid $ce8e8e8;
    }
    .router-link-active {
      border-bottom: px2rem(6) solid $c10903d;
      background-color: $cfafafa;
    }
  }
}
</style>
