<template>
  <div id="search">
    <div class="container">
      <div class="selL">
        <div class="image">
          <img src="@/assets/images/search@3x.png" alt="搜索" @click="sel">
        </div>
        <input type="text" placeholder="点击进行搜索" v-model="selDate">
      </div>
      <div class="selR">
        <img src="@/assets/images/扫一扫@3x.png" alt="扫一扫">
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  name: 'search',
  data() {
    return {
      selDate: ''
    }
  },
  methods: {
    ...mapMutations(['getAll']),
    async getGoodsList(selValue) {
      const { data } = await this.$http.get('api/goodsList?q=' + selValue)
      if (data.code === 0) {
        this.getAll(data.data)
      }
    },
    sel() {
      this.getGoodsList(this.selDate)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
#search {
  background: #fafafa;
  border-bottom: px2rem(1) solid #dddddd;
  .container {
    display: flex;
    justify-content: space-between;
    .selL {
      padding: px2rem(28);
      flex-grow: 1;
      display: flex;
      justify-content: space-between;
      .image {
        img {
          width: px2rem(30);
          margin-right: px2rem(20);
          margin-bottom: px2rem(-5);
        }
      }
      input {
        flex-grow: 1;
        border-right: px2rem(1) solid #ccc;
        background: #fafafa;
        outline: none;
        font-size: px2rem(28);
      }
    }
    .selR {
      padding: px2rem(28);
      img {
        width: px2rem(57);
      }
    }
  }
}
</style>
