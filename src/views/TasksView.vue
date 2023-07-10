<template>
	<div class="home">
		<Navigation></Navigation>
		<div class="content">
			<FilterSearch></FilterSearch>
			<Plug v-if="!checkTasks" textMessage="Не создана ни одна задача"></Plug>
			<template v-else>
				<TaskItem
					v-for="taskItem in allTasks"
					v-bind:taskItem="taskItem"
					v-bind:key="taskItem.id"></TaskItem>
				<Pagintations
					:totalPages="totalPages"
					:currentPage="currentPage"
					@current-page-next="currentPageNext"
					@prev-page="prevPage"
					@next-page="nextPage"></Pagintations>
			</template>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Navigation from '@/components/Navigation/Navigation.vue';
import TaskItem from '@/components/Task-item/TaskItem.vue';
import FilterSearch from '@/components/FilterSearch/FilterSearch.vue';
import Plug from '@/components/Plug/Plug.vue';
import Pagintations from '@/components/Paginations/Pagintations.vue';

export default {
	name: 'TaskView',
	components: {
		Navigation,
		TaskItem,
		FilterSearch,
		Plug,
		Pagintations,
	},
	computed: {
		...mapGetters({
			allTasks: 'TaskModule/getAllTasks',
			totalPages: 'TaskModule/getTotalPages',
			currentPage: 'TaskModule/getCurrentPage',
		}),
	},
	methods: {
		...mapActions({
			getTasks: 'TaskModule/getTasks',
			setCurrentPage: 'TaskModule/setCurrentPage',
		}),
		nextPage() {
			const page = this.currentPage + 1;
			// if (this.currentPage === this.totalPages) return;
			// this.currentPage = this.currentPage + 1;
		},
		prevPage() {
			if (this.currentPage === 1) return;
			this.currentPage = this.currentPage - 1;
		},
		currentPageNext(page) {
			this.setCurrentPage(page);
			this.getTasks({
				page: page,
			});
		},
		checkTasks() {
			if (this.allTasks.length > 0) {
				return true;
			} else {
				return false;
			}
		},
	},
	mounted() {
		this.getTasks();
	},
};
</script>
