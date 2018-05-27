<template>
  <ul class="conversation">
    <commonHeader @fun='to' :slotData='{title: "消息中心",rCls:"add"}' :to="{path:'/'}"></commonHeader>
    <li v-for='(item,i) in msgArr' :key='i' class="msg ">
      <div class="left ">
        <img :src="item.imgCls " alt=" " class="pic ">
        <div>
          <h4>{{item.title}}</h4>
          <p>{{item.msg}}</p>
        </div>
      </div>
      <div class="right ">{{item.time}}</div>
    </li>
  </ul>
</template>
<script>
import commonHeader from '@/components/header'
export default {
  name: 'conversation',
  components: { commonHeader },
  methods: {
    to() {
      this.$router.push({ path: '/select' })
    }
  },
  data() {
    return {
      msgArr: [
        {
          imgCls: require('../../../assets/images/flower.png'),
          title: '宝洁SFA项目UI',
          time: '下午 2:19',
          msg: '宁静物语：我们这边还没有受到...'
        },
        {
          imgCls: require('../../../assets/images/bird.png'),
          title: '七月流濂',
          time: '下午 2:19',
          msg: '项目产品吗还是那开始啦'
        },
        {
          imgCls: require('../../../assets/images/child.png'),
          title: '喵喵咪',
          time: '下午 2:19',
          msg: '项目产品吗还是那开始啦'
        },
        {
          imgCls: require('../../../assets/images/toy.png'),
          title: '宝洁SFA项目UI',
          time: '下午 2:19',
          msg: '宁静物语：我们这边还没有受到...'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
.conversation {
  margin-bottom: px2rem(120);
  .msg {
    padding: px2rem(30) px2rem($pl28);
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid $ce8e8e8;

    .left {
      width: px2rem(550);
      display: flex;
      .pic {
        width: px2rem(104);
        height: px2rem(104);
        margin-right: px2rem(24);
        vertical-align: top;
      }
      h4 {
        font-size: px2rem($f30);
        margin-top: px2rem(12);
        color: $c000;
        margin-bottom: px2rem(15);
      }
      p {
        font-size: px2rem($f24);
        color: $c757575;
      }
    }
    .right {
      margin-top: px2rem(12);
      font-size: px2rem(24);
      color: $c757575;
    }
  }
  //header头部的右边加号按钮的样式
  & /deep/ .add {
    display: inline-block;
    // width: px2rem(47);
    // height: px2rem(48);
    // background-repeat: no-repeat;
    // background-size: 100%;
    background-image: url('../../../assets/images/msgAdd.png');
  }
}
</style>
