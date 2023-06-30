<template>
	<div class="filter-search">
		<search-input></search-input>
		<Select></Select>
    <button>Добавить</button>
	</div>
</template>

<script>
import SearchInput from '@/UI/SearchInput/SearchInput.vue';
import Select from '@/UI/Select/Select.vue';
import './style.scss'
export default {
	name: 'FilterSearch',
	components: {
		SearchInput,
		Select,
	},
};
</script>
