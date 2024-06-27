<script setup lang="ts">
const props = defineProps({
  title: String
})
</script>

<template>
  <VCard variant="outlined" elevation="0" class="withbg">
    <VCardItem>
      <div class="d-sm-flex align-center justify-space-between">
        <VCardTitle class="text-h6" style="line-height: 1.57">{{ props.title }}</VCardTitle>
        <slot name="action"></slot>
      </div>
    </VCardItem>
    <VDivider></VDivider>
    <VCardText>
      <slot />
    </VCardText>
  </VCard>
</template>
