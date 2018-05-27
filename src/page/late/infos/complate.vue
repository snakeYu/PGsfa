<template>
  <div id="complate">
    <ul>
      <router-link v-for="item in msg" :key="item.id" to="/late/info/note" tag="li">
        <h4>{{item.name}}</h4>
        <p>{{item.inf}}</p>
        <div>
          <span class="fl">{{item.code}}</span>
          <span class="fr">{{item.Date}}</span>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';

#complate {
  li {
    border-bottom: 1px solid #ededed;
    height: px2rem(160);
    padding: px2rem(28);
    h4 {
      font-size: px2rem($f28);
      color: #000;
    }
    p {
      font-size: px2rem($f24);
      color: #000;
      margin: px2rem(10) 0;
    }
    div {
      span {
        font-size: px2rem($f22);
        color: #757575;
      }
    }
  }
}
</style>

<script>
// import commonHeader from '@/components/header'
export default {
  name: 'complate',
  // components: { commonHeader },
  data() {
    return {
      msg: [
        {
          id: 1,
          name: '结束拜访',
          inf: '聊什么，配料局有哪些功能哪些功能',
          code: '门点编号021000',
          Date: new Date().toLocaleString()
        },
        {
          id: 2,
          name: '结束拜访',
          inf: '聊什么，配料局有哪些功能哪些功能',
          code: '门点编号021000',
          Date: new Date().toLocaleString()
        },
        {
          id: 3,
          name: '结束拜访',
          inf: '聊什么，配料局有哪些功能哪些功能',
          code: '门点编号021000',
          Date: new Date().toLocaleString()
        },
        {
          id: 4,
          name: '结束拜访',
          inf: '聊什么，配料局有哪些功能哪些功能',
          code: '门点编号021000',
          Date: new Date().toLocaleString()
        }
      ]
    }
  }
}
</script>
