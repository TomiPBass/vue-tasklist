<template>
    <div class="edit_modal_bg">
        <div class="edit_modal_box">
            <div class="edit_modal_top">
                <p>Edit your task</p>
                <button @click="closeModal">
                    x
                </button>
            </div>
            <div class="edit_modal_mid">
                <label>Title:</label>
                <input
                    v-model="task.title"
                    type="text"
                >
                <label>Date:</label>
                <input
                    v-model="task.date"
                    type="date"
                >
                <label>Description:</label>
                <textarea
                    v-model="task.description"
                    cols="30"
                    rows="4"
                />
            </div>
            <div class="edit_modal_bottom">
                <button
                    id="cancel_button"
                    @click="$emit('close')"
                >
                    Cancel
                </button>
                <button
                    id="edit_button"
                    @click="saveClicked"
                >
                    Save
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStoreTasks } from '@/stores/counter'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// Props & Emits
const props = defineProps({  
    taskId: {
        type: String,
        required: true
    },
    editTaskClose: {
        type: Boolean,
    }
})
const emit = defineEmits(['close'])

// LIFE CYCLE HOOKS
onMounted(() => {
    router.push({query:{title:task.value.title}})
})
onUnmounted(() => {
    router.push({query:{}})
})

// REFS
const task = ref({
    title: '',
    date: '',
    description: ''
})

// STORE
const storeTasks = useStoreTasks()

// EDIT
task.value.title = storeTasks.getTaskTitle(props.taskId)
task.value.date = storeTasks.getTaskDate(props.taskId)
task.value.description = storeTasks.getTaskDesc(props.taskId)

// Save
const saveClicked = () => {
    storeTasks.updateTask(props.taskId, task.value)
    storeTasks.sortTasks()
    emit('close')
}
</script>

<style>
.edit_modal_bg{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
}
.edit_modal_box {
  background-color: white;
  height: auto;
  width: 40%;
  display: grid;
  grid-template-rows: .7fr 3fr .5fr;
  position: absolute;
  left: 30%;
  top: 30%;
}
.edit_modal_top {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  background-color: aquamarine;
}
.edit_modal_top button{
  position: absolute;
  top: 0;
  right: 0;
  padding-bottom: 2px;
  font-weight: bold;
  background-color: rgb(170, 2, 2);
  color: white;
  border: 0;
  border-bottom: .5px solid rgb(0, 0, 0);
  border-left: .5px solid rgb(0, 0, 0);
  cursor: pointer;
}
.edit_modal_top p{
  margin: 10px
}
.edit_modal_mid {
  text-align: center;
  display: grid;
  grid-template-rows: 1fr 2fr 1fr 2fr 1fr 4fr;
  align-items: center;
  font-size: 20px;
  padding: 5px 80px;
}
.edit_modal_mid input{
  text-align: center;
  font-size: 15px;
  height: 25px;
  font-family: Montserrat;
}
.edit_modal_mid textarea{
  text-align: center;
  font-size: 15px;
  font-family: Montserrat;
}
.edit_modal_bottom {
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
#edit_button {
  border: 1px solid;
  position: absolute;
  right: 3%;
  padding: 3px 10px;
  font-size: 15px;
  font-weight: bold;
  background-color: rgb(15, 189, 202);
  color: white;
  border: 1px solid gray;
  cursor: pointer;
}
@media (max-width: 867px){
  .edit_modal_box {
  width: 100%;
  left: 0;
  top: 30%;
  }
}

</style>