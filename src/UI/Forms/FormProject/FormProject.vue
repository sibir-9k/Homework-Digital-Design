<template>
	<div class="container-form" :class="{ active: modalOpen }">
		<div class="project-create">
			<h2 class="project-create__title">Создание проекта</h2>
			<hr />
			<form class="project-create__form">
				<div class="project-create__form-group">
					<label class="project-create__label" for="name">
						Код
						<div class="required">*</div>
					</label>
					<input
						class="project-create__input"
						type="text"
						id="name"
						placeholder="Введите текст..."
						required />
				</div>
				<div class="project-create__form-group">
					<label class="project-create__label" for="name">
						Название
						<div class="required">*</div>
					</label>
					<input
						class="project-create__input"
						type="text"
						id="name"
						placeholder="Введите текст..."
						required />
				</div>
			</form>
			<hr />
			<div class="btn-block">
				<Button btnClassName="btn-cancel" btnName="Отмена"></Button>
				<Button btnClassName="btn-create" btnName="Создать задачу"></Button>
			</div>
		</div>
	</div>
</template>

<script>
import Button from '@/UI/Button/Button.vue';
import './style.scss';
export default {
	name: 'FormProject',
	components: { Button },
	props: {
		modalOpen: {
			type: Boolean,
		},
	},
};
</script>

<style></style>
