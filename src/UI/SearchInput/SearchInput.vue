<template>
	<div class="input-group">
		<input type="text" class="" placeholder="Text" />
		<button class="btn-clear" type="button">
			<svg>
				<use xlink:href="#input-clear" />
			</svg>
		</button>
		<button class="btn-search" type="button">
      <svg>
				<use xlink:href="#input-search" />
			</svg>
    </button>
	</div>
</template>

<script>
import '@/assets/svg/input-clear.svg'
import '@/assets/svg/input-search.svg'
import './style.scss'
export default {
	name: 'SearchInput',
};
</script>

<style></style>
