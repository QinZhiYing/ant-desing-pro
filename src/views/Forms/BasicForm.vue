<!--
 * @Autor: zhiying Qin
 * @Date: 2022-11-02 10:19:54
 * @LastEditTime: 2022-11-11 19:05:30
-->
<template>
  <a-form :layout="formLayout" :form="form">
    <a-form-item label="Form Layout" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
      <a-radio-group default-value="horizontal" @change="handleFormLayoutChange">
        <a-radio-button value="horizontal"> Horizontal </a-radio-button>
        <a-radio-button value="vertical"> Vertical </a-radio-button>
        <a-radio-button value="inline"> Inline </a-radio-button>
      </a-radio-group>
    </a-form-item>
    <a-form-item label="Field A" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
      <a-input
        placeholder="input placeholder"
        v-decorator="['fieldA', { rules: [{ message: '必须大于5个字符', min: 5, required: true }] }]"
      />
    </a-form-item>
    <a-form-item label="Field B" :label-col="formItemLayout.labelCol" :wrapper-col="formItemLayout.wrapperCol">
      <a-input placeholder="input placeholder" v-decorator="['fieldB']" />
    </a-form-item>
    <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
      <a-button type="primary" @click="submit"> Submit </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  data() {
    this.form = this.$form.createForm(this);
    return {
      formLayout: "horizontal",
      fieldA: "",
      fieldB: "",
    };
  },
  mounted() {
    setTimeout(() => {
      this.form.setFieldsValue({
        fieldA: "hello world",
      });
    }, 3000);
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === "horizontal"
        ? {
            wrapperCol: { span: 14, offset: 4 },
          }
        : {};
    },
  },
  methods: {
    handleFormLayoutChange(e) {
      this.formLayout = e.target.value;
    },
    submit() {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log(values);
          Object.assign(this, values);
          console.log(this.fieldA, this.fieldB);
        }
      });
    },
  },
};
</script>
