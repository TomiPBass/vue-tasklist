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
        <ButtonPrimary 
            @click="addTask()"
        >
            ADD TASK
        </ButtonPrimary>
    </div>
    <div class="switch_buttons">
        <RouterLink 
            class="tasks-button"
            :class="{ active: layout.isActive === 'box'}"
            to="/"
            @click="layout.isActive = 'box'"
        >
            Box
        </RouterLink>
        <RouterLink 
            class="tasks-button"
            :class="{ active: layout.isActive === 'line'}"
            to="/line"
            @click="layout.isActive = 'line'"
        >
            Line
        </RouterLink>
    </div>
</template>

<script setup>

// IMPORTS
import { reactive, ref } from 'vue'
import { useStoreTasks } from "@/stores/counter"
import ButtonPrimary from '@/components/ButtonPrimary.vue'

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

const layout = reactive({
    isActive: "box"
})

// Onclick Active

</script>

<style>
.header{
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
  background-color: white;
  margin-left: 100px;
  margin-right: 100px;
  padding: 40px 0;
  border: 3px solid rgb(187, 187, 187);
  border-radius: 50px;
}

.task_form{
  margin-left: 50px;
  font-size: 25px;
  font-weight: 500;
  display: flex;
}
#taskForm{
  width: 300px;
  margin-left: 10px;
  border: 1px solid rgb(119, 119, 119);
  border-radius: 30px;
  padding: 0 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
}

.date_form{
  font-size: 25px;
  font-weight: 500;
  display: flex;
}

#dateForm{
  width: 200px;
  margin-left: 10px;
  border: 1px solid rgb(119, 119, 119);
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  padding: 0 10px;
  font-size: 20px;
}

.desc_form{
  font-size: 25px;
  font-weight: 500;
  display: flex;
  margin-right: 50px;
}

#descriptionForm{
  width: 300px;
  margin-left: 10px;
  border: 1px solid rgb(119, 119, 119);
  border-radius: 30px;
  padding: 0 10px;
  font-family: 'Montserrat', sans-serif;
}

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
    text-decoration: none;
    cursor: pointer;
}

.active{
    color: rgb(0, 0, 0);
    border: 2px solid rgb(202, 202, 202, 0.3);
    border-bottom: none;
    background-color: rgba(214, 214, 214, 0.712);
}


.tasks-button:hover{
    color: rgb(0, 0, 0);
    border: 2px solid rgb(202, 202, 202, 0.3);
    border-bottom: none;
    background-color: rgba(214, 214, 214, 0.712);
}

</style>

