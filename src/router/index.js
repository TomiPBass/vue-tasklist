import { createRouter, createWebHashHistory } from 'vue-router'
import ViewBoxTaskList from '@/views/ViewBoxTaskList.vue'
import ViewLineTaskList from '@/views/ViewLineTaskList.vue'

const routes = [
    {
        path: '/',
        redirect: '/box',
        name: 'tasks',
    },
    {
        path: '/box',
        name: 'box-tasks',
        component: ViewBoxTaskList
    },
    {
        path: '/line',
        name: 'line-tasks',
        component: ViewLineTaskList
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router