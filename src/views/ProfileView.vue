<template>
	<div class="home">
    <Navigation></Navigation>
		<Profile></Profile>
	</div>
</template>

<script>
import Profile from '@/components/Profile/Profile.vue';
import Navigation from '@/components/Navigation/Navigation.vue';

export default {
	name: 'ProfileView',
	components: {
		Profile,
    Navigation
	},
};
</script>
