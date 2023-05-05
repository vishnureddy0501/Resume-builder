<template>
	<div class="text-slate-900">

		<div class="mb-3">
			<label for="projectName" class="flex gap-1 items-center text-lg text- font-semibold mb-1">
				<IdentificationIcon class="w-5 h-5" />
				Project name:
			</label>
			<input id="projectName" type="text" class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border">
		</div>

		<div class="mb-3">
			<label class="flex gap-1 items-center text-lg font-semibold mb-1">
				<DocumentTextIcon class="w-5 h-5" />
				Description:
			</label>
			<textarea class="px-3 py-1 border border-slate-900 rounded w-full focus:outline-none focus:shadow-border h-40 resize-none"></textarea>
		</div>

		<div class="mb-3">
			<label class="flex gap-1 items-center text-lg font-semibold mb-1">
				<HashtagIcon class="w-5 h-5" />
				Add some relative tags :
			</label>
			<vue3-tags-input 
				:tags="tags"
        placeholder="For example: html, css, js ets"
        @on-tags-changed="handleChangeTags"
				class=" border border-slate-900 rounded w-full focus:outline-none focus:shadow-border"
			/>
		</div>

		<div>
			<button class="global-btn">Add Project</button>
		</div>

	</div>
</template>

<script setup>
import { ref } from 'vue'
import { IdentificationIcon, DocumentTextIcon, HashtagIcon } from '@heroicons/vue/24/outline'
import Vue3TagsInput from 'vue3-tags-input'

const tags = ref([])

const handleChangeTags = (val) => {
	tags.value = val
}
</script>