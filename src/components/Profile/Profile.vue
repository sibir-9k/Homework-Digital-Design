<template>
	<div class="profile">
		<div class="profile-image">
			<img src="@/assets/img/user-profile.jpg" alt="Image User" />
		</div>
		<div class="profile-info">
			<div class="profile-info__top">
				<div class="info-top">
					<h1 class="info-top__name">{{ userData.name }}</h1>
					<Status classNameStatus="info-top__status" :status="userData.status"></Status>
				</div>
				<button class="setting-btn" data-path="task-item">
					<svg>
						<use xlink:href="#dots" />
					</svg>
				</button>
			</div>
			<div class="profile-info__about">
				<div>О себе:</div>
				<p>
					{{userData.description}}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import Status from '@/UI/Status/Status.vue';
import './style.scss';
export default {
	components: { Status },
	props: {
		userData: Object,
	},
	mounted() {
		console.log(this.userData);
	},
};
</script>
