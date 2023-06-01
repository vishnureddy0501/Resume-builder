import { ref, reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import { useTabsStore } from './tabs'
import { PAGE_PROGECT } from '../constans'

const LOCAL_STORAGE_KEY = PAGE_PROGECT


export const useProjectStore = defineStore('project', () => {
	const tabs = useTabsStore()

	const editData = ref(false)
	const projectData = reactive(getSavedData() || [
		{
			id: 1,
			project: 'Resume Builder',
			description: 'Used JavaScript to implement the "Resume Builder". The main work was to learn more about the principles of working with JavaScript. During the practice, the following functionality was implemented: adding fields, deleting fields, editing fields, validation, ets',
			badges: ['HTML', 'CSS','JavaScript', 'Vite', 'Tailwind']
		}
	])

	watch(projectData, saveData, { deep: true })

  function saveData() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(projectData))
  }

  function getSavedData() {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY)
    return data ? JSON.parse(data) : null
  }

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
