<template>
	<div class="create-task">
		<h1 class="create-task__title">Создание задачи</h1>
		<hr />
		<form class="create-task__form">
			<div class="create-task__form-group">
				<label class="create-task__label" for="name"
					>Название
					<div class="required">*</div></label
				>
				<input
					v-model.trim="model.name"
					class="create-task__input"
					type="text"
					id="name"
					placeholder="Введите текст..." />
			</div>
			<div class="create-task__form-group">
				<label class="create-task__label">Описание</label>
				<textarea
					v-model.trim="model.description"
					class="create-task__textarea"
					placeholder="Введите текст..." />
			</div>
			<div class="create-task__form-group">
				<label class="create-task__label"
					>Проект
					<div class="required">*</div></label
				>
				<Select
					v-model="model.project"
					className="create-task__select"
					:options="projectsArray"></Select>
			</div>
			<div class="create-task__form-group">
				<label class="create-task__label">Исполнитель</label>
				<Select
					v-model="model.executor"
					className="create-task__select"
					:options="executorsArray"></Select>
			</div>
		</form>
		<hr />
		<div class="btn-block">
			<Button btnClassName="btn-cancel" btnName="Отмена"></Button>
			<Button 
        btnClassName="btn-create"   
        btnName="Создать задачу"  
        v-on:click="createTask"
        ></Button>
		</div>
	</div>
</template>

<script>
import Select from '@/UI/Select/Select.vue';
import Button from '@/UI/Button/Button.vue';
import './style.scss';
export default {
	name: 'CreateTask',
	components: { Select, Button },
	data() {
		return {
			model: {
				name: '',
				description: '',
				project: '',
				executor: '',
			},
			projectsArray: [
				{ value: 'Проект 1', optionText: 'Проект 1' },
				{ value: 'Проект 2', optionText: 'Проект 2' },
				{ value: 'Проект 3', optionText: 'Проект 3' },
				{ value: 'Проект 4', optionText: 'Проект 4' },
			],
			executorsArray: [
				{ value: 'Иванов И.И.', optionText: 'Иванов И.И.' },
				{ value: 'Петров П.П.', optionText: 'Петров П.П.' },
				{ value: 'Фёдоров В.А.', optionText: 'Фёдоров В.А.' },
				{ value: 'Алексеев Ю.Н.', optionText: 'Алексеев Ю.Н.' },
			],
		};
	},
	methods: {
		createTask() {
			console.log(this.model);
			this.model = {
				name: '',
				description: '',
				project: '',
				executor: '',
			};
		},
	},
};
</script>

<style></style>
