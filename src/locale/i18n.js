/*
 * @Autor: zhiying Qin
 * @Date: 2022-11-14 20:38:56
 * @LastEditTime: 2022-11-14 20:57:05
 */
import Vue from "vue";
import VueI18n from "vue-i18n";
// import zhCN from "./zhCN";
// import enUS from "./enUS";
Vue.use(VueI18n);
const I18N = new VueI18n({
  locale: "zhCN",
  en: {
    message: {
      hello: "world",
    },
  },
});

console.log(I18N.t("en"));

export default I18N;
