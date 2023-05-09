import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useTabsStore } from './tabs'
import { PAGE_PROGECT } from '../constans'


export const useProjectStore = defineStore('project', () => {
	const tabs = useTabsStore()

	const editData = ref(false)
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

	function editProject(item) {
		tabs.currentPage = PAGE_PROGECT
		projectItem.value = item
		editData.value = true
	}

	function updateProjectData() {
		const index = projectData.value.findIndex(exp => exp === projectItem.value)
		if (index !== -1) {
			projectData.value.splice(index, 1, projectItem.value)
			projectItem.value = {
				project: '',
				description: '',
				badges: []
			}
			editData.value = false
		}
	}

	function deleteProjectData(deletedProject) {
		const index = projectData.value.findIndex(exp => exp === deletedProject)
		if (index !== -1) {
			projectData.value.splice(index, 1)
			editData.value = false
		}
	}

  return {
		projectData,
		projectItem,
		addProjectData,
		handleChangeTags,
		editData,
		editProject,
		updateProjectData,
		deleteProjectData
	}
})
