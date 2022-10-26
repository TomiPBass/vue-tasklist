<template>
    <div class="modal">
        <div 
            class="modal-card"
        >
            <div class="modal-card-head">
                <p class="modal-card-title">
                    Delete note
                </p>
                <button
                    class="close-modal-button"
                    @click="closeModal"
                >
                    X
                </button>
            </div>
            <div class="modal-card-body">
                <p>Are you sure you want to delete this task?</p>
            </div>
            <div class="modal-card-foot">
                <button 
                    class="close-button-modal"
                    @click="closeModal"
                >
                    Cancel
                </button>
                <button 
                    class="delete-button-modal"
                    @click="storeTasks.deleteTask(taskId)"
                >
                    Delete
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>

import { onMounted, onUnmounted } from 'vue';
import { useStoreTasks } from '@/stores/counter' 


// Props & Emits


defineProps({
    modelValue: {
        type: Boolean,
        default: false
    },
    taskId: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['update:modelValue'])


// Store


const storeTasks = useStoreTasks()


// Close Modal


const closeModal = () => {
    emit('update:modelValue', false)
}
const handleKeyboard = e => {
    if (e.key === "Escape") closeModal()
}
onMounted(() => {
    document.addEventListener('keyup', handleKeyboard)
})
onUnmounted(() => {
    document.removeEventListener('keyup', handleKeyboard)
})

// Close modal by clicking outside



</script>