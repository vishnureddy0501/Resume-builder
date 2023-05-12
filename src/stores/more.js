import { ref } from 'vue'
import { defineStore } from 'pinia'
import { LANGUAGES_LEVEL } from '@/constans'


export const useMoreStore = defineStore('more', () => {

	const moreForm = ref({
		skills: ['HTML', 'CSS (SASS, SCSS, LESS)', 'JS'],
		language: '',
		interests: ['Sport (GYM)', 'Video Games'],
		select: 'Please select the level',
		languageArr: [
			{ name: 'Ukrainian', text: 'Fluent', value: 'fluent' },
			{ name: 'English', text: 'Pre-Intermediate', value: 'preIntermediate' }
		]
	})

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
		console.log(deleted)
		const index = moreForm.value.skills.findIndex(skill => skill === deleted)
		if (index !== -1) {
			moreForm.value.skills.splice(index, 1)
		}
	}

  return {
		moreForm,
		handleChangeInterests,
		handleChangeSkills,
		selectedResultLang,
		removeSkill
	}
})
