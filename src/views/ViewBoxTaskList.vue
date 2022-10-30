<template>
    <div class="task_plain">
        <div class="task_grid">
            <TheTaskBox 
                v-for="task in storeTasks.tasks" 
                :key="task.id" 
                :task="task"
                :task-id="task.id"
            />
        </div>
    </div>
</template>

<script setup>

// IMPORTS

import TheTaskBox from "@/components/TheTaskBox.vue";
import { useStoreTasks } from "@/stores/counter";

// CONSTS

const storeTasks = useStoreTasks();

</script>

<style>
.task_grid{
  background-color: aliceblue;
  margin: 30px 50px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 50px;
  row-gap: 50px;   
}


.task_div{
  position: relative;
  background-color: white;
  border: 3px solid rgb(187, 187, 187);
  display: grid;
  grid-template-rows: 1fr, 1fr, 2fr;
  min-height: 200px;
  border-radius: 20px;
  padding: 10px;
}

.delete_button {
  position: absolute;
  width: 60px;
  height: 25px;
  bottom: 10px;
  right: 10px;
  color: white;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: rgb(202, 37, 15);
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
}

.edit_button {
  position: absolute;
  width: 60px;
  height: 25px;
  bottom: 10px;
  left: 10px;
  color: white;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: rgb(15, 189, 202);
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
}

.delete_button:hover{
  background-color: rgb(90, 6, 6);
  border: 1px solid gray;
}
.edit_button:hover{
  background-color: rgb(7, 87, 87);
  border: 1px solid gray;
}

.task{
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
}

.task p{
  font-size: 20px;
  font-weight: bold;
  margin: 0;
  margin-bottom: 5px;
}

.date{
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;  
}

.date p{
  font-size: 20px;
  margin: 5px 0;
}

.description p{
  display: block;
  word-wrap: break-word;
}
</style>