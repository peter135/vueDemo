<template>
  <section class="signup-view">
    <form class="ui form" @submit.prevent>
      <NameField v-model="user.name" />
      <EmailField v-model="user.email" />
      <PhoneField v-model="user.phone" />
      <PasswordField v-model="user.password" />
      <button
        class="ui button red fluid big"
        @click="signUpButtonPressed"
        :disabled="isSignupButtonDisabled"
      >
        SIGN UP
      </button>
    </form>
  </section>
</template>

<script>
import { reactive } from "vue";

import NameField from "@/components/NameField";
import EmailField from "@/components/EmailField";
import PhoneField from "@/components/PhoneField";
import PasswordField from "@/components/PasswordField";

import useFormValidation from "@/modules/useFormValidation";
import useSubmitButtonState from "@/modules/useSubmitButtonState";

export default {
  components: {
    NameField,
    EmailField,
    PhoneField,
    PasswordField,
  },
  setup() {
    let user = reactive({
      name: "",
      email: "",
      phone: "",
      password: "",
    });

    const { errors } = useFormValidation();
    const { isSignupButtonDisabled } = useSubmitButtonState(user, errors);

    const signUpButtonPressed = () => {
      console.log(user);
    };
    return { user, signUpButtonPressed, isSignupButtonDisabled };
  },
};
</script>

<style scoped>
.signup-view {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.form {
  width: 450px;
}
</style>