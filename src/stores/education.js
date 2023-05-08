import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useEducationStore = defineStore('education', () => {

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

  return { educationsForm, educationItem, addEducationData }
})