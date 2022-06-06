<template>
  <Loading :text="loadingText" v-if="showLoading" />
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
import { reactive ,computed} from "vue";
import Loading from "../../components/Loading.vue";
import EmailField from "../../components/EmailField.vue";
import PasswordField from "../../components/PasswordField.vue";
import useFormValidation from "../../modules/useFormValidation";
import useSubmitButtonState from "../../modules/useSubmitButtonState";
import router from '../../router'
import "semantic-ui-css/semantic.min.css";
import {useStore} from "vuex";

export default {
  components: {
    EmailField,
    PasswordField,
    Loading
  },
  setup() {

    const store = useStore();
    const  showLoading = computed(function () {
            return store.state.userinfo.showLoading
    });

    const  loadingText = computed(function () {
            return store.state.userinfo.loadingText
    });

    let user = reactive({
      email: "",
      password: "",
    });

    const { errors } = useFormValidation();
    const { isSignupButtonDisabled } = useSubmitButtonState(user, errors);

    const loginButtonPressed = () => {
        // console.log(user);
        if(user.email === '123@163.com'){
          	router.push({ path: '/home'})
        }
    };

    return {
      showLoading,
      loadingText,
      user,
      isSignupButtonDisabled,
      loginButtonPressed,
    };
  },
};
</script>

<style lang="scss" scoped>
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