<template>
	<div class="project-item__setting">
		<button class="setting-btn" data-path="project-item">
			<svg>
				<Icon></Icon>
			</svg>
		</button>
		<ul data-target="project-item" class="setting-drop-down__list">
			<li class="drop-down__item">Редактировать</li>
			<li class="drop-down__item delete">Удалить</li>
		</ul>
	</div>
</template>

<script>
import Icon from '../Icon/Icon.vue';

export default {
	name: 'DropdownButton',
  components:{
    Icon
  },
	props: {
		imageName: {
			type: String,
		},
	},
};
</script>

<style></style>
