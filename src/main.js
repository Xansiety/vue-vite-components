import { createApp } from 'vue'
import App from './App.vue'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'

import './assets/main.css'

createApp(App)
.use(bootstrap)
.mount('#app')
