<template>
	<div class="text-slate-900">

		<div class="flex flex-row gap-2 mb-5 justify-center">
			<button
				v-for="item in EDUCATION_TABS"
				:key="item"
				class="uppercase py-2 px-5 font-semibold bg-slate-200"
				:class="{ 'pointer-events-none bg-slate-400 text-white': item === currentTab }"
				@click.prevent="navigateEducation(item)"
			>
				{{ item }}
			</button>
		</div>

		<div v-if="currentTab === PAGE_EDUCATION">
			<div class="mb-3">
				<label for="schoolName" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
					<BuildingLibraryIcon class="w-5 h-5" />
					School Name:
				</label>
				<input v-model="resume.educationStore.educationItem.name" id="schoolName" type="text" class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border">
			</div>

			<div class="mb-3">
				<label for="school" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
					<AcademicCapIcon class="w-5 h-5" />
					School degree:
				</label>
				<input v-model="resume.educationStore.educationItem.degree" id="school" type="text" class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border">
			</div>

			<div class="mb-3">
				<label for="companyName" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
					<CalendarIcon class="w-5 h-5" />
					From - To:
				</label>
				<div class="flex flex-row gap-4 items-center">
					<div class="w-full">
						<VueDatePicker v-model="resume.educationStore.educationItem.startDate" month-picker :format-locale="enGB" format="MMMM yyyy" />
					</div>
					<div class="w-full">
						<VueDatePicker v-model="resume.educationStore.educationItem.endDate" month-picker :format-locale="enGB" format="MMMM yyyy" />
					</div>
				</div>
			</div>
		</div>

		<div v-else>
			<div class="mb-3">
				<label for="schoolNameCourse" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
					<BuildingLibraryIcon class="w-5 h-5" />
					School Name:
				</label>
				<input id="schoolNameCourse" type="text" class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border">
			</div>

			<div class="mb-3">
				<label for="course" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
					<AcademicCapIcon class="w-5 h-5" />
					Professional development, courses:
				</label>
				<input id="course" type="text" class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border">
			</div>

			<div class="mb-3">
				<label for="companyName" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
					<CalendarIcon class="w-5 h-5" />
					From - To:
				</label>
				<div class="flex flex-row gap-4 items-center">
					<div class="w-full">
						<VueDatePicker  month-picker :format-locale="enGB" format="MMMM yyyy" />
					</div>
					<div class="w-full">
						<VueDatePicker  month-picker :format-locale="enGB" format="MMMM yyyy" />
					</div>
				</div>
			</div>
		</div>

		<div>
			<button @click="onChangeClick()" class="global-btn">{{ changeTextForButton }}</button>
		</div>

	</div>
</template>

<script setup>
import { useResumeStore } from '@/stores/resume.js'
import { ref, computed } from 'vue'
import { AcademicCapIcon, BuildingLibraryIcon, CalendarIcon } from '@heroicons/vue/24/outline'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { enGB } from 'date-fns/locale'
import { EDUCATION_TABS, COURSES, PAGE_EDUCATION } from '../../constans'

const resume = useResumeStore()

const currentTab = ref(PAGE_EDUCATION)

function navigateEducation(tab) {
	currentTab.value = tab
}

const changeTextForButton = computed(() => {
	return currentTab.value === PAGE_EDUCATION ? 'Add Education' : 'Add Course'
})

function onChangeClick()  {
	return currentTab.value === PAGE_EDUCATION ? resume.educationStore.addEducationData() : console.log('TEST')
}

</script>