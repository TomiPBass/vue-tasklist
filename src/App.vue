<template>
    <div>
        <h1 id="website_title">
            TOMI'S Universal EventList
        </h1>
        <AddTask />
        <RouterView />
    </div>
</template>

<script setup>

// IMPORTS

import AddTask from '@/components/AddTask.vue'


</script>

<style>
#website_title{
  text-align: center;
  color: white;
  font-size: 50px;
  margin: 15px 0;
  text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
               0px 8px 13px rgba(0,0,0,0.1),
               0px 18px 23px rgba(0,0,0,0.1);

}

.task_plain{
  background-color: aliceblue;
  margin: 0 100px;
  height: auto;
  min-height: 900px;
  border: 3px solid rgb(187, 187, 187);
  border-radius: 50px;
}
</style>

