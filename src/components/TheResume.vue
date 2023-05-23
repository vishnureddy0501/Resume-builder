<template>
	<section class="flex flex-row text-white bg-white" id="resume">
		<AsideResume class="w-4/12 px-3 bg-slate-600" />
		<MainResume class="w-8/12 pl-6 pr-3 pt-8 text-slate-900" />
	</section>
</template>

<script setup>
import { onMounted } from 'vue'
import AsideResume from './AsideResume.vue'
import MainResume from './MainResume.vue'

onMounted(() => {
	console.log(document.getElementById('resume'))
})
</script>