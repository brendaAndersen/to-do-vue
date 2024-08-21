import About from '../views/About.vue';
import Todo from '../views/Todo.vue';
import Edit from '../views/Edit.vue';
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: "/",  name: 'home', component: Todo},
    { path: "/about", component: About},
    { path: '/edit/:taskId', name: 'edit', component: Edit }

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;