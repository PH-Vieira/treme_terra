import './style/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// import FloatingVue from 'floating-vue'
// import 'floating-vue/dist/style.css'

// import VueDatePicker from '@vuepic/vue-datepicker'
// import '@vuepic/vue-datepicker/dist/main.css'

import toast from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

import VueSmoothScroll from "vue3-smooth-scroll";

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(FloatingVue)
app.use(toast)
app.use(VueSmoothScroll)
// app.component('VueDatePicker', VueDatePicker)

app.mount('#app')
