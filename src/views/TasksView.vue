<template>
	<div class="home">
		<Navigation></Navigation>
		<div class="content">
			<filter-search></filter-search>
			<Plug v-if="hasTasks" textMessage="Не создана ни одна задача"></Plug>
			<template v-else>
				<Task-item
					v-for="taskItem in items"
					v-bind:taskItem="taskItem"
					v-bind:key="taskItem.id"></Task-item>
			</template>
		</div>
	</div>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation.vue';
import TaskItem from '@/components/Task-item/TaskItem.vue';
import FilterSearch from '@/components/FilterSearch/FilterSearch.vue';
import Plug from '@/components/Plug/Plug.vue';
export default {
	name: 'TaskView',
	components: {
		Navigation,
		TaskItem,
		FilterSearch,
		Plug,
	},
	data() {
		return {
			hasTask: false,
			items: [
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
		hasTasks() {
			if (this.items.length < 1) {
				return (this.hasTask = true);
			} else {
				return (this.hasTask = false);
			}
		},
	},
};
</script>
