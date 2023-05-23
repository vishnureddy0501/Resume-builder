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
				class="basic-input"
			/>
		</div>

		<div class="mb-3">
			<label for="language" class="flex gap-1 items-center text-lg font-semibold mb-1">
				<LanguageIcon class="w-5 h-5" />
				Add your language:
			</label>
			<div class="flex flex-row gap-4">
				<div class="w-full">
					<select v-model="resume.moreStore.moreForm.select" class="px-3 py-1 basic-input">
						<option
							v-for="item in LANGUAGES_LEVEL"
							:key="item.value" :value="item.value"
							:disabled="item.disabled"
						>
							{{ item.text }}
						</option>
					</select>
					<span v-for="error in v$.select.$errors" :key="error.$uid" class="text-red-400 text-xs leading-3">
						{{ error.$message }}
					</span>
				</div>
				<div class="w-full">
					<div class="relative">
						<input v-model="resume.moreStore.moreForm.language" placeholder="Language" id="language" type="text" class="px-3 py-1 basic-input">
						<button @click="onSubmit()" class="absolute top-0 right-0 h-full px-2 bg-slate-600 rounded-e">
							<PlusIcon class="w-5 h-5 fill-white text-white" />
						</button>
					</div>
					<span v-for="error in v$.language.$errors" :key="error.$uid" class="text-red-400 text-xs leading-3">
						{{ error.$message }}
					</span>
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
				class="basic-input"
			/>
		</div>

	</div>
</template>

<script setup>
import { useResumeStore } from '@/stores/resume'
import { WrenchIcon, LanguageIcon, PlusIcon, PuzzlePieceIcon } from '@heroicons/vue/24/outline'
import Vue3TagsInput from 'vue3-tags-input'
import { LANGUAGES_LEVEL } from '@/constans'
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const resume = useResumeStore()

const rules = {
	language: { required },
	select: { required }
}

const v$ = useVuelidate(rules, resume.moreStore.moreForm)

const onSubmit = async() => {
	const result = await v$.value.$validate()
	if(result) {
		resume.moreStore.selectedResultLang()
		v$.value.$reset()
	}
}
</script>