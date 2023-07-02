<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App',
};
</script>

<style lang="scss">
#app {
	display: flex;
	flex-direction: column;
	height: 100%;
}
.home,
.content {
	display: flex;
	flex-direction: column;
	flex: 1;
}
a {
	text-decoration: none;
}
</style>
