import Vue from 'vue'
import Router from 'vue-router'
import orderStatus from '../page/orderStatus/orderStatus.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/orderStatus',
    name: 'orderStatus',
    component: orderStatus
  }]
})
