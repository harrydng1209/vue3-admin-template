<script setup>
const props = defineProps({ item: Object })
</script>

<template>
  <VListSubheader color="lightText" class="smallCap text-subtitle-2">
    {{ $t(props.item.header) }}
  </VListSubheader>
</template>
