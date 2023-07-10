import axios from 'axios';
import { BASE_URL } from '@/api/api.js';

export const mutation = {
	SET_USERS_LIST: 'SET_USERS_LIST',
};

export default {
	namespaced: true,

	state: {
		allUsersArray: [],
	},
	getters: {
		getAllUsers: (state) => state.allUsersArray,
	},
	mutations: {},
	actions: {
		async getAllUsers() {
			try {
				const response = await axios.post(
					`${BASE_URL}/users/search`,
					// {
					//   filter: {
					//     _id: `${this.project.author}`,
					//   },
					// },
					{
						headers: {
							'Content-Type': 'application/json',
							Authorization: `Bearer ${localStorage.getItem('UserToken')}`,
						},
					}
				);
				const result = await response.data;
				console.log(result);
			} catch (error) {
				console.log(error);
			}
		},
	},
};
