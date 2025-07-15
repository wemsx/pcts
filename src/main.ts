import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia' // 导入 Pinia
import './assets/colors.css'
import './assets/base.css'

createApp(App).use(createPinia()).mount('#app')
