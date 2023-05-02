<template>
	<section class="">
		<div class="flex justify-between gap-1">
			<button
				v-for="btn in TAB_ITEMS"
				:key="btn"
				class="p-2 w-full uppercase font-semibold border-b-2 border-slate-600"
				:class="{ 'pointer-events-none bg-slate-400 text-white': btn === resume.tabsStore.currentPage }"
				@click.prevent="resume.tabsStore.navigate(btn)"
			>
				{{ btn }}
			</button
			>
		</div>

		<div class="pt-6 pb-2">
			<InfoForm v-show="resume.tabsStore.currentPage === PAGE_INFO" />
			<ExperienceForm v-show="resume.tabsStore.currentPage === PAGE_EXPERIENCE" />
			<ProjectForm v-show="resume.tabsStore.currentPage === PAGE_PROGECT" />
			<EducationForm v-show="resume.tabsStore.currentPage === PAGE_EDUCATION" />
			<MoreForm v-show="resume.tabsStore.currentPage === PAGE_MORE" />
		</div>
	</section>
</template>

<script setup>
import { useResumeStore } from '../stores/resume.js';
import { TAB_ITEMS, PAGE_INFO, PAGE_EXPERIENCE, PAGE_PROGECT, PAGE_EDUCATION, PAGE_MORE  } from '../constans'
import EducationForm from './forms/EducationForm.vue';
import ExperienceForm from './forms/ExperienceForm.vue'
import InfoForm from './forms/InfoForm.vue';
import MoreForm from './forms/MoreForm.vue';
import ProjectForm from './forms/ProjectForm.vue';

const resume = useResumeStore()

</script>