import { defineStore } from 'pinia'
import { useTabsStore } from './tabs'
import { useInfoStore } from './info';


export const useResumeStore = defineStore('resume', () => {
  
	const tabsStore = useTabsStore()
	const infoStore = useInfoStore()

  return { tabsStore, infoStore }
})
