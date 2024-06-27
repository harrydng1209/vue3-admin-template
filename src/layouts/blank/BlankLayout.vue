<template>
  <VApp>
    <LoaderWrapper />
    <RouterView />
  </VApp>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import LoaderWrapper from '../dashboard/LoaderWrapper.vue'
</script>
