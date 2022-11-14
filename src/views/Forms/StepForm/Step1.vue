<!--
 * @Autor: zhiying Qin
 * @Date: 2022-11-02 10:21:17
 * @LastEditTime: 2022-11-13 02:03:00
-->
<template>
  <div class="Step1">
    <a-form layout="horizontal" :form="form">
      <a-form-item label="付款账户" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
        <a-input
          v-decorator="[
            'payAccount',
            {
              initialValue: step.payAccount,
              rules: [
                {
                  required: true,
                  message: '请输入付款账户',
                },
              ],
            },
          ]"
        ></a-input>
      </a-form-item>

      <a-form-item label="付款账户" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
        <receiverAccount
          v-decorator="[
            'receiverAccount',
            {
              initialValue: step.receiverAccount,
              rules: [
                {
                  required: true,
                  message: '请输入付款账户',
                  validator: (rule, value, callback) => {
                    if (value && value.number) {
                      callback();
                    } else {
                      callback(false);
                    }
                  },
                },
              ],
            },
          ]"
        />
      </a-form-item>

      <a-form-item>
        <a-button type="primary" @click="handleSubmit">下一步</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
import receiverAccount from "../../../components/ReceiverAccount.vue";
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
  created() {
    setTimeout(() => {
      this.$store.state.form.step.receiverAccount.type = "alipay";
    }, 2000);
  },
  computed: {
    step() {
      return this.$store.state.form.step;
    },
  },
  components: { receiverAccount },
  watch: {},
  methods: {
    handleSubmit() {
      const { form, $router, $store } = this;
      form.validateFields((err, values) => {
        if (!err) {
          $store.commit({
            type: "form/saveStepFormData",
            payload: values,
          });
          $router.push("/form/step-form/confirm");
        }
      });
    },
  },
};
</script>
<style scoped lang="scss"></style>
