<template>
	<div class="text-slate-900">

		<div class="mb-3">
			<label for="projectName" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
				<IdentificationIcon class="w-5 h-5" />
				Project name:
			</label>
			<input v-model="resume.projectStore.projectItem.project" placeholder="Project name" id="projectName" type="text" class="px-3 py-1 basic-input">
			<span v-for="error in v$.project.$errors" :key="error.$uid" class="text-red-400 text-xs leading-3">
				{{ error.$message }}
			</span>
		</div>

		<div class="mb-3">
			<label class="flex gap-1 items-center text-lg font-semibold mb-1">
				<DocumentTextIcon class="w-5 h-5" />
				Description:
			</label>
			<textarea v-model="resume.projectStore.projectItem.description" placeholder="Description of the project, what technologies were used" class="px-3 py-1 basic-input h-40 resize-none"></textarea>
			<span v-for="error in v$.description.$errors" :key="error.$uid" class="text-red-400 text-xs leading-3">
				{{ error.$message }}
			</span>
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
				class="basic-input"
			/>
		</div>

		<div>
			<button v-if="!resume.projectStore.editData" class="global-btn" @click="onAddProject()">Add Project</button>
			<button v-else class="global-btn" @click="onEditProject()">Edit</button>
		</div>

	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useResumeStore } from '@/stores/resume.js'
import { IdentificationIcon, DocumentTextIcon, HashtagIcon } from '@heroicons/vue/24/outline'
import Vue3TagsInput from 'vue3-tags-input'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const resume = useResumeStore()

// validation
const rules = computed(() => {
	return {
		project: { required },
		description: { required }
	}
})

const v$ = useVuelidate(rules, resume.projectStore.projectItem)

const onAddProject = async() => {
	const result = await v$.value.$validate()
	if(result) {
		resume.projectStore.addProjectData()
		v$.value.$reset()
	}
}
const onEditProject = async() => {
	const result = await v$.value.$validate()
	if(result) {
		resume.projectStore.updateProjectData()
		v$.value.$reset()
	}
}

</script>