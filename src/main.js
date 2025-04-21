import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import naive from 'naive-ui'
import Icons from './components/Icons/index.vue'


createApp(App).use(naive).component('Icons', Icons).mount('#app')
