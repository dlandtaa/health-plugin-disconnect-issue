import { createApp } from 'vue'
import App from './App.vue'


document.addEventListener('deviceready', () => {
    const app = createApp(App);
    app.mount('#app');
}, false);
