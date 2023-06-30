<template>
	<div class="select-block">
		<select>
			<option disabled value="">Please select one</option>
			<option>A</option>
			<option>B</option>
			<option>C</option>
		</select>
		<button>
      <svg>
        <use xlink:href="#filter-arrow-up" />
      </svg>
    </button>
	</div>
</template>

<script>
import '@/assets/svg/filter-arrow-up.svg'
import './style.scss';
export default {
	name: 'Select',
};
</script>
