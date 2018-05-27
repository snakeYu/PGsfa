<template>
  <ul class="group" @click.capture='checked'>
    <li v-for='(item,i) in dataList' :key='i'>
      <div class="left">
        <span class="btn"></span>
        <div class="content">
          <h4>{{item.title}}</h4>
          <p>{{item.msg}}</p>
        </div>
      </div>
      <div class="right">
        {{item.time}}
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'group',
  data() {
    return {
      dataList: [
        {
          title: '宝洁SFA项目UI',
          msg: '宁静物语：我们这边还没有受到...',
          time: '下午 2:19'
        },
        {
          title: '七月流濂',
          msg: '项目产品吗还是开始啦',
          time: '下午 2:19'
        },
        {
          title: '喵喵咪',
          msg: '项目产品吗还是那开始吗？',
          time: '下午 2:19'
        },
        {
          title: '独家记忆 ',
          msg: '项目产品吗还是那开始啦，快来看看',
          time: '下午 2:19'
        }
      ]
    }
  },
  methods: {
    checked(e) {
      if (e.target.parentElement.nodeName.toLowerCase() === 'li') {
        e.target.parentElement.classList.toggle('checked')
      } else if (
        e.target.parentElement.parentElement.nodeName.toLowerCase() === 'li'
      ) {
        e.target.parentElement.parentElement.classList.toggle('checked')
      } else if (
        e.target.parentElement.parentElement.parentElement.nodeName.toLowerCase() ===
        'li'
      ) {
        e.target.parentElement.parentElement.parentElement.classList.toggle(
          'checked'
        )
      } else {
        e.target.classList.toggle('checked')
      }
    }
  }
}
</script>
<style scoped lang='scss'>
@import '@/scss/var.scss';
@import '@/scss/common.scss';

.group li {
  padding: px2rem(30) px2rem($pl28);
  // height: px2rem(164);
  // box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $ce8e8e8;

  .left {
    width: px2rem(580);
    display: flex;
    align-items: center;
    .btn {
      position: relative;
      width: px2rem(30);
      height: px2rem(30);
      border: 1px solid $ce8e8e8;
      border-radius: 50%;
      margin-right: px2rem(30);
      background-color: #fff;
    }

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
      overflow: hidden;
    }
  }
  .right {
    margin-top: px2rem(12);
    font-size: px2rem(24);
    color: $c757575;
  }
}
li.checked .btn:before {
  position: absolute;
  top: px2rem(5);
  left: px2rem(5);
  content: '';
  display: inline-block;
  background-color: $c00a2eb;
  width: px2rem(18);
  height: px2rem(18);
  border-radius: 50%;
}
</style>
