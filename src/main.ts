import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/lara-light-blue/theme.css'
import 'primeicons/primeicons.css'

import App from './App.vue'
import router from './router'

import InputNumber from 'primevue/inputnumber';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';

const app = createApp(App)

app.component('InputNumber', InputNumber)
app.component('Dropdown', Dropdown)
app.component('Button', Button)

app.use(createPinia())
app.use(router)
app.use(PrimeVue);

app.mount('#app')
