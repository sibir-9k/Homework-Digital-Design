import Vue from 'vue';
import VueRouter from 'vue-router';
import ProjectView from '@/views/ProjectView.vue';
import TasksView from '@/views/TasksView.vue';
import ProfileView from "@/views/ProfileView.vue"

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: ProjectView,
	},
	{
		path: '/tasks',
		name: 'tasks',
		component: TasksView,
	},
	{
		path: '/profile',
		name: 'profile',
		component: ProfileView,
	},
	// {
	//   path: '/about',
	//   name: 'about',
	//   // route level code-splitting
	//   // this generates a separate chunk (about.[hash].js) for this route
	//   // which is lazy-loaded when the route is visited.
	//   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
	// }
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
