import { defineStore } from 'pinia'

export const useChamberStore = defineStore('chamber', {
  state: () => ({
    bold: false,
    italic: false,
  }),
  actions: {
    toggle_bold() {
      this.bold = !this.bold
    },
    toggle_italic() {
      this.italic = !this.italic
    }
  }
})