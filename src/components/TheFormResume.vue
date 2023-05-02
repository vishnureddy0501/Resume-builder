<template>
	<section class="">
		<div class="flex justify-between gap-1">
			<button
				v-for="btn in buttons"
				:key="btn"
				class="p-2 w-full uppercase font-semibold border-b-2 border-slate-600"
				:class="{ 'pointer-events-none bg-slate-400 text-white': btn === resume.tabsStore.currentPage }"
				@click.prevent="resume.tabsStore.navigate(btn)"
			>
				{{ btn }}
			</button
			>
		</div>

		<div>Content</div>
	</section>
</template>

<script setup>
import { useResumeStore } from '../stores/resume.js';

const resume = useResumeStore()

const buttons = ['info', 'experience', 'project', 'education', 'more']

</script>