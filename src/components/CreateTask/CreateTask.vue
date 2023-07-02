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
				<input class="create-task__input" type="text" id="name" placeholder="Введите текст..." />
			</div>
			<div class="create-task__form-group">
				<label class="create-task__label">Описание</label>
				<textarea class="create-task__textarea" placeholder="Введите текст..." />
			</div>
			<div class="create-task__form-group">
				<label class="create-task__label"
					>Проект
					<div class="required">*</div></label
				>
				<Select
					className="create-task__select"
					option1="Проект 1"
					option2="Проект 2"
					option3="Проект 3"
					option4="Проект 4"></Select>
			</div>
			<div class="create-task__form-group">
				<label class="create-task__label">Исполнитель</label>
				<Select
					className="create-task__select"
					option1="Иванов И.И."
					option2="Петров П.П."
					option3="Фёдоров В.А."
					option4="Алексеев Ю.Н."></Select>
			</div>
		</form>
		<hr />
		<div class="btn-block">
			<Button btnClassName="btn-cancel" btnName="Отмена"></Button>
			<Button btnClassName="btn-create" btnName="Создать задачу"></Button>
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
};
</script>

<style></style>
