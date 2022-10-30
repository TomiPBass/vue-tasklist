<template>
    <div class="modal_bg">
        <div class="modal_box">
            <div class="modal_top">
                <p>{{ heading }}</p>
                <button @click="closeModal">
                    x
                </button>
            </div>
            <div class="modal_mid">
                <p>{{ message }}</p>
            </div>
            <div class="modal_bottom">
                <button
                    id="cancel_button"
                    @click="$emit('close')"
                >
                    Cancel
                </button>
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
// IMPORTS
import { onMounted, onUnmounted } from 'vue';

// Props & Emits
defineProps({
    heading: {
        type: String,
        required: true
    },
    message: {
        type: String, 
        required: true
    },

})
const emit = defineEmits(['close'])

// Close Modal
const closeModal = () => {
    emit('close')
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

</script>

<style>
.modal_bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

.modal_box {
  background-color: white;
  height: 20%;
  width: 33%;
  display: grid;
  grid-template-rows: 2fr 2fr 1.3fr;
  position: absolute;
  left: 33%;
  top: 40%;
}

.modal_top {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  background-color: aquamarine;
}

.modal_top button{
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

.modal_top p{
  margin: 0
}
</style>