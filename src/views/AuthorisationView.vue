<template>
	<div class="container">
		<AuthForm></AuthForm>
	</div>
</template>

<script>
import AuthForm from '@/components/AuthForm/AuthForm.vue';

export default {
	components: { AuthForm },
	name: 'AuthorisationView',
	component: {
		AuthForm,
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
