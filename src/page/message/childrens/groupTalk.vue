<template>
  <div class="groupTalk">
    <commonHeader :slotData="{title:'群聊(32)',rCls:'bg person'}" :to="{path:'/select'}"></commonHeader>
    <div class="ctn">
      <p class="time">下午 2:19</p>
      <div class="peopleList">
        谢南、杨丽丽、张丽宁、七月榴莲、研暖的等待、张丽宁、七月榴莲谢南、杨丽丽、张丽宁、七月榴莲、研暖的等待、张丽宁、七月榴莲 谢南、杨丽丽、张丽宁、七月榴莲、研暖的等待、张丽宁、七月榴莲
      </div>
      <div v-for='(obj,i) in data' :class="obj.id" :key='i'>
        <img :src="obj.imgUrl" v-if="obj.id==='other'" alt="">
        <div class="msg">
          {{obj.msg}}
          <i class="sanjiao"></i>
          <i class="sanjiaoS"></i>
        </div>
        <img :src="obj.imgUrl" v-if='obj.id==="self"' alt="">
      </div>
    </div>
    <div class="bottomTool">
      <div class="camera"></div>
      <input type="text" v-model="ctn" @keyup.enter='push'>
      <div class="talk"></div>
    </div>
  </div>
</template>
<script>
import commonHeader from '@/components/header'
export default {
  name: 'groupTalk',
  components: { commonHeader },
  data() {
    return {
      ctn: '',
      data: [
        {
          id: 'other',
          imgUrl: require('../../../assets/images/child1.png'),
          msg: '宝洁SFA项目UI设计'
        },

        {
          id: 'self',
          imgUrl: require('../../../assets/images/child.png'),
          msg: '好的'
        },
        {
          id: 'other',
          imgUrl: require('../../../assets/images/child1.png'),
          msg: '请查收'
        }
      ]
    }
  },
  methods: {
    push() {
      if (this.ctn.length > 0) {
        this.data.push({
          id: 'self',
          imgUrl: require('../../../assets/images/child.png'),
          msg: this.ctn
        })
        this.ctn = ''
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
.groupTalk {
  height: 100%;
  position: relative;
  .ctn {
    height: px2rem(1080);
    max-height: px2rem(1080);
    overflow: auto;
    padding-bottom: px2rem(100);
    .time {
      text-align: center;
      margin: px2rem(40) 0 px2rem(30) 0;
      font-size: px2rem(25);
      color: $c757575;
    }
    .peopleList {
      margin: 0 px2rem(70) px2rem(94) px2rem(70);
      padding: px2rem(25);
      color: #aac0c0;
      font-size: px2rem(25);
      background-color: $cf5f5f5;
      border-radius: 10px;
    }
    .self,
    .other {
      display: flex;

      margin-bottom: px2rem(30);
      img {
        width: px2rem(104);
        height: px2rem(104);
        margin: 0 px2rem(28);
      }
      .msg {
        position: relative;
        padding: 0 px2rem(18);
        font-size: px2rem(36);
        color: $c000;
        border: 1px solid $ce8e8e8;
        border-radius: 5px;
        max-width: px2rem(530);
        height: px2rem(104);
        line-height: px2rem(104);
      }
      .sanjiao,
      .sanjiaoS {
        position: absolute;
        width: 0;
        height: 0;
        border: px2rem(20) solid transparent;
      }
      .sanjiaoS {
        border-width: px2rem(15);
      }
    }
    .other {
      .sanjiao {
        left: px2rem(-40);
        top: px2rem(32);
        border-right-color: $ce8e8e8;
      }
      .sanjiaoS {
        left: px2rem(-30);
        top: px2rem(37);
        border-right-color: white;
      }
    }
    .self {
      justify-content: flex-end;
      .sanjiao {
        right: px2rem(-40);
        top: px2rem(32);
        border-left-color: $ce8e8e8;
      }
      .sanjiaoS {
        right: px2rem(-30);
        top: px2rem(37);
        border-left-color: white;
      }
    }
  }

  .bottomTool {
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    border-top: 1px solid $ce8e8e8;
    background-color: #f8f8f8;
    height: px2rem(100);
    display: flex;
    align-items: center;
    justify-content: space-between;
    .camera {
      width: px2rem(60);
      height: px2rem(45);
      margin: 0 px2rem(33);
      background: url('../../../assets/images/camera.png') no-repeat;
      background-size: 100%;
    }
    .talk {
      width: px2rem(60);
      height: px2rem(60);
      margin: 0 px2rem(33);
      background: url('../../../assets/images/talk.png') no-repeat;
      background-size: 100%;
    }
    input {
      width: px2rem(490);
      height: px2rem(65);
      border: 1px solid $ce8e8e8;
      padding-left: 10px;
      border-radius: 10px;
      font-size: px2rem($f28);
    }
  }

  & /deep/ .person {
    background-image: url('../../../assets/images/dperson.png');
  }
}
</style>
