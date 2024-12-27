
import { createApp } from 'vue'
import App from '@/App.vue'
import './style.css'
import './tailwind.css'
import router from './router/index'
import FontAwesomeIcon from '@/types/fontawesome-icons'

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app')

