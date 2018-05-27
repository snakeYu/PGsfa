<template>
  <div id="sort">
    <ul>
      <li v-for="(item,index) in goodsList" :key='item.key' @click="xq(index)">
        <div class="image">
          <img :src=item.img alt="" srcset="">
        </div>
        <div class="center">
          <div class="name" v-text="item.goodsname">1232</div>
          <div class="cl2">
            <span>编号:</span>
            <span v-text="item.goodsId">12343</span>
            <span class="mar">规格:</span>
            <span v-text="item.spec">12</span>
            <span>盒/箱</span>
          </div>
          <div class="cl3">
            <div class="pri">
              <span>价格:</span>
              <span v-text="item.pirce">12.00</span>
              <span v-if='hid'>
                <span class="mar">库存:</span>
                <span v-text="item.repertory">12.00</span>
                <span>箱</span>
              </span>
            </div>
            <div class="img" v-if='hid'>
              <img src="@/assets/images/刷新@3x.png" alt="刷新">
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'sort',
  data() {
    return {}
  },
  methods: {
    xq(index) {
      this.$router.push({
        path: '/detail',
        name: 'detail'
        // params: this.goodsList[index]
      })
      const params = JSON.stringify(this.goodsList[index])
      localStorage.setItem('params', params)
    }
  },
  computed: {
    ...mapState(['goodsList', 'hid'])
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
#sort {
  height: 60%;
  overflow: auto;
  ul {
    li {
      margin: px2rem(20) 0 px2rem(20) px2rem(28);
      border-bottom: px2rem(1) solid #ccc;
      font-size: px2rem(22);
      display: flex;
      justify-content: space-between;
      .image {
        width: px2rem(125);
        height: px2rem(125);
        border: px2rem(1) solid #ccc;
        margin-right: px2rem(28);
        margin-bottom: px2rem(28);
        img {
          width: px2rem(125);
          height: px2rem(125);
        }
      }
      .center {
        color: #e2e2e2;
        flex-grow: 1;
        .name {
          font-size: px2rem(28);
        }
        .cl2 {
          line-height: px2rem(40);
          margin-bottom: px2rem(10);
          .mar {
            margin-left: px2rem(60);
          }
        }
        .cl3 {
          display: flex;
          .mar {
            margin-left: px2rem(200);
          }
          .img {
            margin-left: px2rem(20);
            img {
              width: px2rem(40);
              height: px2rem(30);
            }
          }
        }
      }
    }
  }
}
</style>
