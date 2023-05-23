<template>
	<div class="relative h-48 my-4">
		<div class="absolute top-0 left-2/4 -translate-x-2/4 rounded overflow-hidden w-48 h-48">
			<input id="preview" type="file" @change="onFileChange" class="hidden">
			<label for="preview" class="bg-gray-400 flex w-full h-full cursor-pointer items-center justify-center">
				<PhotoIcon class="w-6 h-6 fill-slate-500" v-if="!url" />
				<div class="hover" v-else>
					<span class="absolute left-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 hidden z-1 text-xs bg-gray-100 rounded p-1 text-slate-700">Change me</span>
					<img :src="url" alt="" class="w-full h-full object-cover">
				</div>
			</label>
		</div>
	</div>
</template>

<script setup>
import { PhotoIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue'

const url = ref(null)

const onFileChange = (e) => {
	const file =e.target.files[0];
	url.value = URL.createObjectURL(file);
}

</script>

<style lang="scss" scoped>
.hover:hover span {
	display: block;
}
</style>