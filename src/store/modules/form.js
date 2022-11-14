/*
 * @Autor: zhiying Qin
 * @Date: 2022-11-12 21:32:53
 * @LastEditTime: 2022-11-13 01:43:10
 */
import router from "../../router/index";

import request from "../../utils/request";

const state = {
  step: {
    payAccount: "123456",
    receiverAccount: {
      type: "wechat",
      number: "",
    },
  },
};

const actions = {
  async submitSetpForm({ commit }, { payload }) {
    await request({
      url: "/api/form",
      method: "POST",
      data: payload,
    });
    console.log(payload);
    commit("saveStepFormData", { payload });
    router.push("/form/step-form/result");
  },
};

const mutations = {
  saveStepFormData(state, { payload }) {
    state.step = {
      ...state.step,
      ...payload,
    };
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
