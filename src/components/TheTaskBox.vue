<template>
    <ConfirmDelete
        v-if="modals.confirmDelete"
        :task-id="task.id"
        @close="modals.confirmDelete = false"
    />
    <ConfirmEdit
        v-if="modals.confirmEdit"
        :key="task.id"
        @edit="openEdit"
        @close="modals.confirmEdit = false"
    />
    <EditTaskModal 
        v-if="modals.editTask"
        :task-id="task.id"
        :edit-task-close="modals.editTask"
        @close="modals.editTask = false"
    />
    <div class="task_div">
        <div class="task">
            <p>{{ task.title }}</p>
        </div>
        <div class="date">
            <p>{{ date }}</p>
        </div>
        <div class="description">
            <p>{{ task.description }}</p>
            <button 
                class="delete_button"
                @click="modals.confirmDelete = true"
            >
                Delete
            </button>
            <button 
                class="edit_button"
                @click="modals.confirmEdit = true"
            >
                Edit
            </button>
        </div>
    </div>
</template>

<script setup>

// IMPORT 
import { computed, reactive } from 'vue'
import { useStoreTasks } from '@/stores/counter'
import ConfirmDelete from '@/components/ConfirmDelete.vue'
import ConfirmEdit from '@/components/ConfirmEdit.vue'
import EditTaskModal from '@/components/EditTaskModal.vue'



// STORE AND PROPS
const storeTasks = useStoreTasks()

const props = defineProps({
    task: {
        type: Object,
        required: true
    },
    taskId: {
        type: String,
        required: true
    }
})

// Formated date
const date = computed(() => storeTasks.getTaskDateFormated(props.taskId))


// MODALS
const modals = reactive({
    confirmDelete: false,
    confirmEdit: false,
    editTask: false,
})



// OPEN EDIT
const openEdit = () => {
    modals.confirmEdit = false 
    modals.editTask = true 
}


</script>