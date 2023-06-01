import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { LANGUAGES_LEVEL } from '@/constans'

const LOCAL_STORAGE_KEY = 'more'


export const useMoreStore = defineStore('more', () => {

	const moreForm = ref(getSavedData() || {
		skills: ['HTML', 'CSS (SASS, SCSS, LESS)', 'Bootstrap', 'JavaScript', 'TypeScript', 'React.js', 'Redux'],
		language: '',
		interests: ['Sport (GYM)', 'Video Games'],
		select: null,
		languageArr: [
			{ name: 'Ukrainian', text: 'Fluent', value: 'fluent' },
			{ name: 'English', text: 'Pre-Intermediate', value: 'preIntermediate' }
		]
	})

	watch(moreForm, saveData, { deep: true })

  function saveData() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(moreForm.value))
  }

  function getSavedData() {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY)
    return data ? JSON.parse(data) : null
  }

	const handleChangeInterests = (val) => {
		moreForm.value.interests = val
	}

	const handleChangeSkills = (val) => {
		moreForm.value.skills = val
	}

	function selectedResultLang() {
		let res = null
		res = LANGUAGES_LEVEL.find(lang => lang.value === moreForm.value.select)
		if(!res) {
			return
		}
		moreForm.value.languageArr.push( { ...res, name: moreForm.value.language } )
		moreForm.value.language = ''
	}

	function removeSkill(deleted) {
		const index = moreForm.value.skills.findIndex(skill => skill === deleted)
		if (index !== -1) {
			moreForm.value.skills.splice(index, 1)
		}
	}

	function removeInterest(deleted) {
		const index = moreForm.value.interests.findIndex(int => int === deleted)
		if (index !== -1) {
			moreForm.value.interests.splice(index, 1)
		}
	}

	function removeLang(deleted) {
		const index = moreForm.value.languageArr.findIndex(lang => lang === deleted)
		if (index !== -1) {
			moreForm.value.languageArr.splice(index, 1)
		}
	}

  return {
		moreForm,
		handleChangeInterests,
		handleChangeSkills,
		selectedResultLang,
		removeSkill,
		removeInterest,
		removeLang
	}
})
