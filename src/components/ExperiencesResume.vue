<template>
	<div class="mb-6">
		<h2 class="text-slate-600 text-2xl font-semibold flex items-center gap-1 mb-2">
			<ClipboardDocumentListIcon class="w-8 h-8" />
			Experiences
		</h2>
		<div
			v-for="(item, index) in resume.experienceStore.experienceForms"
			:key="index"
			class="rounded bg-slate-200 p-2 text-justify relative display-hover hover:bg-slate-300 mb-1"
		>
			<div class="hidden gap-2 absolute top-2 right-2 bg-slate-500 p-1 rounded display-hover__show">
				<PencilSquareIcon class="w-5 h-5 cursor-pointer fill-slate-100" />
				<XCircleIcon class="w-5 h-5 cursor-pointer fill-slate-100" />
			</div>
			<div class="flex justify-between mb-2">
				<div>
					<h3 class="text-xl font-semibold">{{ item.role }}</h3>
					<p class="text-gray-500">{{ item.company }}</p>
				</div>
				<p class="text-gray-500">{{ isShowEndDate(item) }}</p>
			</div>
			<div>
				{{ item.description }}
			</div>
		</div>
	</div>
</template>

<script setup>
import { PencilSquareIcon, XCircleIcon } from '@heroicons/vue/24/solid'
import { ClipboardDocumentListIcon } from '@heroicons/vue/24/outline'
import { useResumeStore } from '@/stores/resume.js'
import { MONTH_ARRAY } from '../constans'
console.log(MONTH_ARRAY)

const resume = useResumeStore()

function isShowEndDate(item) {
	if (!item.current) {
		return `${MONTH_ARRAY[item.startDate.month]} ${item.startDate.year} - ${MONTH_ARRAY[item.endDate.month]} ${item.endDate.year}`
	}
	return `${MONTH_ARRAY[item.startDate.month]} ${item.startDate.year} - Up to now`
}

</script>

<style lang="scss">
.display-hover {

	&:hover &__show {
		display: flex;
	}
}
</style>