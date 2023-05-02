import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useInfoStore = defineStore('info', () => {

  const infoForm = ref({
		fullName: 'John Smith',
		tags: ['secondsite.com']
	})

	function handleChangeSite(name) {
		infoForm.value.tags = name
	}

  return { infoForm, handleChangeSite }
})
