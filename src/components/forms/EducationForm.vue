<template>
	<div class="text-slate-900">

		<div class="flex flex-row gap-2 mb-5 justify-center">
			<button
				v-for="item in EDUCATION_TABS"
				:key="item"
				class="uppercase py-2 px-5 font-semibold bg-slate-200"
				:class="{ 'pointer-events-none bg-slate-400 text-white': item === resume.tabsStore.currentEducationTab }"
				@click.prevent="resume.tabsStore.navigateEducation(item)"
			>
				{{ item }}
			</button>
		</div>

		<div v-if="resume.tabsStore.currentEducationTab === PAGE_EDUCATION">
			<div class="mb-3">
				<label for="schoolName" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
					<BuildingLibraryIcon class="w-5 h-5" />
					School Name:
				</label>
				<input v-model="resume.educationStore.educationItem.name" placeholder="School name" id="schoolName" type="text" class="px-3 py-1 basic-input">
				<span v-for="error in v$.name.$errors" :key="error.$uid" class="text-red-400 text-xs leading-3">
					{{ error.$message }}
				</span>
			</div>

			<div class="mb-3">
				<label for="school" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
					<AcademicCapIcon class="w-5 h-5" />
					School degree:
				</label>
				<input v-model="resume.educationStore.educationItem.degree" placeholder="School degree" id="school" type="text" class="px-3 py-1 basic-input">
				<span v-for="error in v$.degree.$errors" :key="error.$uid" class="text-red-400 text-xs leading-3">
					{{ error.$message }}
				</span>
			</div>

			<div class="mb-3">
				<label for="companyName" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
					<CalendarIcon class="w-5 h-5" />
					From - To:
				</label>
				<div class="flex flex-row gap-4 items-center">
					<div class="w-full">
						<VueDatePicker v-model="resume.educationStore.educationItem.startDate" month-picker :format-locale="enGB" format="MMMM yyyy" :clearable="false" />
					</div>
					<div class="w-full">
						<VueDatePicker v-model="resume.educationStore.educationItem.endDate" month-picker :format-locale="enGB" format="MMMM yyyy" :clearable="false" />
					</div>
				</div>
			</div>

			<div>
				<button v-if="!resume.educationStore.editData" @click="onCheckEducation(resume.educationStore.addEducationData)" class="global-btn">Add Education</button>
				<button v-else class="global-btn" @click="onCheckEducation(resume.educationStore.updateEducationData)">Edit</button>
			</div>
		</div>

		<div v-else>
			<div class="mb-3">
				<label for="schoolNameCourse" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
					<BuildingLibraryIcon class="w-5 h-5" />
					School Name:
				</label>
				<input v-model="resume.courseStore.courseItem.name" placeholder="School name" id="schoolNameCourse" type="text" class="px-3 py-1 basic-input">
				<span v-for="error in b$.name.$errors" :key="error.$uid" class="text-red-400 text-xs leading-3">
					{{ error.$message }}
				</span>
			</div>

			<div class="mb-3">
				<label for="course" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
					<AcademicCapIcon class="w-5 h-5" />
					Professional development, courses:
				</label>
				<input v-model="resume.courseStore.courseItem.degree" placeholder="Your courses" id="course" type="text" class="px-3 py-1 basic-input">
				<span v-for="error in b$.degree.$errors" :key="error.$uid" class="text-red-400 text-xs leading-3">
					{{ error.$message }}
				</span>
			</div>

			<div class="mb-3">
				<label for="companyName" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
					<CalendarIcon class="w-5 h-5" />
					From - To:
				</label>
				<div class="flex flex-row gap-4 items-center">
					<div class="w-full">
						<VueDatePicker v-model="resume.courseStore.courseItem.startDate" month-picker :format-locale="enGB" format="MMMM yyyy" :clearable="false" />
					</div>
					<div class="w-full">
						<VueDatePicker v-model="resume.courseStore.courseItem.endDate" month-picker :format-locale="enGB" format="MMMM yyyy" :clearable="false" />
					</div>
				</div>
			</div>

			<div>
				<button v-if="!resume.courseStore.editData" @click="onCheckCourses(resume.courseStore.addCourseData)" class="global-btn">Add Course</button>
				<button v-else class="global-btn" @click="onCheckCourses(resume.courseStore.updateCourseData)">Edit</button>
			</div>
		</div>

	</div>
</template>

<script setup>
import { computed } from 'vue'
import { useResumeStore } from '@/stores/resume.js'
import { AcademicCapIcon, BuildingLibraryIcon, CalendarIcon } from '@heroicons/vue/24/outline'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { enGB } from 'date-fns/locale'
import { EDUCATION_TABS, PAGE_EDUCATION } from '../../constans'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const resume = useResumeStore()

// validation
const rules = computed(() => {
	return {
		name: { required },
		degree: { required }
	}
})

const v$ = useVuelidate(rules, resume.educationStore.educationItem)
const b$ = useVuelidate(rules, resume.courseStore.courseItem)

const onCheckEducation = async(nameFunction) => {
	const result = await v$.value.$validate()
	if(result) {
		nameFunction()
		v$.value.$reset()
	}
}

const onCheckCourses = async(nameFunction) => {
	const result = await b$.value.$validate()
	if(result) {
		nameFunction()
		b$.value.$reset()
	}
}

</script>