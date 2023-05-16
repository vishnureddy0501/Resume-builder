<template>
	<div class="text-slate-900">

		<div class="mb-3">
			<label for="name" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
				<IdentificationIcon class="w-5 h-5" />
				Full Name:
			</label>
			<input v-model="resume.infoStore.infoForm.fullName" @blur="onChangeInput" id="name" type="text" class="basic-input px-3 py-1" placeholder="Your full name" />
			<span v-for="error in v$.fullName.$errors" :key="error.$uid" class="text-red-400 text-xs leading-3">
				{{ error.$message }}
			</span>
		</div>

		<div class="mb-3">
			<label for="jobTitle" class="flex gap-1 items-center text-lg font-semibold mb-1">
				<BriefcaseIcon class="w-5 h-5" />
				Job Title:
			</label>
			<input v-model="resume.infoStore.infoForm.jobTitle" @blur="onChangeInput" id="jobTitle" type="text" class="basic-input px-3 py-1" placeholder="Your job title">
			<span v-for="error in v$.jobTitle.$errors" :key="error.$uid" class="text-red-400 text-xs leading-3">
				{{ error.$message }}
			</span>
		</div>

		<div class="mb-3 flex gap-4">
			<div class="w-full">
				<label for="phone" class="flex gap-1 items-center text-lg font-semibold mb-1">
					<PhoneIcon class="w-5 h-5" />
					Phone:
				</label>
				<input v-model="resume.infoStore.infoForm.phone" @blur="onChangeInput" id="phone" type="text" class="basic-input px-3 py-1" placeholder="Your phone number">
				<span v-for="error in v$.phone.$errors" :key="error.$uid" class="text-red-400 text-xs leading-3">
					{{ error.$message }}
				</span>
			</div>
			<div class="w-full">
				<label for="email" class="flex gap-1 items-center text-lg font-semibold mb-1">
					<AtSymbolIcon class="w-5 h-5" />
					Email:
				</label>
				<input v-model="resume.infoStore.infoForm.mail" @blur="onChangeInput" id="email" type="email" class="basic-input px-3 py-1" placeholder="Your E-mail">
				<span v-for="error in v$.mail.$errors" :key="error.$uid" class="text-red-400 text-xs leading-3">
					{{ error.$message }}
				</span>
			</div>
		</div>

		<div class="mb-3">
			<label class="flex gap-1 items-center text-lg font-semibold mb-1">
				<LinkIcon class="w-5 h-5" />
				Add your links:
			</label>
			<vue3-tags-input 
				:tags="resume.infoStore.infoForm.tags"
        placeholder="Enter your links"
        @on-tags-changed="resume.infoStore.handleChangeSite"
				@on-remove="resume.infoStore.removeTag"
				class=" border border-slate-900 rounded w-full focus:outline-none focus:shadow-border"
			/>
		</div>

		<div class="mb-3">
			<label for="socials" class="flex gap-1 items-center text-lg font-semibold mb-1">
				<GlobeAltIcon class="w-5 h-5" />
				Add your social media:
			</label>
			<div class="flex flex-row gap-4">
				<div class="w-full">
					<select v-model="resume.infoStore.infoForm.select" class="basic-input px-3 py-1">
						<!-- <option selected disabled value="null"></option> -->
						<option v-for="item in SOCIAL_LIST" :key="item.value" :value="item.value" :disabled="item.disabled">{{ item.text }}</option>
					</select>
					<span v-for="error in t$.select.$errors" :key="error.$uid" class="text-red-400 text-xs leading-3">
						{{ error.$message }}
					</span>
				</div>
				<div class="w-full">
					<div class="relative">
						<input v-model="resume.infoStore.infoForm.socialMedia" id="socials" type="text" class="pl-3 pr-10 py-1 basic-input" placeholder="Your pseudo/nickname">
						<button class="absolute top-0 right-0 h-full px-2 bg-slate-600 rounded-e" @click="onSubmit()">
							<PlusIcon class="w-5 h-5 fill-white" />
						</button>
					</div>
					<span v-for="error in t$.socialMedia.$errors" :key="error.$uid" class="text-red-400 text-xs leading-3">
						{{ error.$message }}
					</span>
				</div>
			</div>
		</div>

		<div class="mb-3">
			<label class="flex gap-1 items-center text-lg font-semibold mb-1">
				<DocumentTextIcon class="w-5 h-5" />
				Description:
			</label>
			<textarea v-model="resume.infoStore.infoForm.aboutMe" class="basic-input px-3 py-1 h-40 resize-none"></textarea>
			<span v-for="error in v$.aboutMe.$errors" :key="error.$uid" class="text-red-400 text-xs leading-3">
				{{ error.$message }}
			</span>
		</div>

	</div>
</template>

<script setup>
import { IdentificationIcon, BriefcaseIcon, PhoneIcon, AtSymbolIcon, LinkIcon, GlobeAltIcon, DocumentTextIcon } from '@heroicons/vue/24/outline'
import { useResumeStore } from '@/stores/resume.js'
import Vue3TagsInput from 'vue3-tags-input'
import { SOCIAL_LIST } from '@/constans'
import { PlusIcon } from '@heroicons/vue/24/solid'
import { useVuelidate } from '@vuelidate/core'
import { required, email, numeric } from '@vuelidate/validators'

const resume = useResumeStore()


const rules = {
	fullName: { required },
	jobTitle: { required },
	mail: { required, email },
	phone: { required, numeric },
	aboutMe: { required }
}

const ruleSelect = {
	socialMedia: { required },
	select: { required }
}

const t$ = useVuelidate(ruleSelect, resume.infoStore.infoForm)
const v$ = useVuelidate(rules, resume.infoStore.infoForm)

const onChangeInput = async() => {
	const result = await v$.value.$validate()
	return result
}

const onSubmit = async() => {
	const result = await t$.value.$validate()
	if(!result) {
		return
	} else {
		resume.infoStore.selectedResultLink()
		t$.value.$reset()
	}
}


</script>
