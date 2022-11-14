<!--
 * @Autor: zhiying Qin
 * @Date: 2022-11-13 01:12:27
 * @LastEditTime: 2022-11-13 02:01:24
-->
<template>
  <div class="ReceiverAccount">
    <a-input-group compact>
      <a-select v-model="type" style="width: 130px" @change="handleTypeChange">
        <a-select-option value="wechat"> 微信 </a-select-option>
        <a-select-option value="alipay"> 支付宝 </a-select-option>
      </a-select>
      <a-input style="width: calc(100% - 130px)" v-model="number" @change="handleNumberChange" />
    </a-input-group>
  </div>
</template>

<script>
export default {
  name: "ReceiverAccount",
  props: {
    value: {
      type: Object,
    },
  },
  watch: {
    value(value) {
      console.log(value);
      Object.assign(this, value);
    },
  },
  data() {
    const { type, number } = this.value || {};
    return {
      type: type || "alipay",
      number: number || "",
    };
  },
  created() {},
  components: {},
  methods: {
    handleTypeChange(val) {
      this.$emit("change", { ...this.value, type: val });
    },
    handleNumberChange(e) {
      this.$emit("change", { ...this.value, number: e.target.value });
    },
  },
};
</script>
<style scoped lang="scss"></style>
