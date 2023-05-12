<template>
	<div>
		<ImagePreview />
		<h2 class="text-3xl text-center mb-2 font-semibold">{{ resume.infoStore.infoForm.fullName }}</h2>
		<p class="text-slate-900 text-2xl text-center mb-2 font-semibold">{{ resume.infoStore.infoForm.jobTitle }}</p>
		<hr class="my-4 border-slate-500" />

		<div class="flex gap-2 items-center mb-3 leading-4">
			<DevicePhoneMobileIcon class="w-4 h-4"/>
			<a :href="`tel:${resume.infoStore.infoForm.phone}`">{{ resume.infoStore.infoForm.phone }}</a>
		</div>
		<div class="flex gap-2 items-center mb-3 leading-4">
			<AtSymbolIcon class="w-4 h-4" />
			<a :href="`mailto:${resume.infoStore.infoForm.mail}`">{{ resume.infoStore.infoForm.mail }}</a>
		</div>
		
		<ul>
			<li v-for="(item, inx) in resume.infoStore.infoForm.tags" :key="inx" class="mb-3 leading-4 relative group">
				<XMarkIcon
					@click="resume.infoStore.removeTag(item)"
					class="w-4 h-4 cursor-pointer absolute top-0 right-0 hidden group-hover:block"
				/>
				<a  class="inline-flex gap-1 flex-row items-center" :href="`https://${item}`" target="_blank">
					<GlobeAltIcon class="w-4 h-4" />
					{{ item }}
				</a>
			</li>
		</ul>
		
		<ul>
			<li v-for="item in resume.infoStore.infoForm.socialArr" :key="item.value" class="mb-3 leading-4 relative group">
				<XMarkIcon
					@click="resume.infoStore.removeSocialItem(item)"
					class="w-4 h-4 cursor-pointer absolute top-0 right-0 hidden group-hover:block"
				/>
				<a :href="`${item.url}${item.name}`" target="_blank" class="inline-flex gap-1 flex-row items-center">
					<!-- here Icon components -->
					<Linkedin class="w-4 h-4 fill-white" v-if="item.value === 'linkedin'" />
					<Facebook class="w-4 h-4 fill-white" v-if="item.value === 'facebook'" />
					<Instagram class="w-4 h-4 fill-white" v-if="item.value === 'instagram'" />
					<Github class="w-4 h-4 fill-white" v-if="item.value === 'github'" />
					<Behance class="w-4 h-4 fill-white" v-if="item.value === 'behance'" />
					<Dribbble class="w-4 h-4 fill-white" v-if="item.value === 'dribbble'" />
					<Twitter class="w-4 h-4 fill-white" v-if="item.value === 'twitter'" />
					{{ item.name }}
				</a>
			</li>
		</ul>
		<hr class="my-4 border-slate-500" />

		<div v-if="resume.moreStore.moreForm.skills.length > 0" class="flex gap-2 items-center mb-3">
			<WrenchIcon class="w-5 h-5" />
			<span class="text-xl">Skills</span>
		</div>

		<ul>
			<li
				v-for="(skill, inx) in resume.moreStore.moreForm.skills"
				:key="inx"
				class="font-semibold relative group"
			>
			<XMarkIcon
				@click="resume.moreStore.removeSkill(skill)"
				class="w-4 h-4 cursor-pointer absolute top-1/2 -translate-y-2/4 right-0 hidden group-hover:block"
			/>
				{{ skill }}
			</li>
		</ul>
		<hr v-if="resume.moreStore.moreForm.skills.length > 0" class="my-4 border-slate-500" />

		<div class="flex gap-2 items-center mb-3">
			<LanguageIcon class="w-5 h-5" />
			<span class="text-xl">Languages</span>
		</div>
		<ul>
			<li
				v-for="(item, inx) in resume.moreStore.moreForm.languageArr"
				:key="inx"
				class="font-semibold"
			>
				{{ item.name }} <span class="text-sm font-normal">({{ item.text }})</span>
			</li>
		</ul>
		<hr class="my-4 border-slate-500" />

		<div class="flex gap-2 items-center mb-3">
			<PuzzlePieceIcon class="w-5 h-5" />
			<span class="text-xl">Interests</span>
		</div>
		<ul class="mb-5">
			<li
				v-for="(item, inx) in resume.moreStore.moreForm.interests"
				:key="inx"
				class="font-semibold"
			>
				{{ item }}
			</li>
		</ul>

	</div>
</template>

<script setup>
import { useResumeStore } from '@/stores/resume.js';
import { GlobeAltIcon, XMarkIcon } from '@heroicons/vue/24/outline';
import { AtSymbolIcon, DevicePhoneMobileIcon, WrenchIcon, LanguageIcon, PuzzlePieceIcon } from '@heroicons/vue/24/solid';
import ImagePreview from '../components/ImagePreview.vue'

import Linkedin from './icons/Linkedin.vue'
import Facebook from './icons/Facebook.vue'
import Instagram from './icons/Instagram.vue'
import Github from './icons/Github.vue'
import Behance from './icons/Behance.vue'
import Dribbble from './icons/Dribbble.vue'
import Twitter from './icons/Twitter.vue'

const resume = useResumeStore()

</script>