<template>
  <div id="sign">
    <commonHeader @fun='fun' :slotData="{title:'商店签到',rCls:'add'}">
    </commonHeader>
    <div class="center">
      <ul class="image">
        <li>
          <div class="photo" @click="add('+')">
            <img src="@/assets/images/camera@3x.png" alt="">
            <span>拍摄照片</span>
          </div>
          <input type="file" class="filess" style="opacity: 0" />
        </li>
        <li v-for="item in photo" :key='item.id'>
          <div class="img">
            <img :src='item.imgs' :alt='item.name'>
          </div>
        </li>
        <li>
          <div class="photo" @click="add('-')">
            <img src="@/assets/images/minus@3x.png" alt="">
            <span>删除照片</span>
          </div>
        </li>
      </ul>
      <div class="notes">
        <div class="tit">备注：</div>
        <textarea name="" id="" cols="30" rows="10" placeholder="点击填写备注~" v-model="remark"></textarea>
      </div>
    </div>
  </div>
</template>
<script>
import commonHeader from '@/components/header.vue'
export default {
  name: 'sign',
  components: { commonHeader },
  data() {
    return {
      photo: [],
      count: 0,
      remark: ''
    }
  },
  methods: {
    add(val) {
      if (val === '+') {
        // document.querySelector('.filess').click()
        if (this.count < 3) {
          this.photo.push({ imgs: 'static/photo.jpg', name: 123 })
          this.count++
        }
      } else {
        if (this.count > -1) {
          this.photo = this.photo.slice(1)
          this.count--
        }
      }
    },
    async getlun(url, datas) {
      const { data } = await this.$http.post(url, datas)
      if (data.code === 0) {
        alert('签到成功')
        this.$router.back()
      }
    },
    fun() {
      const sign = {}
      /* 用户签到 */
      sign.userid = 1
      sign.date = new Date()
      sign.storeId = this.$route.query.id
      sign.photo = this.photo
      sign.note = this.remark
      console.log(sign)
      this.getlun('api/sign', sign)
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
#sign {
  height: 100%;
  .center {
    .image {
      width: 100%;
      margin-left: px2rem(10);
      margin-top: px2rem(10);
      overflow: hidden;
      li {
        width: px2rem(217);
        height: px2rem(217);
        border: px2rem(1) solid #ccc;
        float: left;
        margin-left: px2rem(20);
        margin-top: px2rem(20);
        font-size: px2rem(24);
        text-align: center;
        .photo {
          margin-top: 30%;
          img {
            width: px2rem(60);
            margin: px2rem(10) auto;
            display: block;
          }
        }
        .img {
          img {
            width: 100%;
            height: 100%;
          }
        }
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
        outline: none;
      }
    }
  }
  //header头部的右边加号按钮的样式
  & /deep/ .add {
    display: inline-block;
    width: px2rem(47);
    height: px2rem(48);
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url('../../assets/images/ok@3x.png');
  }
}
</style>
