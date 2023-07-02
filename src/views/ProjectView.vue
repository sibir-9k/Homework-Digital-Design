<template>
	<div class="home">
		<Navigation></Navigation>
		<div class="content">
			<filter-search></filter-search>
			<Plug v-if="hasProjects" textMessage="Не создан ни один проект"></Plug>
			<template v-else>
				<Project-item v-for="project in projects" v-bind:project="project" v-bind:key="project.id">
				</Project-item>
			</template>
		</div>
	</div>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation.vue';
import ProjectItem from '@/components/Project-item/ProjectItem.vue';
import FilterSearch from '@/components/FilterSearch/FilterSearch.vue';
import Plug from '@/components/Plug/Plug.vue';

export default {
	name: 'ProjectView',
	components: {
		Navigation,
		ProjectItem,
		FilterSearch,
		Plug,
	},
	data() {
		return {
			hasProject: false,
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
	computed: {
		hasProjects() {
			if (this.projects.length < 1) {
				return (this.hasProject = true);
			} else {
				return (this.hasProject = false);
			}
		},
	},
};
</script>
