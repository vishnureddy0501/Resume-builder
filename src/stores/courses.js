import { ref, reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import { useTabsStore } from './tabs'
import { PAGE_EDUCATION, COURSES } from '../constans'

const LOCAL_STORAGE_KEY = COURSES


export const useCourseStore = defineStore('course', () => {
	const tabs = useTabsStore()

	const editData = ref(false)

	const coursesForm = reactive(getSavedData() || [
		{
			id: 1,
			name: 'Ukrainian IT School',
			degree: 'Frontend Developer course JavaScript (110h)',
			startDate: {
				month: 4,
				year: 2022
			},
			endDate: {
				month: 7,
				year: 2022
			}
		}
	])

	watch(coursesForm, saveData, { deep: true })

  function saveData() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(coursesForm))
  }

  function getSavedData() {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY)
    return data ? JSON.parse(data) : null
  }

	const courseItem = reactive({
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

	function addCourseData() {
		const newCourse = JSON.parse(JSON.stringify(courseItem))
		coursesForm.unshift(newCourse)
		clearCoursesForm()
	}

	function editCourse(item) {
		tabs.currentPage = PAGE_EDUCATION
		tabs.currentEducationTab = COURSES
		courseItem.id = item.id
		courseItem.name = item.name
		courseItem.degree = item.degree
		courseItem.startDate.month = item.startDate.month
    courseItem.startDate.year = item.startDate.year
    courseItem.endDate.month = item.endDate.month
    courseItem.endDate.year = item.endDate.year
		editData.value = true
	}

	function updateCourseData() {
		const index = coursesForm.findIndex(exp => exp.id === courseItem.id)
		if (index !== -1) {
			const updatedCourse = JSON.parse(JSON.stringify(courseItem))
			coursesForm.splice(index, 1, updatedCourse)
			clearCoursesForm()
			editData.value = false
		}
	}

	function deleteCourseData(deletedCourse) {
		const index = coursesForm.findIndex(exp => exp === deletedCourse)
		if (index !== -1) {
			coursesForm.splice(index, 1)
			editData.value = false
		}
	}

	function clearCoursesForm() {
    courseItem.id = Date.now()
    courseItem.name = ''
    courseItem.degree = ''
    courseItem.startDate.month = 0
    courseItem.startDate.year = 2023
    courseItem.endDate.month = new Date().getMonth()
    courseItem.endDate.year = new Date().getFullYear()
  }

  return {
		coursesForm,
		courseItem,
		addCourseData,
		editCourse,
		editData,
		updateCourseData,
		deleteCourseData
	}
})