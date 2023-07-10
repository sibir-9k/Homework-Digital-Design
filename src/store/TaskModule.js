import axios from 'axios';
import { BASE_URL } from '@/api/api.js';

export const mutation = {
	SET_TASKS_LIST: 'SET_TASKS_LIST',
	SET_TASKS_CURRENT_PAGE: 'SET_TASKS_CURRENT_PAGE',
	SET_TASKS_TOTAL_PAGES: 'SET_TASKS_TOTAL_PAGES',
};

export default {
	namespaced: true,

	state: {
		tasksArray: [],
		totalPages: null,
		currentPage: 1,
	},
	getters: {
		getAllTasks: (state) => state.tasksArray,
		getTotalPages: (state) => state.totalPages,
		getCurrentPage: (state) => state.currentPage,
	},
	mutations: {
		[mutation.SET_TASKS_LIST]: (state, payload) => {
			state.tasksArray = payload;
		},
		[mutation.SET_TASKS_TOTAL_PAGES]: (state, payload) => {
			state.totalPages = payload;
		},
		[mutation.SET_TASKS_CURRENT_PAGE]: (state, payload) => {
			state.currentPage = payload;
		},
	},
	actions: {
		async getTasks(context, objData = { page: 1 }) {
			try {
				if (!objData || !objData.page) {
					throw new Error('Invalid data');
				}
				const response = await axios.post(`${BASE_URL}/tasks/search`, objData, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Bearer ${localStorage.getItem('UserToken')}`,
					},
				});
				const result = await response.data;
				console.log(result);
				context.commit(mutation.SET_TASKS_LIST, result.tasks);
				context.commit(mutation.SET_TASKS_TOTAL_PAGES, result.total);
				context.commit(mutation.SET_TASKS_CURRENT_PAGE, result.page);
			} catch (error) {
				console.log(error);
			}
		},
		setCurrentPage(context, page) {
			context.commit(mutation.SET_TASKS_CURRENT_PAGE, page);
		},
	},
};
