import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import './index.css'
import router from './routes'
import VueGtag from "vue-gtag"

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
// 기본 GA ID 사용
app.use(VueGtag, {
    config: {
        id: "G-WWLRKR3WKZ"
    }
}, router)

app.use(pinia)
    .use(router)
    .mount('#app')