import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import { setupPlugin } from './plugin'
import './plugin/taiwindcss/index'



const app = createApp(App)

setupPlugin(app)

app.use(router)
app.mount('#app')

