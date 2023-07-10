<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap');
#app {
	font-family: 'Open Sans', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

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
.content {
	justify-content: space-between;
}
a {
	text-decoration: none;
}
</style>
