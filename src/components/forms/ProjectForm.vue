<template>
	<div class="text-slate-900">

		<div class="mb-3">
			<label for="projectName" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
				<IdentificationIcon class="w-5 h-5" />
				Project name:
			</label>
			<input v-model="resume.projectStore.projectItem.project" placeholder="Project name" id="projectName" type="text" class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border">
		</div>

		<div class="mb-3">
			<label class="flex gap-1 items-center text-lg font-semibold mb-1">
				<DocumentTextIcon class="w-5 h-5" />
				Description:
			</label>
			<textarea v-model="resume.projectStore.projectItem.description" placeholder="Description of the project, what technologies were used" class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border h-40 resize-none"></textarea>
		</div>

		<div class="mb-3">
			<label class="flex gap-1 items-center text-lg font-semibold mb-1">
				<HashtagIcon class="w-5 h-5" />
				Add some relative tags :
			</label>
			<vue3-tags-input 
				:tags="resume.projectStore.projectItem.badges"
        placeholder="For example: html, css, js ets"
        @on-tags-changed="resume.projectStore.handleChangeTags"
				class=" border border-slate-900 rounded w-full focus:outline-none focus:shadow-border"
			/>
		</div>

		<div>
			<button v-if="!resume.projectStore.editData" class="global-btn" @click="resume.projectStore.addProjectData()">Add Project</button>
			<button v-else class="global-btn" @click="resume.projectStore.updateProjectData()">Edit</button>
		</div>

	</div>
</template>

<script setup>
import { useResumeStore } from '@/stores/resume.js'
import { IdentificationIcon, DocumentTextIcon, HashtagIcon } from '@heroicons/vue/24/outline'
import Vue3TagsInput from 'vue3-tags-input'

const resume = useResumeStore()

// const tags = ref([])

// const handleChangeTags = (val) => {
// 	tags.value = val
// }
</script>