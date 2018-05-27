<template>
  <ul class="video">
    <li v-for='(item,index) in list' :key='index'>
      <img :src="item.imgUrl" alt="">
      <ul class="info">
        <li class="caption">{{item.title}}</li>
        <li class="context">{{item.content}}</li>
        <li class="date">{{item.date}}</li>
        <li class="long">
          <i></i>
          <span>{{item.long}}</span>
        </li>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  name: 'videoPage',
  data() {
    return {
      list: [
        {
          imgUrl: require('../../../assets/images/video.png'),
          title: '护舒宝轻柔纯棉超薄型超薄',
          content: '料什么、配料具有哪些功能有哪些功能',
          date: '2014.12.23 12:24:00',
          long: '12:23'
        },
        {
          imgUrl: require('../../../assets/images/video.png'),
          title: '轻柔存棉超薄型超薄',
          content: '料什么、配料、具有哪些功能',
          date: '2014.12.23 12:24:00',
          long: '12:23'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
.video {
  border-bottom: px2rem(1) solid $ce8e8e8;
  > li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: px2rem($pl28);
    padding-left: 0;
    margin-left: px2rem($pl28);
    border-bottom: px2rem(1) solid $ce8e8e8;
    &:last-child {
      border: none;
    }
    img {
      width: px2rem(260);
      height: px2rem(146);
      padding-right: px2rem($pl28);
    }
    .info {
      .caption {
        font-size: px2rem($f28);
        color: $c000;
      }
      .context {
        font-size: px2rem($f22);
        color: $c000;
        width: 100%;
        overflow: hidden;
      }
      .date,
      .long {
        font-size: px2rem($f22);
        color: $c757575;
      }
      .long {
        display: flex;
        align-items: center;
        i {
          display: inline-block;
          width: px2rem(17);
          height: px2rem(19);
          margin-right: px2rem(10);
          background-repeat: no-repeat;
          background-size: 100%;
          @include bgImage('../../../assets/images/time');
        }
      }
    }
  }
}
</style>
