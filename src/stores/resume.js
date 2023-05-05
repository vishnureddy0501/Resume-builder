import { defineStore } from 'pinia'
import { useTabsStore } from './tabs'
import { useInfoStore } from './info';
import { useExperienceStore } from './experience';


export const useResumeStore = defineStore('resume', () => {
  
	const tabsStore = useTabsStore()
	const infoStore = useInfoStore()
	const experienceStore = useExperienceStore()

  return { tabsStore, infoStore, experienceStore }
})
