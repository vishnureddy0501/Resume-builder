<template>
	<TheHeader />
	<main class="px-4 pt-5">
		<div class="-mx-4 flex flex-row">
			<TheFormResume class="w-2/6 px-4" />
			<TheResume class="w-4/6 px-4" />
		</div>
	</main>
</template>

<script setup>
import TheFormResume from './components/TheFormResume.vue';
import TheResume from './components/TheResume.vue';
import TheHeader from './layouts/TheHeader.vue';

</script>