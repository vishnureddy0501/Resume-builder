<template>
	<div v-if="resume.infoStore.infoForm.aboutMe" class="mb-6">
		<h2 class="text-slate-600 text-2xl font-semibold flex items-center gap-1 mb-2">
			<PencilSquareIcon class="w-8 h-8 "/>
			Resume
		</h2>
		<div class="rounded bg-slate-200 p-2 text-justify relative group hover:bg-slate-300">
			{{ resume.infoStore.infoForm.aboutMe }}
		</div>
	</div>
</template>

<script setup>
import { PencilSquareIcon, XCircleIcon } from '@heroicons/vue/24/solid'
import { useResumeStore } from '@/stores/resume.js'

const resume = useResumeStore()

</script>