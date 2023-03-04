import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProjectsList from './pages/ProjectsList.vue';
import AboutUs from './pages/AboutUs.vue'
import SingleProject from './pages/SingleProject.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/pages',
            name: 'projects',
            component: ProjectsList
        },
        {
            path: '/pages',
            name: 'AboutUs',
            component:AboutUs
        },
        {
            path: '/pages',
            name: 'SingleProject',
            component:SingleProject
        },
    ]
});
export { router };