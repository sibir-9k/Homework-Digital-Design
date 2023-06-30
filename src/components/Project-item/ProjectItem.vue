<template>
	<div class="project-item">
		<div class="project-item__container">
			<div class="project-item__block">
				<div class="item-block__header">
					<p class="header-message">Название</p>
				</div>
				<div class="item-block__footer">
					<div class="footer-author">
						#{{ project.id }}
						<span class="footer-author__name"
							>{{ project.user }} создал {{ project.dataCreate }}</span
						>
					</div>
					<div class="footer__block-right">
						<div class="footer__editor">
							<span class="footer-author__name"
								>{{ project.editor }} изменил {{ project.dateEdited }}</span
							>
						</div>
					</div>
				</div>
			</div>
		</div>
    <DropdownButton></DropdownButton>
	</div>
</template>

<script>
import '@/utils/drop-down.js';
import '@/assets/svg/dots.svg';
import './style.scss';
import DropdownButton from '@/UI/DropdownButton/DropdownButton.vue';
export default {
	name: 'ProjectItem',
  components:{
    DropdownButton
  },
	props: {
		project: {
			type: Object,
		},
	},
};
</script>

<style></style>
