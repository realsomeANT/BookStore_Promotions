import './assets/tailwind.css';
import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import NavBar from './components/NavBar.vue';

const app = createApp(App);
const navApp = createApp(NavBar);

app.use(router);



navApp.mount('#nav');
app.mount('#app');