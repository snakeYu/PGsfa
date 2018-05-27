<template>
  <div id="cart">
    <div class="cartlist">
      <div class="conter">
        <ul>
          <li>
            <div class="image">
              <img src="@/assets/images/mendian.png" alt="">
            </div>
            <div class="center">
              <div class="title">12323</div>
              <div class="storm">
                <span>选中的仓库:</span>
                <span>123213</span>
              </div>
              <div class="pire">
                <div>
                  <span>价格:</span>
                  <span class="clo">123123</span>
                </div>
                <div class="num">
                  <span>数量</span>
                  <span>12</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div class="note">
          <span>备注:</span>
          <span>qwehdhsjkfhlsdf</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'orderList',
  data() {
    return {
      cartList: '',
      num: ''
    }
  },
  mounted() {
    const cartList = JSON.parse(localStorage.getItem('cart'))
    this.cartList = cartList
    this.num = cartList.num
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
.cartlist {
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
          }
        }
      }
    }
  }
  .note {
    font-size: px2rem(22);
    padding: px2rem(30);
    border-bottom: px2rem(1) solid #ccc;
  }
}
</style>
