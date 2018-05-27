<template>
  <div id="activity">
    <commonHeader @fun='fun' :slotData="{title:'店内活动',rMsg:'结束拜访'}">
    </commonHeader>
    <div class="center">
      <div class="title" v-text="sell.title"></div>
      <div class="sales">
        <div class="flex">
          <div class="left">
            <img src="@/assets/images/销量@3x.png" alt="销量">
            <span>本月至今销量</span>
          </div>
          <div class="right" v-text="sell.sell.mtd">123123</div>
        </div>
        <div class="flex">
          <div class="left">
            <img src="@/assets/images/销量数据@3x.png" alt="销量数据">
            <span>过往半年月均销量</span>
          </div>
          <div class="right" v-text="sell.sell.mean">123123</div>
        </div>
        <div class="flex per">
          <div class="left">
            <img src="@/assets/images/选中@3x.png" alt="选中">
            <span>核心分销完成率</span>
          </div>
          <div class="right" v-text="sell.sell.percent">123123</div>
        </div>
        <div class="passage">
          <div id="inr"></div>
        </div>
        <div class="notes">
          <div class="tit">历史拜访备注：</div>
          <textarea name="" id="" cols="30" rows="10" placeholder="点击填写拜访备注~"></textarea>
        </div>
      </div>
      <div class="btn">
        <router-link to='/order' tog='span'>
          <div class="orders com">下单</div>
        </router-link>
        <router-link :to="'/sign?id=' + $route.query.id" tog='span'>
          <div class="sign com">商店签到</div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import commonHeader from '@/components/header.vue'
export default {
  name: 'activity',
  components: { commonHeader },
  data() {
    return {
      sell: ''
    }
  },
  methods: {
    async sellDate(url) {
      const { data } = await this.$http.get(url)
      if (data.code === 0) {
        this.sell = data.data[0]
        localStorage.setItem('storeName', data.data[0].title)
      }
    },
    fun() {
      this.$router.back()
    }
  },
  beforeMount() {},
  mounted() {
    this.sellDate('api/storeDate?ID=' + this.$route.query.id)
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
#activity {
  height: 100%;
  overflow: hidden;
  .center {
    .title {
      height: px2rem(84);
      line-height: px2rem(84);
      background: #fafafa;
      border: px2rem(1) solid #eaeaea;
      font-size: px2rem(28);
      padding-left: px2rem($f28);
    }
    .sales {
      .flex {
        display: flex;
        justify-content: space-between;
        margin: 0 px2rem($f28);
        height: px2rem(110);
        line-height: px2rem(110);
        font-size: px2rem($f28);
        border-bottom: px2rem(1) solid #eaeaea;
        img {
          width: px2rem(30);
          margin-right: px2rem(20);
        }
      }
      .per {
        height: px2rem(96);
        border: none;
      }
      .passage {
        height: px2rem(12);
        border: px2rem(1) solid #eaeaea;
        border-radius: px2rem(12);
        margin: 0 px2rem($f28);
        background: #e4e4e4;
        #inr {
          height: 100%;
          width: 30%;
          background: linear-gradient(#1c59fb, #22be66);
        }
      }
      .notes {
        margin-top: px2rem(32);
        border-top: px2rem(1) solid #eaeaea;

        font-size: px2rem($f28);
        background: #fafafa;
        .tit {
          padding: 0 px2rem($f28);
          height: px2rem(66);
          line-height: px2rem(66);
        }
        textarea {
          width: 100%;
          height: px2rem(200);
          padding: 0 px2rem($f28);
          padding-top: px2rem(32);
          font-size: px2rem($f28);
          border-top: px2rem(1) solid #eaeaea;
          border-bottom: px2rem(1) solid #eaeaea;
        }
      }
    }
    .btn {
      clear: both;
      .com {
        width: px2rem(480);
        height: px2rem(84);
        border: px2rem(1) solid #10903d;
        color: #10903d;
        font-size: px2rem(36);
        margin: px2rem(50) auto;
        text-align: center;
        line-height: px2rem(84);
      }
      .sign {
        background: #10903d;
        color: #fff;
      }
    }
  }
}
</style>
