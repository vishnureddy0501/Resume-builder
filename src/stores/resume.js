import { defineStore } from 'pinia'
import { useTabsStore } from './tabs'
import { useInfoStore } from './info'
import { useExperienceStore } from './experience'
import { useProjectStore } from './project'
import { useEducationStore } from './education'


export const useResumeStore = defineStore('resume', () => {
  
	const tabsStore = useTabsStore()
	const infoStore = useInfoStore()
	const experienceStore = useExperienceStore()
	const projectStore = useProjectStore()
	const educationStore = useEducationStore()

  return {
		tabsStore,
		infoStore,
		experienceStore,
		projectStore,
		educationStore 
	}
})
