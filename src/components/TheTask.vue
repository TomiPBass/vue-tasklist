<template>
    <div class="task_div">
        <div class="task">
            <p>{{ task.title }}</p>
        </div>
        <div class="date">
            <p>{{ task.date }}</p>
        </div>
        <div class="description">
            <p>{{ task.description }}</p>
            <button 
                class="delete_button"
                @click="modals.deleteTask = true"
            >
                Delete
            </button>
        </div>
        <DeleteTask 
            v-if="modals.deleteTask"
            v-model="modals.deleteTask"
            :task-id="task.id"
        />
    </div>
</template>

<script setup>

// IMPORT 

import { reactive } from 'vue'
import { useStoreTasks } from '@/stores/counter'
import DeleteTask from '@/components/DeleteTask.vue'


// STORE AND PROPS


const storeTasks = useStoreTasks()

defineProps({
    task: {
        type: Object,
        required: true
    }
})

// MODALS

const modals = reactive({
    deleteTask: false
})

</script>