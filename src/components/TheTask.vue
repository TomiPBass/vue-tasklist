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
            <button class="delete_button">
                Delete
            </button>
        </div>
    </div>
</template>

<script setup>

// IMPORT 

    const props = defineProps({
        task: {
            type: Object,
            required: true
        }
    })

</script>