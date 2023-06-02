// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOpenMobileNav = defineStore('openMobileNav', () => {
  const opened = ref(false)
  const scrollY = ref(0)

  function open() {
    opened.value = true
  }
  function close() {
    opened.value = false
  }
  function toggle() {
    opened.value = !opened.value
  }
  function setScrollY(value: number) {
    scrollY.value = value
  }

  return { opened, open, close, toggle, scrollY, setScrollY }
})
