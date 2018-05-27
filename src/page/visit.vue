<template>
  <div id="visit">
    <commonHeader :slotData="{title:'进店拜访'}">
    </commonHeader>
    <div class="tab">
      <div class="plan">
        <div v-bind:class="{ sel: !isActive }" class="container" @click="addtag(0)">计划内</div>
      </div>
      <div class="plan">
        <div class="container" v-bind:class="{ sel: isActive }" @click="addtag(1)">计划外</div>
      </div>
    </div>
    <div class="select">
      <img src="@/assets/images/search@3x.png" @click="sel">
      <input type="text" placeholder="点击进行搜索" class="sell" id='sel'>
    </div>
    <div class="list">
      <div class="store" v-for="item in storeDate" :key='item.id'>
        <router-link :to="'/activity?id='+item.ID" tag='span'>
          <div class="container">
            <div class="left">
              <div class="p1 flex">
                <div class="title" v-text="item.title">12</div>
                <div class="addr">
                  <img src="@/assets/images/map@3x.png" alt="定位">
                  <span>&lt;</span>
                  <span v-text="item.addr+'m'">500m</span>
                </div>
              </div>
              <div class="p2">
                <span class="ID" v-text="'ID: '+item.ID">ID：12</span>
                <span class="date" v-text="'创建时间: '+item.date">12</span>
              </div>
              <div class="p3 flex">
                <div class="name">123</div>
                <div class="phone">
                  <img src="@/assets/images/phone@3x.png" alt="电话">
                  <span v-text="item.phone">1213</span>
                </div>
              </div>
            </div>
            <div class="right">
              <img src="@/assets/images/right@3x.png" alt="" srcset="">
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import commonHeader from '@/components/header.vue'
export default {
  name: 'visit',
  data() {
    return {
      isActive: false,
      storeDate: '',
      plan: 0
    }
  },
  components: { commonHeader },
  methods: {
    addtag() {
      this.isActive = !this.isActive
      this.plan = this.plan === 0 ? 1 : 0
      this.getStoreDate('api/storeDate?plan=' + this.plan)
      this.getStoreDate('api/storeDate?plan=' + this.plan)
    },
    sel() {
      const selValue = document.getElementById('sel').value
      this.getStoreDate('api/storeDate?q=' + selValue)
    },
    async getStoreDate(url) {
      const { data } = await this.$http.get(url)
      if (data.code === 0) {
        this.storeDate = data.data
      }
    }
  },
  computed: {},
  mounted() {
    this.getStoreDate('api/storeDate?plan=0')
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/var.scss';
#visit {
  height: 100%;
  .tab {
    width: 100%;
    overflow: hidden;
    .plan {
      width: 50%;
      overflow: hidden;
      float: left;
      border-bottom: px2rem($f1) solid #ccc;
      height: px2rem(100);
      .container {
        height: px2rem(97);
        line-height: px2rem(97);
        border-right: px2rem($f1) solid #ccc;
        font-size: px2rem($f28);
        text-align: center;
      }
      .sel {
        border-bottom: px2rem(6) solid #10903d;
        background: #fafafa;
      }
    }
  }
  .select {
    padding-left: px2rem(25);
    background: #fafafa;
    padding: px2rem(10) px2rem(30);
    img {
      width: px2rem(30);
      height: px2rem(30);
      margin-bottom: px2rem(-5);
      margin-right: px2rem(5);
    }
    .sell {
      height: px2rem(80);
      outline: none;
      border: 0;
      font-size: px2rem(28);
      background: #fafafa;
    }
  }
  .list {
    height: 70%;
    overflow: auto;
    .store {
      .container {
        margin: px2rem(30) px2rem($f28);
        padding-bottom: px2rem(20);
        border-bottom: px2rem(1) solid #f1f1f1;
        display: flex;
        justify-content: space-between;
        .left {
          flex-grow: 1;
          .flex {
            display: flex;
            justify-content: space-between;
            line-height: px2rem(50);
          }
          img {
            width: px2rem(30);
            margin-bottom: px2rem(-8);
          }
          .p1 {
            font-size: px2rem($f28);
          }
          .p2 {
            font-size: px2rem(22);
            color: #868686;
            line-height: px2rem(60);
            span {
              margin-right: px2rem(50);
            }
          }
          .p3 {
            font-size: px2rem(24);
            color: #868686;
            .phone {
              color: #5bb37a;
            }
          }
        }
        .right {
          width: px2rem(50);
          text-align: center;
          line-height: px2rem(150);
          img {
            width: px2rem(15);
            margin-left: px2rem(30);
          }
        }
      }
    }
  }
}
</style>
