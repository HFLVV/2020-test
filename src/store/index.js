import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    hehe:"张争辉"
  },
  mutations: {
    changeName(state,index){
      state.hehe=index
    }
  },
  actions: {
  },
  modules: {
  }
})
