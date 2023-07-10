import Vue from 'vue';
import VueRouter from 'vue-router';
import ProjectView from '@/views/ProjectView.vue';
import TasksView from '@/views/TasksView.vue';
import ProfileView from '@/views/ProfileView.vue';
import CreateTask from '@/views/CreateTaskView.vue';
import UsersView from '@/views/UsersView.vue'
import NotFound from '@/views/NotFoundView.vue'
import AuthorisationView from '@/views/AuthorisationView.vue'
import EditTask from '@/views/EditTaskView.vue'

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		name: 'home',
		component: ProjectView,
	},
  {
    path:'/auth',
    name: 'auth',
    component: AuthorisationView
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
	{
		path: '/create-task',
		name: 'create-task',
		component: CreateTask,
	},
	{
		path: '/edit-task',
		name: 'edit-task',
		component: EditTask,
	},
	{
		path: '/users',
		name: 'users',
		component: UsersView,
	},
	{
		path: '*',
		name: 'not-found',
		component: NotFound,
	},

];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
