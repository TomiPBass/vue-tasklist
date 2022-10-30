<template>
    <div>
        <TheHeader />
        <RouterView />
    </div>
</template>

<script setup>

// IMPORTS

import TheHeader from '@/components/TheHeader.vue'


</script>

<style>
.task_plain{
  background-color: aliceblue;
  margin: 0 100px;
  height: auto;
  min-height: 900px;
  border: 3px solid rgb(187, 187, 187);
  border-radius: 50px;
}
</style>

