import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useTabsStore } from './tabs'
import { PAGE_EDUCATION } from '../constans'


export const useEducationStore = defineStore('education', () => {

	const tabs = useTabsStore()

	const editData = ref(false)

	const educationsForm = ref([
		{
			name: 'U IT School',
			degree: 'Lorem ipsum dolor sit',
			startDate: {
				month: 4,
				year: 2022
			},
			endDate: {
				month: 3,
				year: 2023
			}
		}
	])

	const educationItem = ref({
		name: '',
		degree: '',
		startDate: {
			month: 0,
			year: 2023
		},
		endDate: {
			month: new Date().getMonth(),
			year: new Date().getFullYear()
		}
	})

	function addEducationData() {
		educationsForm.value.unshift(educationItem.value)
		educationItem.value = {
			name: '',
			degree: '',
			startDate: {
				month: 0,
				year: 2023
			},
			endDate: {
				month: new Date().getMonth(),
				year: new Date().getFullYear()
			}
		}
	}

	function editEducation(item) {
		tabs.currentPage = PAGE_EDUCATION
		tabs.currentEducationTab = PAGE_EDUCATION
		educationItem.value = item
		editData.value = true
	}

	function updateEducationData() {
		const index = educationsForm.value.findIndex(exp => exp === educationItem.value)
		if (index !== -1) {
			educationsForm.value.splice(index, 1, educationItem.value)
			educationItem.value = {
				name: '',
				degree: '',
				startDate: {
					month: 0,
					year: 2023
				},
				endDate: {
					month: new Date().getMonth(),
					year: new Date().getFullYear()
				}
			}
			editData.value = false
		}
	}

	function deleteEducationData(deletedEducation) {
		const index = educationsForm.value.findIndex(exp => exp === deletedEducation)
		if (index !== -1) {
			educationsForm.value.splice(index, 1)
			editData.value = false
		}
	}

  return {
		educationsForm,
		educationItem,
		addEducationData,
		editData,
		editEducation,
		updateEducationData,
		deleteEducationData
	}
})