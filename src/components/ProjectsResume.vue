<template>
	<div class="mb-6" v-if="resume.projectStore.projectData.length > 0">
		<h2 class="text-slate-600 text-2xl font-semibold flex items-center gap-1 mb-2">
			<BugAntIcon class="w-8 h-8" />
			Projects
		</h2>
		<div
			v-for="(item, index) in resume.projectStore.projectData"
			:key="index"
			class="rounded bg-slate-200 p-2 text-justify relative group hover:bg-slate-300 mb-3"
		>
			<div class="hidden gap-2 absolute top-2 right-2 bg-slate-500 p-1 rounded group-hover:flex">
				<PencilSquareIcon class="w-5 h-5 cursor-pointer fill-slate-100" @click="resume.projectStore.editProject(item)" />
				<XCircleIcon class="w-5 h-5 cursor-pointer fill-slate-100" @click="resume.projectStore.deleteProjectData(item)" />
			</div>
			<h3 class="text-xl font-semibold mb-2">{{ item.project }}</h3>
			<div>
				<p class="mb-2">{{ item.description }}</p>
				<ul class="flex flex-wrap gap-2">
					<li v-for="(badge, i) in item.badges" :key="i" class="px-1 bg-slate-600 rounded text-white"> {{ badge }} </li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script setup>
import { useResumeStore } from '@/stores/resume.js'
import { PencilSquareIcon, XCircleIcon } from '@heroicons/vue/24/solid'
import { BugAntIcon } from '@heroicons/vue/24/outline'

const resume = useResumeStore()

</script>