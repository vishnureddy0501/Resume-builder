<template>
	<div class="text-slate-900">

		<div class="mb-3">
			<label for="role" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
				<UserCircleIcon class="w-5 h-5" />
				Add your role:
			</label>
			<input id="role" type="text" class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border">
		</div>

		<div class="mb-3">
			<label for="companyName" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
				<BuildingOffice2Icon class="w-5 h-5" />
				Add company name:
			</label>
			<input id="companyName" type="text" class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border">
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
					<VueDatePicker v-model="monthEnd" month-picker :format-locale="enGB" format="MMMM yyyy" v-if="!currentDate" />
					<p v-else>Current</p>
				</div>
			</div>
			<div class="flex items-center gap-2">
				<input v-model="currentDate" id="current" type="checkbox">
				<label for="current">Current</label>
			</div>
			<!-- <VueDatePicker v-model="date" range multi-calendars :enable-time-picker="false" :format-locale="enGB" format="PP" /> -->
		</div>

		<div class="mb-3">
			<label class="flex gap-1 items-center text-lg font-semibold mb-1">
				<DocumentTextIcon class="w-5 h-5" />
				Professional Summary:
			</label>
			<textarea class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border h-40 resize-none"></textarea>
		</div>

		<div>
			<button class="global-btn">Add Experience</button>
		</div>

	</div>
</template>

<script setup>
import { ref } from 'vue'
import { BuildingOffice2Icon, UserCircleIcon, CalendarIcon, DocumentTextIcon } from '@heroicons/vue/24/outline'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { enGB } from 'date-fns/locale'

// multi select date example
// вдруг пригодится, хули
// const date = ref();
// onMounted(() => {
//   const startDate = new Date();
//   const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
//   date.value = [startDate, endDate];
// })

const monthStart = ref({
  month: 0,
  year: 2023
});

const monthEnd= ref({
  month: new Date().getMonth(),
  year: new Date().getFullYear()
});

const currentDate = ref(false)


</script>