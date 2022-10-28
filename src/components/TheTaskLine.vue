<template>
    <DeleteTask 
        v-if="modals.deleteTask"
        v-model="modals.deleteTask"
        :task-id="task.id"
    />
    <div class="taskLine_div">
        <div class="taskLine">
            <p>{{ task.title }}</p>
        </div>
        <div class="taskLine_date">
            <p>{{ task.date }}</p>
        </div>
        <button 
            class="taskLine_delete_button"
            @click="modals.deleteTask = true"
        >
            Delete
        </button>
    </div>
</template>

<script setup>

// IMPORT 

import { reactive } from 'vue'
import DeleteTask from '@/components/DeleteTask.vue'


// STORE AND PROPS


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