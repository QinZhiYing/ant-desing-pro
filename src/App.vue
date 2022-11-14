<!--
 * @Autor: zhiying Qin
 * @Date: 2022-10-31 20:18:13
 * @LastEditTime: 2022-11-14 19:25:33
-->
<template>
  <div id="app">
    <a-locale-provider :locale="locale">
      <router-view />
    </a-locale-provider>
  </div>
</template>
<script>
import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";
import enUS from "ant-design-vue/lib/locale-provider/en_US";
import moment from "moment";
export default {
  data() {
    return {
      locale: zhCN,
    };
  },
  watch: {
    "$route.query.locale": function (val) {
      console.log(val, "dsfds");
      this.locale = val == "enUS" ? enUS : zhCN;
      moment.locale(val == "enUS" ? "en" : "zh-cn");
    },
  },
};
</script>

<style lang="less"></style>
