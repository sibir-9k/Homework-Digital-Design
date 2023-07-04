<template>
	<div class="auth-block">
		<div class="auth-block__top">
			<h2 class="auth-top__title">Вход</h2>
		</div>
		<form class="auth-block__form">
			<div class="auth-form__login">
				<label for="login">Логин*</label>
				<input type="text" name="login" id="login" />
			</div>
			<div class="auth-form__password">
				<label for="password">Пароль*</label>
				<input :type="isClose ? 'password' : 'text'" name="password" />
				<Button @click.prevent="isClose = !isClose">
					<Icon :iconName="openEye"></Icon>
				</Button>
			</div>
		</form>
		<div class="auth-block__footer">
			<button>Войти</button>
		</div>

		<input class="checkbox" type="checkbox" v-model="checked" @change="toggleButton" />
		<router-link to="/" v-show="showButton">Вы авторизованы</router-link>
	</div>
</template>

<script>
import '@/assets/svg/eye-close.svg';
import '@/assets/svg/eye-open.svg';
import Icon from '@/UI/Icon/Icon.vue';
import './style.scss';
export default {
	name: 'AuthForm',
	components: {
		Icon,
	},
	data() {
		return {
			isAuth: false,
			isClose: true,
			checked: false,
			showButton: false,
		};
	},
	computed: {
		openEye() {
			if (this.isClose) {
				return 'eye-close';
			} else {
				return 'eye-open';
			}
		},
	},
	methods: {
		toggleButton() {
			this.showButton = this.checked;
			if (this.checked) {
				localStorage.setItem('Auth', 'true'); // Добавление поля "Auth" со значением "true" в localStorage
			} else {
				localStorage.removeItem('Auth'); // Удаление поля "Auth" из localStorage
			}
		},
	},
};
</script>
