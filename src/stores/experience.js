import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useExperienceStore = defineStore('experience', () => {

	const currentDate = ref(false)

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
		// experienceForms.value.unshift(experienceForm.value)
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

  return { experienceForms, experienceForm, addExperienceData, currentDate }
})
