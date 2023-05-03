<template>
	<div class="pt-8 mb-6">
		<h2 class="text-slate-600 text-2xl font-semibold flex items-center gap-1 mb-2">
			<PencilSquareIcon class="w-8 h-8 "/>
			Resume
		</h2>
		<div class="rounded bg-slate-200 p-2 text-justify relative display-hover hover:bg-slate-300">
			<div class="hidden gap-2 absolute top-2 right-2 bg-slate-500 p-1 rounded display-hover__show">
				<PencilSquareIcon class="w-5 h-5 cursor-pointer fill-slate-100" />
				<XCircleIcon class="w-5 h-5 cursor-pointer fill-slate-100" />
			</div>
			{{ resume.infoStore.infoForm.aboutMe }}
		</div>
	</div>
</template>

<script setup>
import { PencilSquareIcon, XCircleIcon } from '@heroicons/vue/24/solid'
import { useResumeStore } from '@/stores/resume.js'

const resume = useResumeStore()

</script>

<style lang="scss">
.display-hover {

	&:hover &__show {
		display: flex;
	}
}
</style>