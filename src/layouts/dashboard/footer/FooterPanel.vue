<script setup lang="ts">
import { shallowRef } from 'vue'

const footerLink = shallowRef([
  {
    title: 'About us'
  },
  {
    title: 'Privacy'
  },
  {
    title: 'Terms'
  }
])
</script>
<template>
  <VFooter class="px-0 footer">
    <VRow justify="center" no-gutters>
      <VCol cols="6">
        <p class="text-caption mb-0">© All rights reserved</p>
      </VCol>
      <VCol class="text-right" cols="6">
        <a
          v-for="(item, i) in footerLink"
          :key="i"
          class="mx-2 text-caption text-darkText"
          href="/"
        >
          {{ item.title }}
        </a>
      </VCol>
    </VRow>
  </VFooter>
</template>
