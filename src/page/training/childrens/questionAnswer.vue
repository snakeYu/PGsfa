<template>
  <div class="questionAnswer">
    <div class="timeNum">
      <div class="useTime">
        已用时：{{useTime}}
      </div>
      <div class="num">
        第{{index+1}}题 ({{question.length}}题)
      </div>
    </div>
    <div class="questionBox">
      <div class="question">
        {{questionOne.id+1}}.{{questionOne.data.qs}}
      </div>
      <ul class="selects">
        <li v-for='(select ,i) in questionOne.data.an' :key='i'>
          <label :class="{on:select.qsNum==whichOne}" :for="select.qsNum">
            <span>{{select.qsNum}}</span> {{select.content}}</label>
          <input @click='which' :id='select.qsNum' type="radio" name="qs">
          <i class="yes" v-if='select.qsNum==whichOne'></i>
        </li>

      </ul>
    </div>
    <returnIndex v-if='end'></returnIndex>
    <div @click='next' class="next">
      下一题
    </div>
  </div>
</template>
<script>
export default {
  name: 'questionAnswer',
  components: {
    returnIndex: {
      template: `
      <div class='return'>
        <div class='box'>
          <h3 >问答已经完全完成！</h3>
          <router-link   to='/training'>返回</router-link>
        </div>

      </div>
    `
    }
  },
  data() {
    return {
      question: [
        {
          qs: '武汉工贸销售晨会的时间?',
          an: [
            { qsNum: 'A', content: '周一 周四' },
            { qsNum: 'B', content: '周三 周五' },
            { qsNum: 'C', content: '周一' },
            { qsNum: 'D', content: '周四 周五' }
          ]
        },
        {
          qs: '我和你谁更帅?',
          an: [
            { qsNum: 'A', content: '你' },
            { qsNum: 'B', content: '我' },
            { qsNum: 'C', content: '他' },
            { qsNum: 'D', content: '无聊' }
          ]
        },
        {
          qs: '你的性别?',
          an: [
            { qsNum: 'A', content: '男' },
            { qsNum: 'B', content: '女' },
            { qsNum: 'C', content: '妖人' },
            { qsNum: 'D', content: '保密' }
          ]
        }
      ],
      whichOne: '',
      index: 0,
      end: false,
      answer: [],
      startTime: new Date()
    }
  },
  methods: {
    which(e) {
      this.whichOne = e.target.id
    },
    next() {
      if (this.whichOne) {
        if (this.question.length < this.index + 1) {
          this.end = true
        } else {
          this.answer.push(this.whichOne)
          console.log(this.answer)
          this.whichOne = ''

          if (this.question.length === this.index + 1) {
            this.end = true
          } else {
            this.index++
          }
        }
      } else {
        alert('你没有选中！')
      }
    }
  },
  computed: {
    useTime() {
      return new Date() - this.startTime
    },
    questionOne() {
      return {
        id: this.index,
        data: this.question[this.index]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
.questionAnswer {
  .timeNum {
    padding: px2rem(28);
    border: 1px solid $ce8e8e8;
    border-left: none;
    border-right: none;
    display: flex;
    div {
      height: px2rem(84);
      border: 1px solid $ce8e8e8;
      border-radius: 5px;
      line-height: px2rem(84);
      font-size: px2rem(28);
      color: $c000;
    }
    .useTime {
      width: px2rem(414);
      padding-left: px2rem($pl28);
      margin-right: px2rem(10);
    }
    .num {
      text-align: center;
      width: px2rem(270);
    }
  }
  .questionBox {
    font-size: px2rem(28);
    color: $c000;
    .question {
      margin: px2rem(40) 0 px2rem(60) px2rem(28);
      // font-size: px2rem($f28);
      // color: $c000;
    }
    .selects {
      padding-right: px2rem(28);
      li {
        position: relative;
        height:px2rem() span {
          margin-right: px2rem($pl28);
        }
        margin: px2rem(60) 0 px2rem(60) px2rem(60);
        input {
          visibility: hidden;
        }
        i {
          display: inline-block;
          position: absolute;
          right: 0;
          top: 0;
          width: px2rem(46);
          height: px2rem(32);
          background: url('../../../assets/images/right.png') no-repeat;
          background-size: 100%;
        }
        label {
          display: inline-block;
          width: 100%;
        }
        .on {
          color: $c10903d;
          span {
            color: inherit;
          }
        }
      }
    }
  }
  .next {
    position: absolute;
    bottom: 0;
    left: 0;
    height: px2rem(108);
    line-height: px2rem(108);
    text-align: center;
    width: 100%;
    color: $c10903d;
    font-size: px2rem($f36);
    border-top: 1px solid $ce8e8e8;
  }

  .return {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 999;
    & /deep/ .box {
      text-align: center;
      width: 100%;
      position: absolute;
      top: 45%;
      left: 50%;
      transform: translate(-50%);
      h3 {
        margin-bottom: 10px;
        color: #fff;
      }
      a {
        color: #10903d;
      }
    }
  }
}
</style>
