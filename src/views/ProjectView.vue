<template>
	<div class="home">
		<Navigation></Navigation>
		<filter-search></filter-search>
		<Project-item v-for="project in projects" v-bind:project="project" v-bind:key="project.id">
		</Project-item>
	</div>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation.vue';
import ProjectItem from '@/components/Project-item/ProjectItem.vue';
import FilterSearch from '@/components/FilterSearch/FilterSearch.vue';

export default {
	name: 'ProjectView',
	components: {
		Navigation,
		ProjectItem,
		FilterSearch,
	},
	data() {
		return {
			projects: [
				{
					id: 1,
					user: 'Иванов И.И.',
					editor: 'Баранов В.В.',
					status: 'Черновик',
					dataCreate: '1 минуту назад',
					dateEdited: '1 час назад',
				},
				{
					id: 2,
					user: 'Иванов И.И.',
					editor: 'Баранов В.В.',
					status: 'Готово',
					dataCreate: '2 минуту назад',
					dateEdited: '3 час назад',
				},
				{
					id: 3,
					user: 'Иванов И.И.',
					editor: 'Баранов В.В.',
					status: 'Черновик',
					dataCreate: '4 минуту назад',
					dateEdited: '5 час назад',
				},
				{
					id: 4,
					user: 'Фролов Е.',
					editor: 'Фролов Е.',
					status: 'Черновик',
					dataCreate: '6 минуту назад',
					dateEdited: '7 час назад',
				},
				{
					id: 5,
					user: 'Иванов И.И.',
					editor: 'Баранов В.В.',
					status: 'Черновик',
					dataCreate: '8 минуту назад',
					dateEdited: '9 час назад',
				},
			],
		};
	},
};
</script>
