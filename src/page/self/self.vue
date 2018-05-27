<template>
  <div class="self">
    <commonHeader @fun="repwd" :slotData="{title:'个人信息',rMsg:'修改密码',rCls:'rw'}" :to="{path:'/home'}"></commonHeader>
    <router-view></router-view>
    <div class="bottomMenu">
      <router-link tag='div' class="reset" to="/self/reLogin">重新登录</router-link>
      <div class="login" @click='exit'>注销</div>

    </div>
    <alertExit v-if='isExit' @fun='exit'></alertExit>
  </div>
</template>
<script>
import commonHeader from '@/components/header'
export default {
  name: 'self',
  data() {
    return {
      isExit: false,
      isRepwd: false
    }
  },
  components: {
    commonHeader,
    alertExit: {
      template: `
      <div class='modal'>

            <h3>确定要注销账户吗？</h3>
            <div class="confirm">
            <div class="login" @click='hide'>取消</div>
            <div @click='to' class="toLogin">确定</div>

          </div>
      </div>`,

      methods: {
        hide() {
          this.$emit('fun')
        },
        to() {
          alert('注销成功！')
          this.$router.push({ path: '/login' })
        }
      }
    }
  },
  methods: {
    exit() {
      this.isExit = !this.isExit
    },
    repwd() {
      this.$router.push({
        path: '/self/repwd'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
.self {
  position: relative;
  height: 100%;

  .bottomMenu {
    position: absolute;
    bottom: 0;
    width: 100%;
    display: flex;
    text-align: center;
    border-top: 1px solid $ce8e8e8;
    div {
      height: px2rem(110);
      line-height: px2rem(110);
      flex: 1;
      font-size: px2rem(36);
      color: #ff5353;
    }
    .reset {
      border-right: 1px solid $ce8e8e8;
    }
    .router-link-active {
      color: $c10903d;
    }
  }

  & /deep/ .modal {
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    text-align: center;
    h3 {
      color: $cfff;
      position: absolute;
      top: 50%;
      width: 100%;
      text-align: center;
    }
    .confirm {
      position: absolute;
      top: 70%;
      width: 100%;
      display: flex;
      justify-content: space-between;
      border: 1px solid $ce8e8e8;
      border-right: 0;
      border-left: 0;
      div {
        flex: 1;
        color: $cfff;
        height: px2rem(110);
        line-height: px2rem(110);
      }
      .toLogin {
        border-left: 1px solid $ce8e8e8;
      }
    }
  }

  & /deep/ .rw {
    width: px2rem(120);
  }
}
</style>
