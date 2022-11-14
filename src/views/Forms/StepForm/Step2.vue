<!--
 * @Autor: zhiying Qin
 * @Date: 2022-11-02 10:21:17
 * @LastEditTime: 2022-11-12 22:38:34
-->
<template>
  <div class="Step1">
    <a-form layout="horizontal" :form="form">
      <a-form-item label="付款账户" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
        {{ step.payAccount }}
      </a-form-item>
      <a-form-item label="密码" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
        <a-input
          v-decorator="[
            'password',
            {
              rules: [
                {
                  required: true,
                  message: '请输入密码',
                },
              ],
            },
          ]"
          type="password"
        ></a-input>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="handleSubmit">提交</a-button>
        <a-button style="margin-left: 10px" type="primary" @click="onPrev">上一步</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: "Step1",
  data() {
    this.form = this.$form.createForm(this);
    return {
      formItemLayout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  created() {},
  computed: {
    step() {
      return this.$store.state.form.step;
    },
  },
  components: {},
  watch: {},
  methods: {
    handleSubmit() {
      const { form, $store, step } = this;
      form.validateFields((err, values) => {
        if (!err) {
          $store.dispatch({
            type: "form/submitSetpForm",
            payload: { ...step, ...values },
          });
        }
      });
    },

    onPrev() {
      this.$router.push("/form/step-form/info");
    },
  },
};
</script>
<style scoped lang="scss"></style>
