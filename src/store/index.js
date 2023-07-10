import Vue from 'vue';
import Vuex from 'vuex';
import ProjectModule from './ProjectModule.js';
import TaskModule from './TaskModule.js';
import AuthUserModule from './AuthUserModule.js';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		ProjectModule,
		TaskModule,
		AuthUserModule,
	},
});
