<!--
 * @Autor: zhiying Qin
 * @Date: 2022-11-02 10:21:30
 * @LastEditTime: 2022-11-13 13:34:50
-->
<template>
  <div class="Step3">
    操作成功，预计两小时到账

    <a-form :form="form">
      <a-form-item label="test">
        <Input
          v-decorator="[
            'name',
            {
              initialValue: { name },
              rules: [
                {
                  message: '请输入内容',
                  required: true,
                  validator: fn,
                },
              ],
            },
          ]"
        />
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import Input from "./test.vue";
export default {
  name: "Step3",
  data() {
    this.form = this.$form.createForm(this);
    return {
      name: "",
    };
  },
  created() {},
  components: {
    Input,
  },
  watch: {},
  methods: {
    fn(rule, value, callback) {
      console.log(value);
      if (value.name) {
        callback();
      } else {
        callback(false);
      }
    },
  },
};
</script>
<style scoped lang="scss"></style>
