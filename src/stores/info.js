import { ref } from 'vue'
import { defineStore } from 'pinia'
import { SOCIAL_LIST } from '@/constans'


export const useInfoStore = defineStore('info', () => {

  const infoForm = ref({
		fullName: 'John Smith',
		jobTitle: 'Front-End developer',
		phone: '380930001122',
		mail: 'test@gmail.com',
		tags: ['secondsite.com'],
		select: 'Select your social media',
		socialMedia: '',
		socialArr: [],
		aboutMe: 'I am a passionate Front-End developer with 1 year of	experience. I have worked with HTML 5, CSS 3, JavaScript. I have a good communication skills, and the ability to work	both independently and as part of a team. I am highly motivated to deliver a valuable product and I am looking for new challenges.'
	})

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
