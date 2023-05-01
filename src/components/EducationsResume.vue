<template>
	<div class="mb-6">
		<h2 class="text-slate-600 text-2xl font-semibold flex items-center gap-1 mb-2">
			<AcademicCapIcon class="w-8 h-8" />
			Educations
		</h2>
		<div
			v-for="item in educations"
			:key="item.id"
			class="rounded bg-slate-200 p-2 text-justify relative display-hover hover:bg-slate-300 mb-1"
		>
			<div class="hidden gap-2 absolute top-2 right-2 bg-slate-500 p-1 rounded display-hover__show">
				<PencilSquareIcon class="w-5 h-5 cursor-pointer fill-slate-100" />
				<XCircleIcon class="w-5 h-5 cursor-pointer fill-slate-100" />
			</div>
			<div class="flex justify-between mb-2">
				<h3 class="text-xl font-semibold">{{ item.title }}</h3>
				<p class="text-gray-500">{{ item.years }}</p>
			</div>
			<div>
				{{ item.about }}
			</div>
		</div>
	</div>
</template>

<script setup>
import { PencilSquareIcon, XCircleIcon } from '@heroicons/vue/24/solid'
import { AcademicCapIcon } from '@heroicons/vue/24/outline'

const educations = [
	{
		id: 1,
		title: 'Kozedub',
		years: 'Nov 2020 - Apr 2021',
		about: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit accusantium blanditiis, pariatur consequuntur cumque, veniam rerum reiciendis modi dignissimos ullam beatae saepe quos delectus ratione ad perferendis veritatis quod ipsa.'
	}
]

</script>

<style lang="scss">
.display-hover {

	&:hover &__show {
		display: flex;
	}
}
</style>