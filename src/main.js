import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import './index.css'
import router from './routes';
import VueGtag from "vue-gtag";

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(pinia).use(router).use(VueGtag, {
    config: { id: "G-WWLRKR3WKZ" }
}).mount('#app')
