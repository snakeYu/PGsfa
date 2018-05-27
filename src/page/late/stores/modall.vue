<template>
  <div id="modal" transition="fade" v-show="inf">
    <div class="modal-dialog">
      <div class="modal-content">
        <!--头部-->
        <div class="modal-header">
          <br>
          <h4>{{title}}</h4>
        </div>
        <!--内容区域-->
        <div class="modal-body">
          <br>
          <div v-for="item in msg" :key="item.id">
            <label>
              {{item.name}}
              <input type="radio" name="ra1" id="" @click="close(item.name)">
            </label>
          </div>

        </div>
        <!--尾部,操作按钮-->
        <div class="modal-footer">
          <br><br>
          <input type="button" value="取消" @click="quxiao" class="quxiao">
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/var.scss';
#modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1001;
  -webkit-overflow-scrolling: touch;
  outline: 0;
  overflow: scroll;
  box-sizing: border-box;
  background: rgba(66, 66, 66, 0.5);
  padding: px2rem(100) px2rem(50);
}
.modal-dialog {
  // position: absolute;
  background: rgba(200, 200, 200, 0.8);
  border: 1px solid #eee;
  border-radius: 10px;
  position: relative;
  top: 0;
  color: #000;
  text-align: center;
  width: 100%;
  height: 100%;
  label {
    font-size: px2rem($f28);
    input[type='radio'] {
      width: px2rem($f28);
      height: px2rem($f28);
    }
  }
  .quxiao {
    width: px2rem(80);
    height: px2rem(50);
    font-size: px2rem($f28);
  }
}
</style>

<script>
export default {
  name: 'modal',
  props: ['inf'],
  data() {
    return {
      title: '请选择',
      flag: this.inf,
      msg: [
        { id: 1, name: '小一' },
        { id: 2, name: '小er' },
        { id: 3, name: '小san' },
        { id: 4, name: '小si' }
      ]
    }
  },
  methods: {
    close(info) {
      // console.log(info)
      this.inf = !this.flag
      this.$emit('fun', info, this.flag)
    },
    quxiao() {
      this.inf = !this.flag
      this.$emit('fun', this.flag)
    }
  },

  updated() {
    // console.log(this.inf)
  }
}
</script>
