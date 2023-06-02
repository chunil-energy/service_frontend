// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOpenMobileNav = defineStore('openMobileNav', () => {
  const opened = ref(false)

  function open() {
    opened.value = true
  }
  function close() {
    opened.value = false
  }
  function toggle() {
    opened.value = !opened.value
  }

  return { opened, open, close, toggle }
})
