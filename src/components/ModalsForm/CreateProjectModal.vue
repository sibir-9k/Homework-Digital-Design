<template>
	<div class="create-task">
		<h1 class="create-task__title">Создание задачи</h1>
		<hr />
		<FormProject
			:model="createTaskObj"
			:projectsArray="projectsArray"
			:executorsArray="executorsArray"></FormProject>
		<hr />
		<div class="btn-block">
			<Button btnClassName="btn-cancel" btnName="Отмена"></Button>
			<Button btnClassName="btn-create" btnName="Создать проект" v-on:click="createTask"></Button>
		</div>
	</div>
</template>

<script>
import FormProject from "@/UI/Forms/FormProject/FormProject.vue"


export default{
  name:'EditProjectModal',
  components: { FormProject },
}
</script>

<style></style>
