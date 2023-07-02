<template>
	<div class="filter-search">
		<search-input></search-input>
		<div class="filter-search__select-block ">
			<Select></Select>
			<button class="filter-search__btn">
				<Icon iconName="filter-arrow-up"></Icon>
			</button>
		</div>
		<router-link to="/create-task" class="filter-search__add-task">Добавить</router-link>
	</div>
</template>

<script>
import SearchInput from '@/UI/SearchInput/SearchInput.vue';
import Select from '@/UI/Select/Select.vue';
import Icon from '@/UI/Icon/Icon.vue';
import './style.scss';
export default {
	name: 'FilterSearch',
	components: {
		SearchInput,
		Select,
		Icon,
	},
};
</script>
