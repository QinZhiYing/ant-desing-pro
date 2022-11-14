/*
 * @Autor: zhiying Qin
 * @Date: 2022-10-31 20:18:13
 * @LastEditTime: 2022-11-12 21:39:04
 */
import Vue from "vue";
import Vuex from "vuex";
import form from "./modules/form";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    form,
  },
});
