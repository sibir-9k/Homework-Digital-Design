<template>
	<div id="app">
		<!-- <router-view/> -->
		<!-- <ProfileView></ProfileView> -->
		<project-view></project-view>
		<!-- <tasks-view></tasks-view> -->
	</div>
</template>

<script>
import ProjectView from './views/ProjectView.vue';
import ProfileView from './views/ProfileView.vue';
import TasksView from './views/TasksView.vue';

export default {
	name: 'App',
	components: {
		ProfileView,
		ProjectView,
		TasksView,
	},
};
</script>

<style lang="scss"></style>
