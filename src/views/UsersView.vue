<template>
	<div class="home">
		<Navigation></Navigation>
		<template v-if="localStorage.getItem('Auth') === 'true'">
			<Plug textMessage="Данные пользователя"></Plug>
		</template>
		<template v-else>
			<p>Вы не авторизованы</p>
			<router-link to="auth">Авторизоваться</router-link>
		</template>
	</div>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation.vue';
import Plug from '@/components/Plug/Plug.vue';
export default {
	name: 'ProfileView',
	components: {
		Plug,
		Navigation,
	},
	data() {
		return {
			localStorage: window.localStorage,
		};
	},
};
</script>

<style lang="scss" scoped>
a {
	display: flex;
	height: 42px;
	padding: 12px 16px;
	align-items: center;
	gap: 8px;
	border-radius: 4px;
	background: #1f75cb;
}
</style>
