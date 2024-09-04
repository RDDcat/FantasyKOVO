import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import './index.css';


const app = createApp(App);

// Pinia 인스턴스 생성 및 등록
const pinia = createPinia();
app.use(pinia);

app.mount('#app');
