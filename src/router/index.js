import { createRouter, createWebHistory } from 'vue-router'
import BodySection from './../components/BodySection.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component : BodySection
    }
];
const router = createRouter({ history: createWebHistory(), routes })
export default router
