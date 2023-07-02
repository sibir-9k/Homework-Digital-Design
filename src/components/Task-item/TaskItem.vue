<template>
	<div class="task-item">
		<div class="task-item__container">
			<div class="task-item__block">
				<div class="item-block__header">
					<p class="header-message">
						Очень длинное название проекта, создано специального для того чтоб не вместилось в одну
						строку, что позволит проверить не ломается ли верстка. И еще раз очень длинное название
						проекта, создано специально чтоб проверить не ломается ли И еще раз очень длинное
						название проекта, создано специально чтоб проверить не ломается ли И еще раз очень
						длинное название проекта, создано специально чтоб проверить не ломается ли И еще раз
						очень длинное название проекта, создано специально чтоб проверить не ломается ли
					</p>
					<div class="header-user-avatar">
						<img
							src="@/assets/img/user.jpg"
							class="task-item__editor-avatar"
							alt="User"
							width="24"
							height="24" />
					</div>
				</div>
				<div class="item-block__footer">
					<div class="footer-author">
						#{{ taskItem.id }}
						<span class="footer-author__name"
							>{{ taskItem.user }} создал {{ taskItem.dataCreate }}</span
						>
						<Status classNameStatus="status status--draft" :status="taskItem.status"></Status>
					</div>
					<div class="footer__block-right">
						<div class="footer__editor">
							<span class="footer-author__name"
								>{{ taskItem.editor }} изменил {{ taskItem.dateEdited }}</span
							>
						</div>
					</div>
				</div>
			</div>
		</div>
		<DropdownButton classNameBlock="project-item__setting"></DropdownButton>
	</div>
</template>

<script>
import Status from '@/UI/Status/Status.vue';
import DropdownButton from '@/UI/DropdownButton/DropdownButton.vue';
import './style.scss';

export default {
	components: { DropdownButton, Status },
	name: 'TaskItem',
	props: {
		taskItem: {
			type: Object,
		},
	},
};
</script>

<style></style>
