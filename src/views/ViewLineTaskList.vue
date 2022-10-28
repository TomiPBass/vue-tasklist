<template>
    <div class="todo_plain">
        <div class="todo_line_grid">
            <TheTaskLine
                v-for="task in storeTasks.tasks" 
                :key="task.id" 
                :task="task"
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