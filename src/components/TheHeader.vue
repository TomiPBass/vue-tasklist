<template>
    <div class="header">
        <div class="task_form">
            <label for="submit_taskForm">Submit Task:</label>
            <input 
                id="taskForm"
                v-model="newTask.newTitle" 
                type="text" 
                name="taskForm" 
            >
        </div>
        <div class="date_form">
            <label for="submit_dateForm">Submit Date:</label>
            <input 
                id="dateForm"
                v-model="newTask.newDate" 
                type="date" 
                name="dateForm" 
            >
        </div>
        <div class="desc_form">
            <label for="submit_descriptionForm">Submit Description:</label>
            <input 
                id="descriptionForm"
                v-model="newTask.newDesc" 
                type="text" 
                name="descriptionForm" 
            >
        </div>
    </div>
    <div class="add_task">
        <button 
            class="add_task_button"
            @click="addTask()"
        >
            ADD TASK
        </button>
    </div>
</template>

<script setup>

// IMPORTS

import { ref } from 'vue'
import { useStoreTasks } from "@/stores/counter";

// Tasks

const newTask = ref({
    newTitle: "", 
    newDate: "", 
    newDesc: ""
})

const storeTasks = useStoreTasks()

const addTask = () => {
    storeTasks.addTask(newTask.value)
}


</script>