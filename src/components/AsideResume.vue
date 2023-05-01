<template>
	<div>
		<ImagePreview />
		<h2 class="text-3xl text-center mb-2 font-semibold">Full Name</h2>
		<p class="text-slate-900 text-2xl text-center mb-2 font-semibold">Frontend Developer</p>
		<hr class="my-4 border-slate-500" />

		<div class="flex gap-2 items-center mb-2">
			<DevicePhoneMobileIcon class="w-4 h-4"/>
			<a href="tel:+380930000000">+3 8(093) 000 0000</a>
		</div>
		<div class="flex gap-2 items-center mb-2">
			<AtSymbolIcon class="w-4 h-4" />
			<a href="mailto:test@gmail.com">test@gmail.com</a>
		</div>
		<!-- here v-for need for websites -->
		<hr class="my-4 border-slate-500" />

		<div class="flex gap-2 items-center mb-3">
			<WrenchIcon class="w-5 h-5" />
			<span class="text-xl">Skills</span>
		</div>

		<ul>
			<li
				v-for="(skill, inx) in skills"
				:key="inx"
				class="font-semibold"
			>
				{{ skill }}
			</li>
		</ul>
		<hr class="my-4 border-slate-500" />

		<div class="flex gap-2 items-center mb-3">
			<LanguageIcon class="w-5 h-5" />
			<span class="text-xl">Languages</span>
		</div>
		<ul>
			<li
				v-for="(item, inx) in languages"
				:key="inx"
				class="font-semibold"
			>
				{{ item.lang }} <span class="text-sm font-normal">({{ item.skill }})</span>
			</li>
		</ul>
		<hr class="my-4 border-slate-500" />

		<div class="flex gap-2 items-center mb-3">
			<PuzzlePieceIcon class="w-5 h-5" />
			<span class="text-xl">Interests</span>
		</div>
		<ul class="mb-5">
			<li
				v-for="(item, inx) in interests"
				:key="inx"
				class="font-semibold"
			>
				{{ item }}
			</li>
		</ul>

	</div>
</template>

<script setup>
import { AtSymbolIcon, DevicePhoneMobileIcon, WrenchIcon, LanguageIcon, PuzzlePieceIcon } from '@heroicons/vue/24/solid';
import ImagePreview from '../components/ImagePreview.vue'

const skills = ['Html', 'Css', 'JS'];

const languages = [
	{ lang: 'Ukrainian', skill: 'Fluent' },
	{ lang: 'English', skill: 'Beginner' }
];

const interests = ['Sport (Running)', 'Video Games', 'GYM'];
</script>