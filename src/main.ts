import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// css
import './assets/sass/app.scss'
import './assets/css/vendor.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
