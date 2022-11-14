<!--
 * @Autor: zhiying Qin
 * @Date: 2022-11-01 20:40:16
 * @LastEditTime: 2022-11-14 20:08:23
-->
<template>
  <div class="SiderMenu">
    <a-menu :selectedKeys="selectedKeys" :openKeys.sync="openKeys" mode="inline" :theme="theme">
      <template v-for="item in menuData">
        <a-menu-item
          v-if="!item.children"
          :key="item.path"
          @click="() => $router.push({ path: item.path, query: { ...$route.query } })"
        >
          <a-icon :type="item.meta.icon" v-if="item.meta" />
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.path + ''" :menu-info="item" />
      </template>
    </a-menu>
  </div>
</template>

<script>
import SubMenu from "./SubMenu";
import { check } from "@/utils/auth";
export default {
  props: {
    theme: {
      type: String,
      default: () => "dark",
    },
  },
  name: "siderMenu",
  components: {
    "sub-menu": SubMenu,
  },
  watch: {
    "$route.path": function (val) {
      this.selectedKeys = this.selectedKeysMap[val];
      this.openKeys = this.openKeysMap[val];
    },
  },
  data() {
    this.openKeysMap = {};
    this.selectedKeysMap = {};
    const menuData = this.getMenuData(this.$router.options.routes);
    console.log(this.$router);

    return {
      menuData,
      collapsed: false,
      openKeys: this.openKeysMap[this.$route.path],
      selectedKeys: this.selectedKeysMap[this.$route.path],
    };
  },
  created() {},
  mounted() {
    console.log(this.selectedKeys, this.openKeys);
    console.log(this.openKeysMap, this.selectedKeysMap);
  },
  methods: {
    getMenuData(routes = [], parentKeys = [], selectedKey) {
      const menuData = [];
      for (let item of routes) {
        if (item.meta && item.meta.auth && !check(item.meta.auth)) {
          continue;
        }

        if (item.name && !item.hideInMenu) {
          this.openKeysMap[item.path] = parentKeys;
          this.selectedKeysMap[item.path] = [selectedKey || item.path];

          const newItem = { ...item };
          delete newItem.children;

          if (item.children && !item.hideChildrenInMenu) {
            newItem.children = this.getMenuData(item.children, [...parentKeys, item.path]);
          } else {
            this.getMenuData(
              item.children,
              selectedKey ? parentKeys : [...parentKeys, item.path],
              selectedKey || item.path
            );
          }
          menuData.push(newItem);
        } else if (!item.hideInMenu && !item.hideChildrenInMenu && item.children) {
          menuData.push(...this.getMenuData(item.children, [...parentKeys, item.path]));
        }
      }
      return menuData;
    },
  },
};
</script>
<style scoped lang="scss"></style>
