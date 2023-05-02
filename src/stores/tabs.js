import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useTabsStore = defineStore('tabs', () => {

  const currentPage = ref('info')

	function navigate(tab) {
		currentPage.value = tab
	}

  return { currentPage, navigate }
})
