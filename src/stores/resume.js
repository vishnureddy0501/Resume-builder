import { defineStore } from 'pinia'
import { useTabsStore } from './tabs'


export const useResumeStore = defineStore('resume', () => {
  
	const tabsStore = useTabsStore();

  return { tabsStore }
})
