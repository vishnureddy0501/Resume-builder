<template>
	<div class="text-slate-900">

		<div class="mb-3">
			<label class="flex gap-1 items-center text-lg font-semibold mb-1">
				<WrenchIcon class="w-5 h-5" />
				Add your skills:
			</label>
			<vue3-tags-input 
				:tags="resume.moreStore.moreForm.skills"
        placeholder="What is your skills"
        @on-tags-changed="resume.moreStore.handleChangeSkills"
				@on-remove="resume.infoStore.removeSkill"
				class=" border border-slate-900 rounded w-full focus:outline-none focus:shadow-border"
			/>
		</div>

		<div class="mb-3">
			<label for="language" class="flex gap-1 items-center text-lg font-semibold mb-1">
				<LanguageIcon class="w-5 h-5" />
				Add your language:
			</label>
			<div class="flex flex-row gap-4 items-center">
				<div class="w-full">
					<select v-model="resume.moreStore.moreForm.select" class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border">
						<option selected disabled >Please select the level</option>
						<option v-for="item in LANGUAGES_LEVEL" :key="item.value" :value="item.value">{{ item.text }}</option>
					</select>
				</div>
				<div class="w-full relative">
					<input v-model="resume.moreStore.moreForm.language" id="language" type="text" class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border">
					<button @click="resume.moreStore.selectedResultLang()" class="absolute top-0 right-0 h-full px-2 bg-slate-600 rounded-e">
						<PlusIcon class="w-5 h-5 fill-white text-white" />
					</button>
				</div>
			</div>
		</div>

		<div class="mb-3">
			<label class="flex gap-1 items-center text-lg font-semibold mb-1">
				<PuzzlePieceIcon class="w-5 h-5" />
				Add your Interests:
			</label>
			<vue3-tags-input 
				:tags="resume.moreStore.moreForm.interests"
        placeholder="What are your interests"
        @on-tags-changed="resume.moreStore.handleChangeInterests"
				@on-remove="resume.infoStore.removeInterest"
				class=" border border-slate-900 rounded w-full focus:outline-none focus:shadow-border"
			/>
		</div>

	</div>
</template>

<script setup>
import { useResumeStore } from '@/stores/resume';
import { WrenchIcon, LanguageIcon, PlusIcon, PuzzlePieceIcon } from '@heroicons/vue/24/outline'
import Vue3TagsInput from 'vue3-tags-input'
import { LANGUAGES_LEVEL } from '@/constans'

const resume = useResumeStore()

</script>