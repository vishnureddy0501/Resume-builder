<template>
  <div class="text-slate-600 text-xs">
    <select class="basic-input py-1 cursor-pointer" v-model="selectedTheme">
      <option v-for="item in THEMES" :key="item.theme" :value="item.theme">{{ item.text }}</option>
    </select>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { THEMES } from '../constans'


const selectedTheme = ref(localStorage.getItem('selectedTheme') || THEMES[0].theme)


watch(selectedTheme, (newVal) => {
  document.documentElement.classList.remove(...THEMES.map(item => item.theme))
  document.documentElement.classList.add(newVal)
	localStorage.setItem('selectedTheme', newVal)
})

onMounted(() => {
  const savedTheme = localStorage.getItem('selectedTheme');
  if (savedTheme && THEMES.some(item => item.theme === savedTheme)) {
    document.documentElement.classList.add(savedTheme);
  }
})
</script>