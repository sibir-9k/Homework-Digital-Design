<template>
	<div class="task-item">
		<div class="task-item__container">
			<div class="task-item__block">
				<div class="item-block__header">
					<p class="header-message">
						{{ taskItem.description }}
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
						#{{ taskItem.number }}
						<span
							class="footer-author__name"
							v-html="
								nameAuthor + ' создал ' + (taskItem.dateCreated ? formattedDateEdited : '')
							"></span>
						<Status classNameStatus="status status--draft" :status="taskItem.status"></Status>
					</div>
					<div class="footer__block-right">
						<div class="footer__editor">
							<span
								class="footer-author__name"
								v-html="
									taskItem.authorEdited ? nameEdit + ' изменил ' + formattedDateEdited : ''
								"></span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<DropdownButton
			classNameBlock="task-item__setting"
			:dropList="dropList"
			iconName="dots"></DropdownButton>
	</div>
</template>

<script>
import { formatDate } from '@/helpers/formatDate.js';
import Status from '@/UI/Status/Status.vue';
import DropdownButton from '@/UI/DropdownButton/DropdownButton.vue';
import './style.scss';

export default {
	name: 'TaskItem',
	components: { DropdownButton, Status },
	props: {
		taskItem: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			dropList: [
				{
					type: 'router-link',
					props: { to: '/edit-task' },
					class: 'edit',
					text: 'Редактировать',
				},
				{ type: 'button', props: { onClick: this.openModal }, class: 'delete', text: 'Удалить' },
			],
			formattedDateCreated: '',
			formattedDateEdited: '',
			nameEdit: '',
			nameAuthor: localStorage.getItem('UserName'),
			authorId: localStorage.getItem('UserId'),
		};
	},
	mounted() {
		const dateCreated = new Date(this.taskItem.dateCreated);
		const dateEdited = this.taskItem.dateEdited ? new Date(this.taskItem.dateEdited) : null;
		const { formattedDate, formattedDateEdited } = formatDate(dateCreated, dateEdited, this.months);

		this.formattedDateCreated = formattedDate;
		this.formattedDateEdited = formattedDateEdited;

		// const getUsers = async (id) => {
		// 	try {
		// 		const response = await axios.post(
		// 			`${BASE_URL}/users/search`,
		// 			{
		// 				filter: {
		// 					_id: id,
		// 				},
		// 			},
		// 			{
		// 				headers: {
		// 					'Content-Type': 'application/json',
		// 					Authorization: `Bearer ${localStorage.getItem('UserToken')}`,
		// 				},
		// 			}
		// 		);
		// 		const result = await response?.data?.users;
		// 		this.nameEdit = result[0].name;
		// 	} catch (error) {
		// 		console.log(error);
		// 	}
		// };

		// getUsers(this.taskItem.authorEdited);
	},
};
</script>
