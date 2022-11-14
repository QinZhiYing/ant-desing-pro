<!--
 * @Autor: zhiying Qin
 * @Date: 2022-11-01 20:39:54
 * @LastEditTime: 2022-11-14 19:54:30
-->
<template>
  <div class="Header">
    <a-dropdown style="float: right; margin-right: 20px">
      <a class="ant-dropdown-link">语言切换 <a-icon type="down" /> </a>
      <a-menu slot="overlay" @click="langTab">
        <a-menu-item key="znCN"> 中文 </a-menu-item>
        <a-menu-item key="enUS"> English </a-menu-item>
      </a-menu>
    </a-dropdown>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {};
  },
  created() {},
  components: {},
  watch: {},
  methods: {
    langTab({ key }) {
      // console.log(val);
      this.$router.push({ query: { ...this.$route.query, locale: key } });
    },
  },
};
</script>
<style scoped lang="scss"></style>
