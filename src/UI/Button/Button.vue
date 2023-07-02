<template>
	<button :class="btnClassName">
		{{ btnName }}
	</button>
</template>

<script>
export default {
	name: 'Button',
  props:{
    btnName:{
      type: String
    },
    btnClassName:{
      type: String
    }
  }
};
</script>
