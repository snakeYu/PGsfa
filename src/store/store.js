import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  // 商品信息
  goodsList: '',
  // 是否显示刷新按钮
  hid: true,
  // 购物车
  cartList: ''
}

const mutations = {
  getAll(state, stop) {
    state.goodsList = stop
  },
  funHid(state, stop) {
    state.hid = stop
  },
  addCart(state, stop) {
    if (!state.cartList) {
      state.cartList = []
      state.cartList.push(stop)
    } else {
      for (var element of state.cartList) {
        console.log(element)
        if (element.addr === stop.addr) {
          element.list.push(stop.list[0])
        } else {
          state.cartList.push(stop)
          break
        }
      }
    }
  }
}

const actions = {}

const getters = {}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
export default store
