import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import './assets/css/index.css';
import VueSmoothScroll from 'vue3-smooth-scroll';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(router);

app.use(VueSmoothScroll, {
    duration: 400,
    updateHistory: false,
});

app.use(createPinia());

app.mount('#app');
