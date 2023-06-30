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
			<div class="user-block">
				<button class="user-img setting-btn" data-path="user">
					<img src="@/assets/img/user.jpg" alt="" width="24" height="24" />
					<svg>
						<use xlink:href="#arrow-down" />
					</svg>
				</button>
				<ul data-target="user" class="setting-drop-down__list">
					<li class="drop-down__item">Профиль</li>
					<li class="drop-down__item">Выход</li>
				</ul>
			</div>
		</nav>
	</header>
</template>

<script>
import '@/UI/Button/Button.vue'
import '@/assets/svg/arrow-down.svg'
import './style.scss'

export default {
  name:'Navigation'
};
</script>


