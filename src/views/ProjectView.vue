<template>
	<div class="home">
		<Navigation></Navigation>
		<div class="content">
			<template>
				<Plug v-if="!checkProjects" textMessage="Не создан ни один проект"></Plug>
				<template v-else>
					<FilterSearch></FilterSearch>
					<Loader v-if="isFetching"></Loader>
					<template v-else>
						<ProjectItem v-for="project in allProjects" :project="project" :key="project.id">
						</ProjectItem>
					</template>
					<Pagintations
						:totalPages="totalPages"
						:currentPage="currentPage"
						@current-page-next="currentPageNext"
						@prev-page="prevPage"
						@next-page="nextPage"></Pagintations>
				</template>
			</template>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import Navigation from '@/components/Navigation/Navigation.vue';
import ProjectItem from '@/components/Project-item/ProjectItem.vue';
import FilterSearch from '@/components/FilterSearch/FilterSearch.vue';
import Plug from '@/components/Plug/Plug.vue';
import Pagintations from '@/components/Paginations/Pagintations.vue';
import Loader from '@/UI/Loader/Loader.vue';

export default {
	name: 'ProjectView',
	components: {
		Navigation,
		ProjectItem,
		FilterSearch,
		Plug,
		Pagintations,
		Loader,
	},
	data() {
		return {
			isFetching: false,
		};
	},
	computed: {
		...mapGetters({
			allProjects: 'ProjectModule/getAllProjects',
			totalPages: 'ProjectModule/getTotalPages',
			currentPage: 'ProjectModule/getCurrentPage',
		}),
		...mapState({
			isFetching: (state) => state.ProjectModule.isFetching,
		}),
	},
	methods: {
		...mapActions({
			getProjects: 'ProjectModule/getProjects',
			setCurrentPage: 'ProjectModule/setCurrentPage',
		}),
		nextPage() {
			// const page = this.currentPage + 1;
			if (this.currentPage === this.totalPages) return;
			this.currentPage = this.currentPage + 1;
		},
		prevPage() {
			if (this.currentPage === 1) return;
			this.currentPage = this.currentPage - 1;
		},
		currentPageNext(page) {
			this.setCurrentPage(page);
			this.getProjects({
				page: page,
			});
		},
		checkProjects() {
			if (this.allProjects.length > 0) {
				return true;
			} else {
				return false;
			}
		},
	},
	mounted() {
		this.getProjects();
	},
};
</script>
