import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { SOCIAL_LIST } from '@/constans'

const LOCAL_STORAGE_KEY = 'infoForm'


export const useInfoStore = defineStore('info', () => {

  const infoForm = ref(getSavedData() || {
		fullName: 'John Smith',
		jobTitle: 'Front-End developer',
		phone: '380930001122',
		mail: 'youremail@gmail.com',
		tags: ['secondsite.com'],
		select: null,
		socialMedia: '',
		socialArr: [],
		aboutMe: 'I am a passionate Front-End developer with 1 year of	experience. I have worked with HTML 5, CSS 3, JavaScript. I have a good communication skills, and the ability to work	both independently and as part of a team. I am highly motivated to deliver a valuable product and I am looking for new challenges.'
	})

	watch(infoForm, saveData, { deep: true })

  function saveData() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(infoForm.value))
  }

  function getSavedData() {
    const data = localStorage.getItem(LOCAL_STORAGE_KEY)
    return data ? JSON.parse(data) : null
  }

	function selectedResultLink() {
		let res = null
		res = SOCIAL_LIST.find(url => url.value === infoForm.value.select)
		if(!res) {
			return
		}
		infoForm.value.socialArr.push( { ...res, name: infoForm.value.socialMedia } )
		infoForm.value.socialMedia = ''
	}


	function handleChangeSite(name) {
		infoForm.value.tags = name
	}

	function removeTag(deletedTag) {
		const index = infoForm.value.tags.findIndex(exp => exp === deletedTag)
		if (index !== -1) {
			infoForm.value.tags.splice(index, 1)
		}
	}

	function removeSocialItem(deleted) {
		const index = infoForm.value.socialArr.findIndex(exp => exp === deleted)
		if (index !== -1) {
			infoForm.value.socialArr.splice(index, 1)
		}
	}


  return { infoForm, handleChangeSite, selectedResultLink, removeTag, removeSocialItem }
})
