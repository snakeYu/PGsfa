import Vue from 'vue'
import Router from 'vue-router'
// 清华相关页面
import home from '@/page/home'

// 进店拜访
import visit from '@/page/visit'
// 店内活动
import activity from '@/page/store/activity'
// 签到
import sign from '@/page/store/sign'
// 下订单
import order from '@/page/store/order'
// 详情页
import detail from '@/page/store/detail'
// 购物车
import cart from '@/page/store/cart'
import submitOrder from '@/page/store/submitOrder'

// 曙光相关页面
import orderStatus from '@/page/orderStatus/orderStatus'
import success from '@/page/orderStatus/childrens/success'
import orderInfo from '@/page/orderStatus/childrens/orderInfo'
import training from '@/page/training/training'
import imageText from '@/page/training/childrens/imageText'
import video from '@/page/training/childrens/video'
import questionAnswer from '@/page/training/childrens/questionAnswer'
import message from '@/page/message/message'
import single from '@/page/message/childrens/single'
import conversation from '@/page/message/childrens/conversation'
import select from '@/page/message/childrens/select'
import one from '@/page/message/childrens/one'
import group from '@/page/message/childrens/group'
import groupTalk from '@/page/message/childrens/groupTalk'
import self from '@/page/self/self'
import repwd from '@/page/self/childrens/repwd'
import reLogin from '@/page/self/childrens/reLogin'
import userInfo from '@/page/self/childrens/userInfo'
// 超相关页面
import stores from '@/page/late/stores'
import whouse from '@/page/late/stores/whouse'
import info from '@/page/late/info'
import note from '@/page/late/infos/note'
import noti from '@/page/late/infos/noti'
import notice from '@/page/late/notice'

Vue.use(Router)
const shuguang = [{
  path: '/self',
  component: self,
  redirect: '/self/userInfo',
  children: [{
    path: 'reLogin',
    component: reLogin
  },
  {
    path: 'repwd',
    component: repwd
  }, {
    path: 'userInfo',
    component: userInfo
  }
  ]
}, {
  path: '/orderStatus',
  component: orderStatus
},
{
  path: '/success',
  component: success
},
{
  path: '/orderInfo/:Mid',
  component: orderInfo
},
{
  path: '/training',
  component: training,
  redirect: '/training/imageText',
  children: [{
    path: 'imageText',
    component: imageText
  },
  {
    path: 'video',
    component: video
  },
  {
    path: 'questionAnswer',
    component: questionAnswer
  }
  ]
},
{
  path: '/message',
  component: message,
  redirect: '/message/conversation',
  children: [{
    path: 'single',
    component: single
  }, {
    path: 'conversation',
    component: conversation
  }]
}, {
  path: '/select',
  component: select,
  redirect: '/select/one',
  children: [{
    path: 'one',
    component: one
  },
  {
    path: 'group',
    component: group
  }
  ]
}, {
  path: '/groupTalk',
  component: groupTalk
}
]

const qinghua = [{
  path: '/visit',
  name: 'visit',
  component: visit
},
{
  path: '/activity',
  name: 'activity',
  component: activity
},
{
  path: '/sign',
  name: 'sign',
  component: sign
},
{
  path: '/order',
  name: 'order',
  component: order
},
{
  path: '/detail',
  name: 'detail',
  component: detail
},
{
  path: '/submitOrder',
  name: 'submitOrder',
  component: submitOrder
},
{
  path: '/cart',
  name: 'cart',
  component: cart
}, {
  path: '/',
  name: 'home',
  component: home
}, {
  path: '/home',
  name: 'home',
  component: home
}
]
const zhangchao = [{
  path: '/late/stores',
  component: stores
},
{
  path: '/late/whouse',
  component: whouse
},
{
  path: '/info',
  component: info
}, {
  path: '/late/info/note',
  component: note
}, {
  path: '/late/notice',
  component: notice
}, {
  path: '/late/notice/noti',
  component: noti
}
]

export default new Router({
  mode: 'history',
  routes: [
    ...shuguang, ...qinghua, ...zhangchao
  ]
})
