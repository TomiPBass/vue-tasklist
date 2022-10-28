<template>
    <div>
        <TheHeader />
        <RouterView />
    </div>
</template>

<script setup>

// IMPORTS

import TheHeader from '@/components/TheHeader.vue'
import BoxTaskList from '@/views/ViewBoxTaskList.vue'
import LineTaskList from '@/views/ViewLineTaskList.vue'

</script>


