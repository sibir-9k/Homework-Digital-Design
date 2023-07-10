<template>
	<ul>
		<li v-for="(item, index) in items" :key="index" class="drop-down__item">
			<component
				v-if="item.type === 'router-link'"
				:is="item.type"
				:to="item.props.to"
				:class="item?.class"
				>{{ item.text }}</component
			>
			<component v-else :is="item.type" :props="item.props" class="drop-btn" :class="item?.class">{{
				item.text
			}}</component>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'DropList',
	props: {
		items: Array,
	},
};
</script>

<style lang="scss" scoped>
.drop-btn {
	border: none;
	background: inherit;
	width: fit-content;

	font-family: Open Sans;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;

	cursor: pointer;
	display: flex;
	align-items: flex-start;
}
.edit {
	font-family: Open Sans;
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	color: black;
}
</style>
