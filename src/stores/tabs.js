import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useEducationStore } from './education'
import { useCourseStore } from './courses'
import { EDUCATION_TABS } from '../constans'


export const useTabsStore = defineStore('tabs', () => {
	const education = useEducationStore()
	const course = useCourseStore()

  const currentPage = ref('info')

	function navigate(tab) {
		currentPage.value = tab
	}

	// educations tabs
	const currentEducationTab = ref(EDUCATION_TABS[0])

	function navigateEducation(tab) {
		currentEducationTab.value = tab
	}

	const changeTextForButton = computed(() => {
		return currentEducationTab.value === EDUCATION_TABS[0] ? 'Add Education' : 'Add Course'
	})
	
	function onChangeClick()  {
		return currentEducationTab.value === EDUCATION_TABS[0] ? education.addEducationData() : course.addCourseData()
	}

  return { currentPage, navigate, currentEducationTab, navigateEducation, changeTextForButton, onChangeClick }
})
