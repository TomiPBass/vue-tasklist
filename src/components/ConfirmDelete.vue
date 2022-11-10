<template>
    <ConfirmModal
        heading="Delete Task"
        message="Are you sure you want to delete your task?"
        @close="$emit('close')"
    >
        <button
            id="delete_button"
            @click="storeTasks.deleteTask(taskId)"
        >
            Delete
        </button>
    </ConfirmModal>
</template>

<script setup>
import { useStoreTasks } from '@/stores/counter'
import ConfirmModal from '@/components/ConfirmModal.vue'

// Props & Emits
defineProps({
    taskId: {
        type: String,
        required: true
    }
})
defineEmits(['close'])

// Store
const storeTasks = useStoreTasks()

</script>

<style>
.modal_mid {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
}
.modal_bottom {
  background-color: rgb(219, 230, 226);
  display: flex;
  justify-content: center;
  align-items: center;
}
#cancel_button {
  border: 1px solid;
  position: absolute;
  left: 3%;
  padding: 3px 10px;
  font-size: 15px;
  font-weight: bold;
  background-color: rgb(187, 187, 187);
  border: 1px solid gray;
  cursor: pointer;
}
#delete_button {
  border: 1px solid;
  position: absolute;
  right: 3%;
  padding: 3px 10px;
  font-size: 15px;
  font-weight: bold;
  background-color: rgb(170, 4, 4);
  color: white;
  border: 1px solid gray;
  cursor: pointer;
}
</style>