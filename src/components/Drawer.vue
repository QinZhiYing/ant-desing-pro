<!--
 * @Autor: zhiying Qin
 * @Date: 2022-11-02 20:09:17
 * @LastEditTime: 2022-11-02 20:53:45
-->
<template>
  <div class="Drawer">
    <a-drawer title="Basic Drawer" placement="right" :visible="visible" @close="onClose" width="300px">
      <template v-slot:handle>
        <div @click="visible = !visible" class="themeClor">主题颜色</div>
      </template>

      <h2>主题颜色</h2>
      <a-radio-group
        name="ThemeColor"
        @change="(e) => ThemeColor('ThemeColor', e.target.value)"
        :value="$route.query.ThemeColor || 'dark'"
      >
        <a-radio value="dark"> 黑色 </a-radio>
        <a-radio value="light"> 白色 </a-radio>
      </a-radio-group>

      <h2>布局样式</h2>
      <a-radio-group
        name="LayoutStyle"
        @change="(e) => ThemeColor('LayoutStyle', e.target.value)"
        :value="$route.query.LayoutStyle || 'left'"
      >
        <a-radio value="left"> 左边 </a-radio>
        <a-radio value="top"> 顶部 </a-radio>
      </a-radio-group>
    </a-drawer>
  </div>
</template>

<script>
export default {
  name: "Drawer",
  data() {
    return {
      visible: false,
    };
  },
  created() {},
  components: {},
  watch: {},
  methods: {
    onClose() {
      this.visible = false;
    },

    ThemeColor(type, value) {
      this.$router.push({ query: { ...this.$route.query, [type]: value } });
    },
  },
};
</script>
<style scoped lang="less">
.themeClor {
  position: absolute;
  left: -58px;
  top: 50%;
  background: blue;
  text-align: center;
  color: #fff;
  height: 60px;
  line-height: 60px;
  //   top: 50%;
}
</style>
