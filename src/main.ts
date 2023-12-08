import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'

import App from './App.vue'
import router from './router'

import InputNumber from 'primevue/inputnumber';

const app = createApp(App)

app.component('InputNumber', InputNumber)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.mount('#app')
