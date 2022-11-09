<!-- eslint-disable no-undef -->
<!--
 * @Autor: zhiying Qin
 * @Date: 2022-11-02 21:09:09
 * @LastEditTime: 2022-11-05 01:14:21
-->
<template>
  <div class="SubMenu">
    <a-sub-menu :key="menuInfo.path" v-bind="$props" v-on="$listeners">
      <span slot="title">
        <a-icon :type="menuInfo.meta.icon" /><span>{{ menuInfo.meta.title }}</span>
      </span>
      <template v-for="item in menuInfo.children">
        <a-menu-item
          v-if="!item.children"
          :key="item.path"
          @click="() => $parent.$router.push({ path: item.path, query: { ...$parent.$route.query } })"
        >
          <span>{{ item.meta.title }}</span>
        </a-menu-item>
        <sub-menu v-else :key="item.path + ''" :menu-info="item" />
      </template>
    </a-sub-menu>
  </div>
</template>

<script>
import { Menu } from "ant-design-vue";
export default {
  name: "SubMenu",
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    // Cannot overlap with properties within Menu.SubMenu.props
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {};
  },
  created() {},
  components: {},
  watch: {},
  methods: {},
};
</script>
<style scoped lang="scss"></style>
