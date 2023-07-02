<template>
	<div>
		<select :class="className">
			<option disabled value="">Please select one</option>
			<option>{{ option1 }}</option>
			<option>{{ option2 }}</option>
			<option>{{ option3 }}</option>
			<option>{{ option4 }}</option>
		</select>
	</div>
</template>

<script>
import '@/assets/svg/filter-arrow-up.svg';
import './style.scss';
export default {
	name: 'Select',
	props: ['option1', 'option2', 'option3', 'option4', 'className'],
};
</script>
