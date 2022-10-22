<template>
    <div class="task_div">
        <div class="task">
            <p>{{ task.title }}</p>
        </div>
        <div class="date">
            <p>{{ task.date }}</p>
        </div>
        <div class="description">
            <p>{{ task.description }}</p>
            <button 
            class="delete_button"
            @click="storeTasks.deleteTask(task.id)"
            >
                Delete
            </button>
        </div>
    </div>
</template>

<script setup>

// IMPORT 

    import { useStoreTasks } from '@/stores/counter'


// Props and Constants


    const storeTasks = useStoreTasks()

    const props = defineProps({
        task: {
            type: Object,
            required: true
        }
    })

</script>