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
    <div class="switch_buttons">
        <RouterLink 
            class="tasks-button"
            to="/"
        >
            Box
        </RouterLink>
        <RouterLink 
            class="tasks-button"
            to="/line"
        >
            Line
        </RouterLink>
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

<style>
.switch_buttons {
    height: auto;
    margin: 0;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-content: center;
}
.tasks-button{
    font-size: 30px;
    margin: 0 20px;
    padding: 3px 10px;
    color: rgb(202, 202, 202);
    border: 2px solid rgb(202, 202, 202);
    border-bottom: none;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
}

.tasks-button:hover{
    color: rgb(0, 0, 0);
    border: 2px solid rgb(202, 202, 202, 0.3);
    border-bottom: none;
    background-color: rgba(214, 214, 214, 0.712);
}

</style>

