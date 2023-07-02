<template>
	<header>
		<nav class="navigation">
			<ul class="navigation__list">
				<li class="navigation__item">
					<router-link to="/" class="nav-btn">Проекты</router-link>
				</li>
				<li class="navigation__item">
					<router-link to="tasks" class="nav-btn">Задачи</router-link>
				</li>
				<li class="navigation__item">
					<button class="nav-btn">Пользователи</button>
				</li>
			</ul>
			<DropdownButton
				:imgUser="true"
				:dropList="dropList"
				iconName="arrow-down"
				classNameBlock="user-block"
				classNameButton="user-img"></DropdownButton>
		</nav>
	</header>
</template>

<script>
import '@/UI/Button/Button.vue';
import '@/assets/svg/arrow-down.svg';
import Icon from '@/UI/Icon/Icon.vue';
import DropdownButton from '@/UI/DropdownButton/DropdownButton.vue';
import './style.scss';

export default {
	name: 'Navigation',
	components: {
		Icon,
		DropdownButton,
	},
	data() {
		return {
			dropList: ['Профиль', 'Выход'],
		};
	},
};
</script>
