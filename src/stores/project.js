import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useTabsStore } from './tabs'
import { PAGE_PROGECT } from '../constans'


export const useProjectStore = defineStore('project', () => {
	const tabs = useTabsStore()

	const editData = ref(false)
	const projectData = reactive([
		{
			id: 1,
			project: 'System Of Hir',
			description: ' Used Vue.js to implement a job search platform for developers and make it easier for recruiters to find candidates. The main work was carried out on a dashboard for personal accounts of job seekers and employers.',
			badges: ['HTML', 'SCSS','JS', 'Vue.js']
		}
	])

	const projectItem = reactive({
		id:  Date.now(),
		project: '',
		description: '',
		badges: []
	})


	function addProjectData() {
    projectData.unshift({...projectItem})
    clearProjectForm()
  }

	const handleChangeTags = (val) => {
		projectItem.badges = val
	}

	function editProject(item) {
    tabs.currentPage = PAGE_PROGECT
    projectItem.id = item.id
    projectItem.project = item.project
		projectItem.description = item.description
		projectItem.badges = item.badges
    editData.value = true
  }

	function updateProjectData() {
    const index = projectData.findIndex(exp => exp.id === projectItem.id)
    if (index !== -1) {
      projectData.splice(index, 1, { ...projectItem })
      clearProjectForm()
      editData.value = false
    }
  }

	function deleteProjectData(deletedProject) {
		const index = projectData.findIndex(exp => exp === deletedProject)
		if (index !== -1) {
			projectData.splice(index, 1)
			editData.value = false
		}
	}

	function clearProjectForm() {
    projectItem.id = Date.now()
    projectItem.project = ''
    projectItem.description = ''
    projectItem.badges = []
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
