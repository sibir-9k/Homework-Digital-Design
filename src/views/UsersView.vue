<template>
	<div class="home">
    <Navigation></Navigation>
		<Plug textMessage="Пока нету ни одного пользователя"></Plug>
	</div>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation.vue';
import Plug from '@/components/Plug/Plug.vue'
export default {
	name: 'ProfileView',
	components: {
		Plug,
    Navigation
	},
};
</script>
