<template>
    <div class="todo_plain">
        <div class="todo_grid">
            <TheTaskBox 
                v-for="task in storeTasks.tasks" 
                :key="task.id" 
                :task="task"
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