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
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
body {
	font-family: 'Open Sans', sans-serif;
}
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
