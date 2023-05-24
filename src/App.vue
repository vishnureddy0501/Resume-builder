<template>
	<TheHeader class="hidden-print" />
	<main class="py-5 2xl:container px-4 m-auto text-sm">
		<div class="-mx-4 flex flex-row">
			<TheFormResume class="w-2/6 pl-4 pr-8 hidden-print" />
			<TheResume class="w-4/6 pr-4 leading-4" />
		</div>
	</main>
</template>

<script setup>
import TheFormResume from './components/TheFormResume.vue'
import TheResume from './components/TheResume.vue'
import TheHeader from './layouts/TheHeader.vue'

</script>