import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useTabsStore } from './tabs'
import { PAGE_EXPERIENCE } from '../constans'


export const useExperienceStore = defineStore('experience', () => {
	const tabs = useTabsStore()

	const currentDate = ref(false)
	const editData = ref(false)

	const experienceForms = reactive([
		{
			id: 1,
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
    experienceForms.unshift({ ...experienceForm, current: currentDate.value });
    clearExperienceForm();
  }

	function editExperience(item) {
    tabs.currentPage = PAGE_EXPERIENCE;
    experienceForm.id = item.id;
    experienceForm.role = item.role;
    experienceForm.company = item.company;
    experienceForm.description = item.description;
    experienceForm.startDate.month = item.startDate.month;
    experienceForm.startDate.year = item.startDate.year;
    experienceForm.endDate.month = item.endDate.month;
    experienceForm.endDate.year = item.endDate.year;
    experienceForm.current = item.endDate.month === 0 && item.endDate.year === 0;
    editData.value = true;
  }

	function updateExperienceData() {
    const index = experienceForms.findIndex(exp => exp.id === experienceForm.id);
    if (index !== -1) {
      experienceForms.splice(index, 1, {
        ...experienceForm,
        current: currentDate.value
      });
      clearExperienceForm();
      editData.value = false;
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
    experienceForm.id = Date.now();
    experienceForm.role = '';
    experienceForm.company = '';
    experienceForm.description = '';
    experienceForm.startDate.month = 0;
    experienceForm.startDate.year = 2023;
    experienceForm.endDate.month = new Date().getMonth();
    experienceForm.endDate.year = new Date().getFullYear();
    experienceForm.current = false;
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
