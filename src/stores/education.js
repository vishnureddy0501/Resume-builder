import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useTabsStore } from './tabs'
import { PAGE_EDUCATION } from '../constans'


export const useEducationStore = defineStore('education', () => {

	const tabs = useTabsStore()

	const editData = ref(false)

	const educationsForm = reactive([
		{
			id: 1,
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

	const educationItem = reactive({
		id: Date.now(),
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
		const newEducation = JSON.parse(JSON.stringify(educationItem))
		educationsForm.unshift(newEducation)
		clearEducationForm()
	}

	function editEducation(item) {
		tabs.currentPage = PAGE_EDUCATION
		tabs.currentEducationTab = PAGE_EDUCATION
		educationItem.id = item.id
		educationItem.name = item.name
		educationItem.degree = item.degree
		educationItem.startDate.month = item.startDate.month
    educationItem.startDate.year = item.startDate.year
    educationItem.endDate.month = item.endDate.month
    educationItem.endDate.year = item.endDate.year
		editData.value = true
	}

	function updateEducationData() {
		const index = educationsForm.findIndex(exp => exp.id === educationItem.id)
		if (index !== -1) {
			const updatedEducation = JSON.parse(JSON.stringify(educationItem))
			educationsForm.splice(index, 1, updatedEducation)
			clearEducationForm()
			editData.value = false
		}
	}

	function deleteEducationData(deletedEducation) {
		const index = educationsForm.findIndex(exp => exp === deletedEducation)
		if (index !== -1) {
			educationsForm.splice(index, 1)
			editData.value = false
		}
	}

	function clearEducationForm() {
    educationItem.id = Date.now()
    educationItem.name = ''
    educationItem.degree = ''
    educationItem.startDate.month = 0
    educationItem.startDate.year = 2023
    educationItem.endDate.month = new Date().getMonth()
    educationItem.endDate.year = new Date().getFullYear()
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