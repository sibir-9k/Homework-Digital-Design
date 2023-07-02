<template>
	<div :class="classNameBlock">
		<button
			@click="isOpen = !isOpen"
			:class="classBtn + classNameButton"
			v-click-outside="onClickOutside"
			class="setting-btn"
			data-path="project-item">
			<img v-if="imgUser" src="@/assets/img/user.jpg" alt="" width="24" height="24" />
			<Icon :iconName="iconName"></Icon>
		</button>
		<ul v-if="isOpen" :class="classList" data-target="project-item" class="setting-drop-down__list">
			<li class="drop-down__item">
				<router-link :to="toLink()">
					{{ dropList[0] }}
				</router-link>
			</li>
			<li class="drop-down__item delete">{{ dropList[1] }}</li>
		</ul>
	</div>
</template>

<script>
import Icon from '../Icon/Icon.vue';
import vClickOutside from 'v-click-outside';
export default {
	name: 'DropdownButton',
	components: {
		Icon,
	},
	props: {
		imageName: {
			type: String,
		},
		dropList: {
			type: Array,
		},
		imgUser: {
			type: Boolean,
		},
		iconName: {
			type: String,
		},
		classNameBlock: {
			type: String,
		},
		classNameButton: {
			type: String,
		},
	},
	data() {
		return {
			isOpen: false,
			userImg: this.imgUser,
		};
	},
	computed: {
		classBtn() {
			if (this.isOpen) {
				return ' active ';
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
	methods: {
		onClickOutside() {
			this.isOpen = false;
		},
		toLink() {
			if (this.dropList[0] === 'Профиль') {
				return { path: '/profile' };
			} else if (this.dropList[0] === 'Редактировать') {
				return { path: '/' };
			}
		},
	},
	directives: {
		clickOutside: vClickOutside.directive,
	},
};
</script>
