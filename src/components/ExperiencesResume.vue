<template>
	<div class="mb-6">
		<h2 class="text-slate-600 text-2xl font-semibold flex items-center gap-1 mb-2">
			<ClipboardDocumentListIcon class="w-8 h-8" />
			Experiences
		</h2>
		<div class="rounded bg-slate-200 p-2 text-justify relative display-hover hover:bg-slate-300">
			<div class="hidden gap-2 absolute top-2 right-2 bg-slate-500 p-1 rounded display-hover__show">
				<PencilSquareIcon class="w-5 h-5 cursor-pointer fill-slate-100" />
				<XCircleIcon class="w-5 h-5 cursor-pointer fill-slate-100" />
			</div>
			<div class="flex justify-between mb-2">
				<div>
					<h3 class="text-xl font-semibold">FrontEnd Developer</h3>
					<p class="text-gray-500">Company Name</p>
				</div>
				<p class="text-gray-500">Nov 2020 - Apr 2021</p>
			</div>
			<div>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit accusantium blanditiis, pariatur consequuntur cumque, veniam rerum reiciendis modi dignissimos ullam beatae saepe quos delectus ratione ad perferendis veritatis quod ipsa.
			</div>
		</div>
	</div>
</template>

<script setup>
import { ClipboardDocumentListIcon, PencilSquareIcon, XCircleIcon } from '@heroicons/vue/24/solid'

</script>

<style lang="scss">
.display-hover {

	&:hover &__show {
		display: flex;
	}
}
</style>