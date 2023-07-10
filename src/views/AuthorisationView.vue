<template>
	<div class="container">
		<AuthForm :login-data="loginData" @get-user="getUser"></AuthForm>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import AuthForm from '@/components/AuthForm/AuthForm.vue';

export default {
	components: { AuthForm },
	name: 'AuthorisationView',
	component: {
		AuthForm,
	},
	data() {
		return {
			loginData: {
				login: '',
				password: '',
			},
		};
	},
	computed: {
		...mapGetters({
			userToken: 'AuthUserModule/getUserToken',
			userId: 'AuthUserModule/getUserId',
			userData: 'AuthUserModule/getUserData',
		}),
	},
	methods: {
		...mapActions({
			getTokenUser: 'AuthUserModule/getTokenUser',
			getCurrentUser: 'AuthUserModule/getCurrentUser',
		}),
    getUser(){
      this.getTokenUser(this.loginData)
    }
	},
};
</script>

<style lang="scss" scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
}
</style>
