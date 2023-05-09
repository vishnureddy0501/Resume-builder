import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useTabsStore } from './tabs'
import { PAGE_EDUCATION, COURSES } from '../constans'


export const useCourseStore = defineStore('course', () => {
	const tabs = useTabsStore()

	const editData = ref(false)

	const coursesForm = ref([
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

	const courseItem = ref({
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

	function addCourseData() {
		coursesForm.value.unshift(courseItem.value)
		courseItem.value = {
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

	function editCourse(item) {
		tabs.currentPage = PAGE_EDUCATION
		tabs.currentEducationTab = COURSES
		courseItem.value = item
		editData.value = true
	}

  return {
		coursesForm,
		courseItem,
		addCourseData,
		editCourse
	}
})