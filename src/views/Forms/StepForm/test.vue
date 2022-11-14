<!--
 * @Autor: zhiying Qin
 * @Date: 2022-11-13 11:07:20
 * @LastEditTime: 2022-11-13 13:36:26
-->
<template>
  <div class="test">
    <a-input placeholder="input placeholder" @change="changeInput" v-model="str" @blur="changeInput" />
  </div>
</template>

<script>
export default {
  props: {
    value: Object,
  },
  name: "test",
  data() {
    console.log(this.value);
    return {
      str: this.value.name || "",
    };
  },
  created() {},
  components: {},
  watch: {},
  methods: {
    changeInput(e) {
      this.$emit("change", { name: e.target.value });
    },
  },
};
</script>
<style scoped lang="scss"></style>
