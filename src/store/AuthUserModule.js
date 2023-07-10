import axios from 'axios';
import { BASE_URL } from '@/api/api.js';
import router from '@/router';

export const mutation = {
	SET_USER_TOKEN: 'SET_USER_TOKEN',
	SET_USER_ID: 'SET_USER_ID',
	SET_USER_DATA: 'SET_USER_DATA',
};

export default {
	namespaced: true,

	state: {
		userToken: null,
		userId: null,
		userData: {},
	},
	getters: {
		getUserToken: (state) => state.userToken,
		getUserId: (state) => state.userId,
		getUserData: (state) => state.userData,
	},
	mutations: {
		[mutation.SET_USER_TOKEN]: (state, payload) => {
			state.userToken = payload;
		},
		[mutation.SET_USER_ID]: (state, payload) => {
			state.userId = payload;
		},
		[mutation.SET_USER_DATA]: (state, payload) => {
			state.userData = payload;
		},
	},
	actions: {
		async getTokenUser(context, loginData) {
			try {
				const response = await axios.post(`${BASE_URL}/login`, loginData, {
					headers: {
						'Content-Type': 'application/json',
					},
				});
				context.commit(mutation.SET_USER_TOKEN, response.data.token);
				localStorage.setItem('UserToken', context.getters.getUserToken);
				await context.dispatch('getCurrentUser', response.data.token);
				router.push('/tasks');
			} catch (error) {
				console.log(error);
				context.commit(mutation.SET_USER_TOKEN, null);
				context.commit(mutation.SET_USER_ID, null);
				context.commit(mutation.SET_USER_DATA, {});
				this.hasError = true;
			}
		},
		async getCurrentUser(context, token) {
			try {
				const response = await axios.get(`${BASE_URL}/users/current`, {
					headers: {
						'Content-Type': 'application/json; charset=utf-8',
						Authorization: `Bearer ${token}`,
					},
				});
				console.log(response);
				context.commit(mutation.SET_USER_ID, response.data._id);
        localStorage.setItem('UserId', context.getters.getUserId);
				context.commit(mutation.SET_USER_DATA, response.data);
        console.log(response.data)
			} catch (error) {
				console.log(error);
			}
		},
	},
};
