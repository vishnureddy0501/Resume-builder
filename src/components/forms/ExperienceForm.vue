<template>
	<div class="text-slate-900">

		<div class="mb-3">
			<label for="role" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
				<UserCircleIcon class="w-5 h-5" />
				Add your role:
			</label>
			<input v-model="resume.experienceStore.experienceForm.role" id="role" type="text" class="px-3 py-1 basic-input" placeholder="Your role">
			<span v-for="error in v$.role.$errors" :key="error.$uid" class="text-red-400 text-xs leading-3">
				{{ error.$message }}
			</span>
		</div>

		<div class="mb-3">
			<label for="companyName" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
				<BuildingOffice2Icon class="w-5 h-5" />
				Add company name:
			</label>
			<input v-model="resume.experienceStore.experienceForm.company" id="companyName" type="text" class="px-3 py-1 basic-input" placeholder="Company name">
			<span v-for="error in v$.company.$errors" :key="error.$uid" class="text-red-400 text-xs leading-3">
				{{ error.$message }}
			</span>
		</div>

		<div class="mb-3">
			<label for="companyName" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
				<CalendarIcon class="w-5 h-5" />
				From - To:
			</label>
			<div class="flex flex-row gap-4 items-center mb-3">
				<div class="w-full">
					<VueDatePicker v-model="resume.experienceStore.experienceForm.startDate" :clearable="false" month-picker :format-locale="enGB" format="MMMM yyyy" />
				</div>
				<div class="w-full">
					<VueDatePicker v-model="resume.experienceStore.experienceForm.endDate" :clearable="false" month-picker :format-locale="enGB" format="MMMM yyyy" v-if="!resume.experienceStore.currentDate" />
					<p v-else>Current</p>
				</div>
			</div>
			<div class="flex items-center gap-2">
				<MainCheckboxVue id="current" v-model:checked="resume.experienceStore.currentDate" label="Current" />
			</div>
			<!-- <VueDatePicker v-model="date" range multi-calendars :enable-time-picker="false" :format-locale="enGB" format="PP" /> -->
		</div>

		<div class="mb-3">
			<label class="flex gap-1 items-center text-lg font-semibold mb-1">
				<DocumentTextIcon class="w-5 h-5" />
				Professional Summary:
			</label>
			<textarea v-model="resume.experienceStore.experienceForm.description" placeholder="Professional Summary" class="px-3 py-1 basic-input h-40 resize-none"></textarea>
			<span v-for="error in v$.description.$errors" :key="error.$uid" class="text-red-400 text-xs leading-3">
				{{ error.$message }}
			</span>
		</div>

		<div>
			<button v-if="!resume.experienceStore.editData" class="global-btn" @click="onChangeExpierence()">Add Experience</button>
			<button v-else class="global-btn" @click="onEditExpierence()">Edit</button>
		</div>

	</div>
</template>

<script setup>
import { computed } from 'vue'
import MainCheckboxVue from '../MainCheckbox.vue'
import { useResumeStore } from '@/stores/resume.js'
import { BuildingOffice2Icon, UserCircleIcon, CalendarIcon, DocumentTextIcon } from '@heroicons/vue/24/outline'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { enGB } from 'date-fns/locale'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const resume = useResumeStore()


// validation
const rulesExperience = computed(() => {
	return {
		role: { required },
		company: { required },
		description: { required }
	}
})

const v$ = useVuelidate(rulesExperience, resume.experienceStore.experienceForm)


const onChangeExpierence = async() => {
	const result = await v$.value.$validate()
	if(result) {
		resume.experienceStore.addExperienceData()
		v$.value.$reset()
	}
}

const onEditExpierence = async() => {
	const result = await v$.value.$validate()
	if(result) {
		resume.experienceStore.updateExperienceData()
		v$.value.$reset()
	}
}


// multi select date example
// вдруг пригодится, хули
// const date = ref();
// onMounted(() => {
//   const startDate = new Date();
//   const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
//   date.value = [startDate, endDate];
// })

</script>