/*
 * @Autor: zhiying Qin
 * @Date: 2022-10-31 20:18:13
 * @LastEditTime: 2022-11-14 20:55:55
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import I18N from "./locale/i18n";
import {
  Button,
  Layout,
  Drawer,
  Icon,
  Radio,
  Menu,
  Input,
  Form,
  Select,
  LocaleProvider,
  Dropdown,
  DatePicker,
} from "ant-design-vue";

import Authorized from "@/components/Authorized";

import Auth from "./directives/auth";

import request from "@/utils/request";

Vue.use(Button);
Vue.use(Layout);
Vue.use(Drawer);
Vue.use(Icon);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Input);
Vue.use(Form);
Vue.use(Select);
Vue.use(LocaleProvider);
Vue.use(Dropdown);
Vue.use(DatePicker);

Vue.component("Authorized", Authorized);
Vue.use(Auth);

// console.log(I18N, "18");

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/c/font_3767678_4av83a2q87z.js",
});

Vue.component("IconFont", IconFont);

Vue.prototype.$request = request;
Vue.prototype.$I18N = I18N;

console.log(Vue.prototype.$I18N);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
