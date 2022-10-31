<template>
    <div class="task_plain">
        <div class="task_line_grid">
            <TheTaskLine
                v-for="task in storeTasks.tasks" 
                :key="task.id" 
                :task="task"
                :displayed-task="task"
                :task-id="task.id"
            />
        </div>
    </div>
</template>


<script setup>

// IMPORTS

import TheTaskLine from "@/components/TheTaskLine.vue";
import { useStoreTasks } from "@/stores/counter";

// CONSTS

const storeTasks = useStoreTasks();

</script>

<style>
.task_line_grid{
  background-color: aliceblue;
  display: grid;
  margin-top: 10px;
  grid-template-rows: auto ;
  row-gap: 20px;   
  padding-top: 30px;
  border-radius: 220px;
}


.taskLine_div{
  position: relative;
  background-color: white;
  width: 100%;
  border-top: 3px solid rgb(187, 187, 187);
  border-bottom: 3px solid rgb(187, 187, 187);
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  column-gap: 30px;
  min-height: 20px;
}

.taskLine_delete_button {
  position: absolute;
  width: 20%;
  min-width: 30px;
  max-width: 200px;
  top: 10px;
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

.taskLine_edit_button {
  position: absolute;
  width: 20%;
  min-width: 30px;
  max-width: 200px;
  top: 10px;
  bottom: 10px;
  right: 15%;
  color: white;
  font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  font-weight: 600;
  letter-spacing: 1px;
  background-color: rgb(15, 189, 202);
  border: 1px solid gray;
  border-radius: 5px;
  cursor: pointer;
}


.taskLine_delete_button:hover{
  background-color: rgb(11, 129, 129);
  border: 1px solid gray;
}

.taskLine{
  display: flex;
  align-items: center;

}

.taskLine p{
  font-size: 25px;
  font-weight: bold;
  margin: 0;
  margin-left: 20px;
}

.taskLine_date{
  display: flex;
  align-items: center;
}

.taskLine_date p{
  font-size: 20px;
  margin: 15px
}

@media (max-width: 1650px){
  .taskLine_delete_button{
    max-width: 140px
  }
  .taskLine_edit_button {
    max-width: 140px;
  }
}

@media (max-width: 1090px){
  .taskLine_delete_button{
    max-width: 150px
  }
  .taskLine_edit_button {
    max-width: 150px;
    right: 18%
  }
}

@media (max-width: 900px){
  .taskLine_delete_button{
    max-width: 70px
  }
  .taskLine_edit_button {
    max-width: 70px;
    right: 15%
  }
}

</style>