<template>
	<form class="create-project__form">
		<div class="create-project__form-group">
			<label class="create-project__label" for="name">
				Код
				<div class="required">*</div>
			</label>
			<input
				v-model.trim="model.name"
				class="create-project__input"
				type="text"
				id="name"
				placeholder="Введите текст..."
				required />
		</div>
		<div class="create-project__form-group">
			<label class="create-project__label" for="name">
				Название
				<div class="required">*</div>
			</label>
			<input
				v-model.trim="model.name"
				class="create-project__input"
				type="text"
				id="name"
				placeholder="Введите текст..."
				required />
		</div>
	</form>
</template>

<script>
export default {
	name: 'FormProject',
};
</script>

<style></style>
