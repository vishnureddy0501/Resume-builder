<template>
	<section class="flex flex-row text-white bg-white" id="resume">
		<AsideResume class="w-4/12 px-3 bg-slate-600" />
		<MainResume class="w-8/12 pl-6 pr-3 pt-8 text-slate-900" />
		<button class="rounded-lg bg-slate-900 p-2 fixed bottom-5 right-5" @click="printResume()">
			<DocumentArrowDownIcon class="w-7 h-7"/>
		</button>
	</section>
</template>

<script setup>
import { useResumeStore } from '@/stores/resume'
import AsideResume from './AsideResume.vue'
import MainResume from './MainResume.vue'

import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import { DocumentArrowDownIcon } from '@heroicons/vue/24/outline'

const resume = useResumeStore()

function printResume() {
	document.getElementById('resume').setAttribute("style","width:1000px");

	const filename = `${resume.infoStore.infoForm.fullName} Resume.pdf`
	const a4Width  = 210.0015555555555  // paper Standard Width
	const a4Height = 297.0000833333333 // paper Standard Height
	const divWidth = document.getElementById('resume').offsetWidth

	console.log(filename)
}

</script>