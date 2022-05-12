<template>
  <section class="signup-view">
    <form @submit.prevent novalidate class="ui form">
      <div class="ui stacked segment">
        <EmailField v-model="user.email" />
        <PasswordField v-model="user.password" />
        <button
          class="ui button red fluid"
          :disabled="isSignupButtonDisabled"
          @click="loginButtonPressed"
        >
          LOG IN
        </button>
      </div>
    </form>
  </section>
</template>

<script>
import { reactive } from "vue";
import EmailField from "../../components/EmailField.vue";
import PasswordField from "../../components/PasswordField.vue";
import useFormValidation from "../../modules/useFormValidation";
import useSubmitButtonState from "../../modules/useSubmitButtonState";
import router from '../../router'

export default {
  components: {
    EmailField,
    PasswordField,
  },
  setup() {
    let user = reactive({
      email: "",
      password: "",
    });

    const { errors } = useFormValidation();
    const { isSignupButtonDisabled } = useSubmitButtonState(user, errors);

    const loginButtonPressed = () => {
      console.log(user);
	  router.push({ path: '/home'})
    };

    return {
      user,
      isSignupButtonDisabled,
      loginButtonPressed,
    };
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