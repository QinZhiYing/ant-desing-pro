/*
 * @Autor: zhiying Qin
 * @Date: 2022-10-31 20:18:13
 * @LastEditTime: 2022-11-08 20:43:47
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Button, Layout, Drawer, Icon, Radio, Menu } from "ant-design-vue";

import Authorized from "@/components/Authorized";

import Auth from "./directives/auth";

import request from "@/utils/request";

Vue.use(Button);
Vue.use(Layout);
Vue.use(Drawer);
Vue.use(Icon);
Vue.use(Radio);
Vue.use(Menu);

Vue.component("Authorized", Authorized);
Vue.use(Auth);

Vue.prototype.$request = request;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
