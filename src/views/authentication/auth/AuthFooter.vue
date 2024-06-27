<script setup lang="ts">
import { shallowRef } from 'vue'

const footerLink = shallowRef([
  {
    title: 'Terms and Conditions'
  },
  {
    title: 'Privacy Policy'
  },
  {
    title: 'CA Privacy Notice'
  }
])
</script>
<template>
  <VFooter class="px-0 pt-2">
    <VRow justify="center" no-gutters>
      <VCol cols="12" md="6" class="text-md-left text-center">
        <p class="text-subtitle-2 text-lightText mb-md-0 mb-4">
          This site is protected by
          <a href="/" class="text-primary">Privacy Policy</a>
        </p>
      </VCol>
      <VCol class="d-flex flex-md-row flex-column justify-md-end align-center" cols="12" md="6">
        <a
          v-for="(item, i) in footerLink"
          :key="i"
          class="mx-md-3 mx-2 mb-md-0 mb-2 text-subtitle-2 text-lightText"
          href="https://codedthemes.com"
          target="_blank"
        >
          {{ item.title }}
        </a>
      </VCol>
    </VRow>
  </VFooter>
</template>
