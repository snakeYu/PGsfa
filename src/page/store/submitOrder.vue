<template>
  <div id="cart">
    <commonHeader :slotData="{title:'提交订单'}">
    </commonHeader>
    <addr></addr>
    <orderList></orderList>
    <div class="footer">
      <div class="total">
        <span>合计：</span>
        <span v-text="total"></span>
      </div>
      <div class="btn">
        <span>确认</span>
      </div>
    </div>
  </div>
</template>
<script>
import commonHeader from '@/components/header.vue'
import orderList from '@/components/store/orderList.vue'
import addr from '@/components/store/addr.vue'
export default {
  name: 'submitOrder',
  components: { commonHeader, orderList, addr },
  data() {
    return {
      total: ''
    }
  },
  methods: {},
  computed: {},
  mounted() {}
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
.footer {
  width: 100%;
  font-size: px2rem(24);
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-top: px2rem(1) solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: px2rem(30);
  line-height: px2rem(70);
  .btn {
    width: px2rem(168);
    height: px2rem(70);
    background: #109d30;
    span {
      color: #fff;
    }
    text-align: center;
  }
}
</style>
