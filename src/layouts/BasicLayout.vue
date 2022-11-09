<!--
 * @Autor: zhiying Qin
 * @Date: 2022-11-01 20:31:40
 * @LastEditTime: 2022-11-06 21:56:30
-->
<template>
  <div class="BasicLayout" :class="[`nav-theme-${navTheme}`, `nav-layout-${LayoutStyle}`]">
    <a-layout id="components-layout-demo-custom-trigger">
      <a-layout-sider v-model="collapsed" :trigger="null" collapsible :theme="navTheme" v-if="LayoutStyle == 'left'">
        <h2 class="logo" v-auth="['user']">ant design vue pro</h2>
        <SiderMenu :theme="navTheme" />
      </a-layout-sider>
      <a-layout>
        <a-layout-header style="background: #fff; padding: 0">
          <Header />
        </a-layout-header>
        <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
          <router-view></router-view>
        </a-layout-content>
        <a-layout-footer>
          <Footer />
        </a-layout-footer>
      </a-layout>
    </a-layout>

    <!-- <Authorized :auth="['admin']">
      <Drawer />
    </Authorized> -->
    <Drawer></Drawer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SiderMenu from "./SiderMenu.vue";
import Drawer from "../components/Drawer.vue";
export default {
  name: "BasicLayout",
  data() {
    return {
      collapsed: false,
    };
  },
  created() {},
  computed: {
    navTheme() {
      return this.$route.query.ThemeColor || "dark";
    },
    LayoutStyle() {
      return this.$route.query.LayoutStyle || "left";
    },
  },
  components: {
    Header,
    Footer,
    SiderMenu,
    Drawer,
  },
  watch: {},
  methods: {},
};
</script>
<style scoped lang="less">
#components-layout-demo-custom-trigger {
  height: 100vh;
}
.nav-theme-dark .logo {
  color: #fff;
  text-align: center;
}
</style>
