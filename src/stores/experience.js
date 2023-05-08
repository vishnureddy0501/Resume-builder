import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useTabsStore } from './tabs'
import { PAGE_EXPERIENCE } from '../constans'


export const useExperienceStore = defineStore('experience', () => {
	const tabs = useTabsStore()

	const currentDate = ref(false)
	const editData = ref(false)

	const experienceForms = ref([
		{
			role: 'FrontEnd Developer',
			company: 'Company Name',
			description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit accusantium blanditiis, pariatur consequuntur cumque, veniam rerum reiciendis modi dignissimos ullam beatae saepe quos delectus ratione ad perferendis veritatis quod ipsa.',
			startDate: {
				month: 4,
				year: 2022
			},
			endDate: {
				month: 3,
				year: 2023
			}
		}
	]);

	const experienceForm = ref({
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
		experienceForms.value.unshift({ ...experienceForm.value, current: currentDate.value })
		experienceForm.value = {
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
			}
		}
	}

	function editExperience(item) {
		tabs.currentPage = PAGE_EXPERIENCE
		experienceForm.value = item
		editData.value = true
	}

	function updateExperienceData() {
		const index = experienceForms.value.findIndex(exp => exp === experienceForm.value)
		if (index !== -1) {
			experienceForms.value.splice(index, 1, experienceForm.value)
			experienceForm.value = {
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
				}
			}
			editData.value = false
		}
	}

	function deleteExperienceData(deletedExperience) {
		const index = experienceForms.value.findIndex(exp => exp === deletedExperience)
		if (index !== -1) {
			experienceForms.value.splice(index, 1)
		}
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
