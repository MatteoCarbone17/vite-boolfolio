import { createApp } from 'vue'
import { router } from './router'
import './style.css'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faWrench } from '@fortawesome/free-solid-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUser,faWrench,  faUserSecret);

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
