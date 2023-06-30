<template>
	<div class="project-item__setting">
		<button
			@click="isOpen = !isOpen"
			:class="classBtn"
			class="setting-btn"
			data-path="project-item">
			<svg>
				<Icon></Icon>
			</svg>
		</button>
		<ul v-if="isOpen" :class="classList" data-target="project-item" class="setting-drop-down__list">
			<li class="drop-down__item">Редактировать</li>
			<li class="drop-down__item delete">Удалить</li>
		</ul>
	</div>
</template>

<script>
import Icon from '../Icon/Icon.vue';
import './style.scss'

export default {
	name: 'DropdownButton',
	components: {
		Icon,
	},
	data() {
		return {
			isOpen: false,
		};
	},
	computed: {
		classBtn() {
			if (this.isOpen) {
				return 'active';
			} else {
				return '';
			}
		},
		classList() {
			if (this.isOpen) {
				return 'open';
			} else {
				return '';
			}
		},
	},
};
</script>

