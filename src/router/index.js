import { createRouter, createWebHashHistory } from 'vue-router'
import ViewTaskList from '@/views/ViewTaskList.vue'
import ViewEditTask from '@/views/ViewEditTask.vue'

const routes = [
    {
        path: '/',
        name: 'tasks',
        component: ViewTaskList
    },
    {
        path: '/editTask/:id',
        name: 'edit-task',
        component: ViewEditTask
    }

]