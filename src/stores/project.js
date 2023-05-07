import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useProjectStore = defineStore('project', () => {

	const projectData = ref([])

	const projectItem = ref({})

  return { projectData, projectItem }
})
