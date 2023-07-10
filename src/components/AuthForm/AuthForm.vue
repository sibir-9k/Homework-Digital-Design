<template>
  <div class="auth-block">
    <div class="auth-block__top">
      <h2 class="auth-top__title">Вход</h2>
    </div>
    <form class="auth-block__form">
      <div class="auth-form__login">
        <span v-show="hasError" class="error"
          >Неправильный логин или пароль.</span
        >
        <label for="login">Логин*</label>
        <input
          type="text"
          name="login"
          id="login"
          v-model.trim="loginData.login"
          @input="hasError = false"
        />
      </div>
      <div class="auth-form__password">
        <label for="password">Пароль*</label>
        <input
          :type="isClose ? 'password' : 'text'"
          name="password"
          v-model.trim="loginData.password"
          @input="hasError = false"
        />
        <Button @click.prevent="isClose = !isClose">
          <Icon :iconName="openEye"></Icon>
        </Button>
      </div>
    </form>
    <div class="auth-block__footer">
      <button
        :disabled="isDisabled"
        :class="isDisabled ? '' : 'active-btn-auth'"
        @click="getUser"
      >
        Войти
      </button>
    </div>
  </div>
</template>

<script>
import Icon from "@/UI/Icon/Icon.vue";
import "./style.scss";
export default {
  name: "AuthForm",
  components: {
    Icon,
  },
  props: {
    loginData: Object,
  },
  data() {
    return {
      // isAuth: false,
      isClose: true,
      isDisable: true,
      // token: "",
      hasError: false,
    };
  },
  computed: {
    openEye() {
      if (this.isClose) {
        return "eye-close";
      } else {
        return "eye-open";
      }
    },
    isDisabled() {
      return (
        this.loginData.login.length === 0 ||
        this.loginData.password.length === 0
      );
    },
  },
  methods: {
    getUser() {
      this.$emit("get-user");
    },
  },
};
</script>
