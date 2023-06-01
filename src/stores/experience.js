import { ref, reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import { useTabsStore } from './tabs'
import { PAGE_EXPERIENCE } from '../constans'

const LOCAL_STORAGE_KEY = PAGE_EXPERIENCE


export const useExperienceStore = defineStore('experience', () => {
	const tabs = useTabsStore()

	const currentDate = ref(false)
	const editData = ref(false)

	const experienceForms = reactive(getSavedData() || [
		{
			id: 1,
			role: 'FrontEnd Developer',
			company: 'OnePlusOne Solutions',
			description: 'Developing: A website for wedding services with the chat and catalog / Multilingual website / Online shop / Implementing sockets and writing functionality / Interaction with PM, designers and other developers about the functionality and design of components / Making edits to existing projects / Layout of online stores, landing pages, multi-pages, sites with a small number of animations,	platforms with graphs',
			startDate: {
				month: 11,
				year: 2022
			},
			endDate: {
				month: 5,
				year: 2023
			},
			current: true
		}
	])

	watch(experienceForms, saveData, { deep: true })

  function saveData() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(experienceForms))
  }

  function getSavedData() {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY)
    return data ? JSON.parse(data) : null
  }

	const experienceForm = reactive({
		id:  Date.now(),
		role: '',
		company: '',
		description: '',
		startDate: {
			month: 0,
			year: 2023
		},
		endDate: {
			month: new Date().getMonth(),
			year: new Date().getFullYear()
		},
		current: false
	})

	function addExperienceData() {
    // experienceForms.unshift({
		// 	...experienceForm,
		// 	current: currentDate.value
		// })
    // clearExperienceForm()
		const newExperience = JSON.parse(JSON.stringify(experienceForm))
		newExperience.current = currentDate.value
		experienceForms.unshift(newExperience)
		clearExperienceForm()
  }

	function editExperience(item) {
    tabs.currentPage = PAGE_EXPERIENCE
    experienceForm.id = item.id
    experienceForm.role = item.role
    experienceForm.company = item.company
    experienceForm.description = item.description
    experienceForm.startDate.month = item.startDate.month
    experienceForm.startDate.year = item.startDate.year
    experienceForm.endDate.month = item.endDate.month
    experienceForm.endDate.year = item.endDate.year
    experienceForm.current = item.endDate.month === 0 && item.endDate.year === 0
    editData.value = true
  }

	function updateExperienceData() {
    const index = experienceForms.findIndex(exp => exp.id === experienceForm.id)
    if (index !== -1) {
			const updatedExperience = JSON.parse(JSON.stringify(experienceForm))
			updatedExperience.current = currentDate.value
			experienceForms.splice(index, 1, updatedExperience)
			clearExperienceForm()
			editData.value = false
    }
  }

	function deleteExperienceData(deletedExperience) {
		const index = experienceForms.findIndex(exp => exp === deletedExperience)
		if (index !== -1) {
			experienceForms.splice(index, 1)
			editData.value = false
		}
	}

	function clearExperienceForm() {
    experienceForm.id = Date.now()
    experienceForm.role = ''
    experienceForm.company = ''
    experienceForm.description = ''
    experienceForm.startDate.month = 0
    experienceForm.startDate.year = 2023
    experienceForm.endDate.month = new Date().getMonth()
    experienceForm.endDate.year = new Date().getFullYear()
    experienceForm.current = false
  }

  return {
		experienceForms,
		experienceForm,
		addExperienceData,
		currentDate,
		editExperience,
		updateExperienceData,
		editData,
		deleteExperienceData
	}
})
