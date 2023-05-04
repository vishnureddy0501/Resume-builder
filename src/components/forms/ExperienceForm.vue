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
			<VueDatePicker v-model="date" range multi-calendars :enable-time-picker="false" :format-locale="enGB" format="PP" />
		</div>

	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { BuildingOffice2Icon, UserCircleIcon, CalendarIcon } from '@heroicons/vue/24/outline'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { enGB } from 'date-fns/locale'

const date = ref();



onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
})


</script>