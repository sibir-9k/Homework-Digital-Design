<template>
	<div class="project-item">
		<div class="project-item__container">
			<div class="project-item__block">
				<div class="item-block__header">
					<p class="header-message">{{ project.name }}</p>
				</div>
				<div class="item-block__footer">
					<div class="footer-author">
						#{{ project.code }}
						<span class="footer-author__name"
							>{{ nameCreated }} создал {{ formattedDateCreated }}</span
						>
					</div>
					<div class="footer__block-right">
						<div class="footer__editor">
							<span class="footer-author__name"
								>{{ project.editor }} изменил {{ formattedDateEdited }}</span
							>
						</div>
					</div>
				</div>
			</div>
		</div>
		<DropdownButton :dropList="dropList" iconName="dots" classNameBlock="project-item__setting">
		</DropdownButton>
		<FormProject :modalOpen="modalOpen"></FormProject>
	</div>
</template>

<script>
import { formatDate } from '@/helpers/formatDate.js';
import DropdownButton from '@/UI/DropdownButton/DropdownButton.vue';
import FormProject from '@/UI/Forms/FormProject/FormProject.vue';
import './style.scss';

export default {
	name: 'ProjectItem',
	components: {
		DropdownButton,
		FormProject,
	},
	props: {
		project: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			dropList: [
				{
					type: 'button',
					props: {
						onClick: (event) => {
							event.preventDefault();
							this.modalOpen = true;
						},
					},
					text: 'Редактировать',
				},
				{
					type: 'button',
					props: {
						onClick: (event) => {
							event.preventDefault();
						},
					},
					class: 'delete',
					text: 'Удалить',
				},
			],
			modalOpen: false,
			formattedDateCreated: '',
			formattedDateEdited: '',
			nameEdit: '',
			nameCreated: '',
		};
	},
	methods: {
		openModal() {
			this.modalOpen = true;
		},
	},
	mounted() {
		const dateCreated = new Date(this.project.dateCreated);
		const dateEdited = this.project.dateEdited ? new Date(this.project.dateEdited) : null;
		const { formattedDate, formattedDateEdited } = formatDate(dateCreated, dateEdited, this.months);

		this.formattedDateCreated = formattedDate;
		this.formattedDateEdited = formattedDateEdited;
	},
};
</script>
