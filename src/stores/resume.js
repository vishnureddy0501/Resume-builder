import { defineStore } from 'pinia'
import { useTabsStore } from './tabs'
import { useInfoStore } from './info'
import { useExperienceStore } from './experience'
import { useProjectStore } from './project'


export const useResumeStore = defineStore('resume', () => {
  
	const tabsStore = useTabsStore()
	const infoStore = useInfoStore()
	const experienceStore = useExperienceStore()
	const projectStore = useProjectStore()

  return { tabsStore, infoStore, experienceStore, projectStore }
})
