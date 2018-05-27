<template>
  <ul class="imageText">
    <li v-for='(item,index) in list' :key='index'>
      <img :src="item.imgUrl" alt="">
      <ul class="info">
        <li class="caption">{{item.title}}</li>
        <li class="context">{{item.context}}</li>
      </ul>
    </li>
  </ul>
</template>
<script>
import commonHeader from '@/components/header'
export default {
  name: 'imageText',
  components: { commonHeader },
  data() {
    return {
      list: [
        {
          imgUrl: require('../../../assets/images/rect.png'),
          title: '护舒宝轻柔纯棉超薄型超薄',
          context:
            '料什么、配料具有哪些功能，配料具有哪些功能等等。产品保质期、注料具有哪些功能法等有哪功能法等。'
        },
        {
          imgUrl: require('../../../assets/images/rect.png'),
          title: '舒宝轻柔纯棉超薄',
          context: '料什么、配料具有哪些功能，配料具有哪些功能些材料的功效等等'
        },
        {
          imgUrl: require('../../../assets/images/rect.png'),
          title: '护舒宝轻柔纯棉超薄型超薄',
          context:
            '料什么、配料具有哪些功能，配料具有哪些功能等等。产品保质期、注料具有哪些功能法等有哪功能法等。'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/scss/var.scss';
@import '@/scss/common.scss';
.imageText {
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
      width: px2rem(180);
      height: px2rem(136);
      padding-right: px2rem($pl28);
    }
    .info {
      .caption {
        font-size: px2rem($f28);
        color: $c000;
      }
      .context {
        font-size: px2rem($f22);
        color: $c757575;
      }
    }
  }
}
</style>
