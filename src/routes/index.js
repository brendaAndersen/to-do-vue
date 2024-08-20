import About from '../views/About.vue';
import Todo from '../views/Todo.vue';
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: "/", component: Todo},
    { path: "/about", component: About}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;