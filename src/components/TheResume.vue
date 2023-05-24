<template>
	<section class="flex flex-row text-white bg-white print" id="resume">
		<AsideResume class="w-4/12 px-3 bg-slate-600" id="resumeSide" />
		<MainResume class="w-8/12 pl-6 pr-3 pt-2 text-slate-900" />
		<button class="rounded-lg bg-slate-900 p-2 fixed bottom-5 right-5 hidden-print" @click="printResume()">
			<DocumentArrowDownIcon class="w-7 h-7"/>
		</button>
	</section>
</template>

<script setup>
import AsideResume from './AsideResume.vue'
import MainResume from './MainResume.vue'

import { DocumentArrowDownIcon } from '@heroicons/vue/24/outline'


function printResume() {
	const resumeCV = document.getElementById('resume')
	const body = document.querySelector('body')
	const resumeSide = document.getElementById('resumeSide')
	const a4Height = 297 // paper Standard Height

	body.setAttribute("style","background: white")
	resumeCV.setAttribute("style","width:1000px")

	resumeSide.setAttribute("style","min-height:" + a4Height + "mm")

	window.print()

	removeStyles([resumeSide, resumeCV, body])
}

function removeStyles(elements) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].removeAttribute('style');
  }
}

</script>