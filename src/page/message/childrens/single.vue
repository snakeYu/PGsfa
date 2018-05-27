<template>
  <div class="single">
    <commenHeader :slotData="{title:'消息中心',rCls:'person'}" :to="{path:'/'}"></commenHeader>
    <ul>
      <li class="img">
        <span class="title">头像</span>
        <img class="content" :src="person.imgUrl" alt=""></li>
      <li class="string">
        <span class="title">名称</span>
        <span class="content">{{person.name}}</span>
      </li>
      <li class="string">
        <span class="title">部门</span>
        <span class="content">{{person.department}}</span>
      </li>
      <li class="string">
        <span class="title">手机号</span>
        <span class="content">{{person.phoneNum}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import commenHeader from '@/components/header'
export default {
  name: 'single',
  components: { commenHeader },
  data() {
    return {
      person: {
        imgUrl: require('../../../assets/images/child.png'),
        name: '杨丽芳',
        department: '武汉宝洁',
        phoneNum: 13161823321
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
.single {
  li {
    border-bottom: 1px solid $ce8e8e8;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  span {
    font-size: px2rem($f30);
    color: $c000;
  }
  .img {
    height: px2rem(156);
    img {
      width: px2rem(104);
    }
  }
  .string {
    height: px2rem(114);
  }
  .title {
    margin-left: px2rem($pl28);
  }
  .content {
    margin-right: px2rem($pl28);
  }
  & /deep/ .person {
    background-image: url('../../../assets/images/person.png');
  }
}
</style>
