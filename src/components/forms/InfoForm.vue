<template>
	<div class="text-slate-900">

		<div class="mb-3">
			<label for="name" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
				<IdentificationIcon class="w-5 h-5" />
				Full Name:
			</label>
			<input v-model="resume.infoStore.infoForm.fullName" id="name" type="text" class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border">
		</div>

		<div class="mb-3">
			<label for="jobTitle" class="flex gap-1 items-center text-lg font-semibold mb-1">
				<BriefcaseIcon class="w-5 h-5" />
				Job Title:
			</label>
			<input id="jobTitle" type="text" class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border">
		</div>

		<div class="mb-3 flex gap-4">
			<div class="w-full">
				<label for="phone" class="flex gap-1 items-center text-lg font-semibold mb-1">
					<PhoneIcon class="w-5 h-5" />
					Phone:
				</label>
				<input id="phone" type="number" class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border">
			</div>
			<div class="w-full">
				<label for="email" class="flex gap-1 items-center text-lg font-semibold mb-1">
					<AtSymbolIcon class="w-5 h-5" />
					Email:
				</label>
				<input id="email" type="email" class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border">
			</div>
		</div>

		<div class="mb-3">
			<label for="jobTitle" class="flex gap-1 items-center text-lg font-semibold mb-1">
				<LinkIcon class="w-5 h-5" />
				Add your links:
			</label>
			<vue3-tags-input 
				:tags="resume.infoStore.infoForm.tags"
        placeholder="Enter your links"
        @on-tags-changed="resume.infoStore.handleChangeSite"
				class=" border border-slate-900 rounded w-full focus:outline-none focus:shadow-border"
			/>
		</div>

		<div class="mb-3">
			<label class="flex gap-1 items-center text-lg font-semibold mb-1">
				<GlobeAltIcon class="w-5 h-5" />
				Add your social media:
			</label>
			<div class="flex flex-row gap-4 items-center">
				<div class="w-full">
					<select class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border">
						<option selected disabled >Select your social media</option>
						<option v-for="item in SOCIAL_LIST" :key="item.value">{{ item.text }}</option>
					</select>
				</div>
				<div class="w-full relative">
					<input type="text" class="pl-3 pr-10 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border">
					<button class="absolute top-0 right-0 h-full px-2 bg-slate-600 rounded-e">
						<PlusIcon class="w-5 h-5 fill-white" />
					</button>
				</div>
			</div>
		</div>

		<div class="mb-3">
			<label class="flex gap-1 items-center text-lg font-semibold mb-1">
				<DocumentTextIcon class="w-5 h-5" />
				Professional Summary:
			</label>
			<textarea class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border h-40 resize-none"></textarea>
		</div>

	</div>
</template>

<script setup>
import { IdentificationIcon, BriefcaseIcon, PhoneIcon, AtSymbolIcon, LinkIcon, GlobeAltIcon, DocumentTextIcon } from '@heroicons/vue/24/outline';
import { useResumeStore } from '@/stores/resume.js';
import Vue3TagsInput from 'vue3-tags-input';
import { SOCIAL_LIST } from '@/constans'
import { PlusIcon } from '@heroicons/vue/24/solid';

const resume = useResumeStore()

</script>

<style>
.v3ti .v3ti-tag {
	background: rgb(71,85,105);
}
</style>