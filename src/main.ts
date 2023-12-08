import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'

import App from './App.vue'
import router from './router'

import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const app = createApp(App)

app.component('InputText', InputText)
app.component('Button', Button)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.mount('#app')
