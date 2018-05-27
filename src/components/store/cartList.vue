<template>
  <div id="cart">
    <div class="cartlist" v-for="list in cartList" :key='list.id'>
      <div class="top">
        <div class="cheacke">
          <div class="out">
            <div class="in" v-if="tab"></div>
          </div>
          <div class="title" v-text="list.addr"></div>
        </div>
        <div class="make" @click="hid(list.addr)">
          <span>备注</span>
          <img src="@/assets/images/Edit@3x.png" alt="">
        </div>
      </div>
      <div class="txt">
        <textarea placeholder="填写备注" v-if="note"></textarea>
      </div>
      <div class="conter">
        <ul>
          <li v-for="(item,index) in list.list" :key='index'>
            <div class="out">
              <div class="in" v-if="tab"></div>
            </div>
            <div class="image">
              <img :src="item.img" alt="">
            </div>
            <div class="center">
              <div class="title" v-text="item.goodsname">123</div>
              <div class="storm">
                <span>选中的仓库:</span>
                <span v-text="item.addr">123213</span>
              </div>
              <div class="pire">
                <div>
                  <span>价格:</span>
                  <span class="clo" v-text="item.pirce">123123</span>
                </div>
                <div class="num">
                  <span @click="item.num++">+</span>
                  <input type="text" v-model="item.num">
                  <span @click="item.num>0?item.num--:0">-</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'cartList',
  data() {
    return {
      note: false
    }
  },
  props: ['tab'],
  computed: {
    ...mapState(['cartList'])
  },
  mounted() {},
  methods: {
    hid(index) {
      this.note = !this.note
      console.log(index)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
#cart {
  height: 100%;
  .cartlist {
    .top {
      display: flex;
      justify-content: space-between;
      background: #fafafa;
      font-size: px2rem(28);
      border-bottom: px2rem(1) solid #ccc;
      .cheacke {
        padding: px2rem(30);
        display: flex;
      }
      .make {
        padding: px2rem(30);
        span {
          vertical-align: middle;
          margin-right: px2rem(10);
          color: #10903d;
        }
        img {
          vertical-align: middle;
        }
      }
    }
    textarea {
      width: 100%;
      height: px2rem(150);
      padding: 0 px2rem($f28);
      padding-top: px2rem(32);
      font-size: px2rem($f28);
      border-top: px2rem(1) solid #eaeaea;
      border-bottom: px2rem(1) solid #eaeaea;
    }
    .conter {
      ul {
        li {
          display: flex;
          justify-content: flex-start;
          border-bottom: px2rem(1) solid #ccc;
          font-size: px2rem(24);
          padding: px2rem(30) px2rem(30) px2rem(30) 0;
          margin-left: px2rem(30);
          .out {
            margin-top: px2rem(30);
          }
          .image {
            margin: 0 px2rem(20);
            img {
              width: px2rem(150);
              height: px2rem(150);
            }
          }
          .center {
            flex-grow: 1;
            .storm {
              margin-top: px2rem(20);
              color: #7e7e7e;
            }
            .pire {
              margin-top: px2rem(20);
              display: flex;
              justify-content: space-between;
              .clo {
                color: #ff0000;
                font-size: px2rem(35);
              }
              .num {
                input {
                  display: inline-block;
                  width: px2rem(60);
                  height: px2rem(40);
                  border: px2rem(1) solid #ccc;
                  font-size: px2rem(30);
                  text-align: center;
                  margin: 0px px2rem(10);
                }
              }
            }
          }
        }
      }
    }
  }
  .out {
    cursor: pointer;
    width: px2rem(16);
    height: px2rem(16);
    border: 1px solid #9a9a9a;
    border-radius: px2rem(16);
    margin: 0 px2rem(10);
    position: relative;
    transform: translate(0, px2rem(8));
    .in {
      position: absolute;
      width: px2rem(10);
      height: px2rem(10);
      background: #00a2eb;
      border-radius: px2rem(10);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
