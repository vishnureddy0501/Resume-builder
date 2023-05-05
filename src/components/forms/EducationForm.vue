<template>
	<div class="text-slate-900">

		<div class="mb-3">
			<label for="schoolName" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
				<BuildingLibraryIcon class="w-5 h-5" />
				School Name:
			</label>
			<input id="schoolName" type="text" class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border">
		</div>

		<div class="mb-3">
			<label for="school" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
				<AcademicCapIcon class="w-5 h-5" />
				School degree:
			</label>
			<input id="school" type="text" class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border">
		</div>

		<div class="mb-3">
			<label for="companyName" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
				<CalendarIcon class="w-5 h-5" />
				From - To:
			</label>
			<div class="flex flex-row gap-4 items-center">
				<div class="w-full">
					<VueDatePicker v-model="monthStart" month-picker :format-locale="enGB" format="MMMM yyyy" />
				</div>
				<div class="w-full">
					<VueDatePicker v-model="monthEnd" month-picker :format-locale="enGB" format="MMMM yyyy" />
				</div>
			</div>
		</div>

		<div>
			<button class="global-btn">Add Education</button>
		</div>

	</div>
</template>

<script setup>
import { ref } from 'vue'
import { AcademicCapIcon, BuildingLibraryIcon, CalendarIcon } from '@heroicons/vue/24/outline'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { enGB } from 'date-fns/locale'

const monthStart = ref({
  month: 0,
  year: 2023
});

const monthEnd= ref({
  month: new Date().getMonth(),
  year: new Date().getFullYear()
});

</script>