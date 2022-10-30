<template>
    <ConfirmDelete
        v-if="modals.deleteTask"
        :task-id="displayedTask.id"
        @close="modals.deleteTask = false"
    />
    <div class="taskLine_div">
        <div class="taskLine">
            <p>{{ displayedTask.title }}</p>
        </div>
        <div class="taskLine_date">
            <p>{{ displayedTask.date }}</p>
        </div>
        <button 
            class="taskLine_delete_button"
            @click="modals.deleteTask = true"
        >
            Delete
        </button>
    </div>
</template>

<script setup>

// IMPORT 
import { reactive } from 'vue'
import ConfirmDelete from '@/components/ConfirmDelete.vue'

// STORE AND PROPS
defineProps({
    displayedTask: {
        type: Object,
        required: true
    }
})

// MODALS
const modals = reactive({
    deleteTask: false
})
</script>
