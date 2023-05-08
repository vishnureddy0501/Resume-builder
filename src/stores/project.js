import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useProjectStore = defineStore('project', () => {

	const projectData = ref([
		{
			project: 'System Of Hir',
			description: ' Used Vue.js to implement a job search platform for developers and make it easier for recruiters to find candidates. The main work was carried out on a dashboard for personal accounts of job seekers and employers.',
			badges: ['HTML', 'SCSS','JS', 'Vue.js']
		}
	])

	const projectItem = ref({
		project: '',
		description: '',
		badges: []
	})

	function addProjectData() {
		projectData.value.push(projectItem.value)
		projectItem.value = {
			project: '',
			description: '',
			badges: []
		}
	}

	const handleChangeTags = (val) => {
		projectItem.value.badges = val
	}

  return { projectData, projectItem, addProjectData, handleChangeTags }
})
