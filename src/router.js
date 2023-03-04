import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import ProjectsList from './pages/ProjectsList.vue';
import AppProject from './components/AppProject.vue'
import AboutUs from './pages/AboutUs.vue'
// import SingleProject from './pages/SingleProject.vue'

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
            name: 'projectsList',
            component: ProjectsList
        },
         {
             path: '/pages',
             name: 'AppProject',
             component: AppProject
        },
        {
            path: '/pages',
            name: 'AboutUs',
            component:AboutUs
        },
        // {
        //     path: '/pages/:id',
        //     name: 'SingleProject',
        //     component:SingleProject
        // },
    ]
});
export { router };