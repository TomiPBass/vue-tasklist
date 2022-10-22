<template>
    <div class="header">
      <div class="task_form">
        <label for="submit_taskForm">Submit Task:</label>
        <input 
        v-model="newTask.newTitle"
        type="text" 
        name="taskForm" 
        id="taskForm" 
        />
      </div>
      <div class="date_form">
        <label for="submit_dateForm">Submit Date:</label>
        <input 
        v-model="newTask.newDate"
        type="date" 
        name="dateForm" 
        id="dateForm" 
        />
      </div>
      <div class="desc_form">
        <label for="submit_descriptionForm">Submit Description:</label>
        <input 
        v-model="newTask.newDesc"
        type="text" 
        name="descriptionForm" 
        id="descriptionForm" 
        />
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