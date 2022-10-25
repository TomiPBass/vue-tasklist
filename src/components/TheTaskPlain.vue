<template>
    <div class="todo_plain">
        <div class="todo_grid">
            <TheTask 
                v-for="task in storeTasks.tasks" 
                :key="task.id" 
                :task="task"
            />
        </div>
    </div>
</template>

<script setup>

// IMPORTS

import TheTask from "@/components/TheTask.vue";
import { useStoreTasks } from "@/stores/counter";

// CONSTS

const storeTasks = useStoreTasks();

</script>
