import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './assets/style.css'
// import './assets/custom.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

// Add icons to the library
library.add(fas, fab);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
