<template>
    <div class="modal_bg">
        <div class="modal_box">
            <div class="modal_top">
                <p>Delete Task</p>
                <button @click="closeModal">
                    x
                </button>
            </div>
            <div class="modal_mid">
                <p>Are you sure you want to delete your task?</p>
            </div>
            <div class="modal_bottom">
                <button
                    id="cancel_button"
                    @click="closeModal"
                >
                    Cancel
                </button>
                <button
                    id="delete_button"
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