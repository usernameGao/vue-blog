import Vuex from 'vuex'
import Vue from 'vue'

//使用vuex
Vue.use(Vuex);

const state = {
  flag: true,
  loginStatus: JSON.parse(sessionStorage.getItem("userName")),
  data: [
    { name: "导航一", children: [{ name: "胡艳华", path: "/hu" }, { name: "小崽子", path: "/zai" }] },
    { name: "导航二", children: [], path: "/lonely" },
    { name: "导航三", children: [{ name: "小华子", path: "/hua" }, { name: "小胡子", path: "/huaa" }] },
  ]
}

const mutations = {
  changeFlag(state, payload) {
    state.flag = payload.flag;
  },
  changeLoginStatus(state, payload) {
    sessionStorage.setItem('userName', JSON.stringify(payload));
    state.loginStatus = payload;
  }
}
export default new Vuex.Store({
  state,
  mutations
})