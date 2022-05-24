<template>
  <div class="form">
    <ti-form ref="form" :model="formData" :rules="rules">
      <ti-form-item label="名称" prop="name">
        <ti-input v-model="formData.name"></ti-input>
      </ti-form-item>
      <ti-form-item label="邮箱" prop="email">
        <ti-input v-model="formData.email"></ti-input>
      </ti-form-item>
      <ti-form-item>
        <button class="button" @click="onSubmit">提交</button>
      </ti-form-item>
    </ti-form>
  </div>
</template>
<script>
import { reactive, getCurrentInstance } from "vue";

import TiInput from "../../components/ti-input";
import TiForm from "../../components/ti-form/ti-form.vue";
import TiFormItem from "../../components/ti-form/ti-form-item.vue";
export default {
  components: {
    TiForm,
    TiFormItem,
    TiInput,
  },
  setup() {
    const formData = reactive({ name: "" ,
    email:""
    
    });
    const rules = {
      name: [{ required: "true", message: "请输入名称" }],
      email: [{ required: "true", message: "请输入邮箱" }],
    };
    const { proxy } = getCurrentInstance();
    const onSubmit = (e) => {
      e.preventDefault();
      proxy.$refs.form.validate((valid) => {
        console.log("valid", valid);
      });
    };
    return { formData, rules, onSubmit };
  },
};
</script>

<style lang="scss" scoped>

.form{
    flex: 1;
    padding: 20px;
    margin: auto;

     .button {
     background: crimson;
     padding: 10px 10px;
     color: #fff;
     cursor: pointer;
     appearance: none;
     border: none;
     outline: none;
  }
}

</style>>
