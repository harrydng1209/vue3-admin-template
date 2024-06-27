<script setup>
const props = defineProps({ item: Object, level: Number })
</script>

<template>
  <VListItem
    :to="item.type === 'external' ? '' : item.to"
    :href="item.type === 'external' ? item.to : ''"
    rounded
    class="mb-1"
    color="primary"
    :disabled="item.disabled"
    :target="item.type === 'external' ? '_blank' : ''"
  >
    <template v-slot:prepend>
      <component :is="props.item.icon" class="iconClass" :level="props.level"></component>
    </template>
    <VListItemTitle>{{ $t(item.title) }}</VListItemTitle>

    <VListItemSubtitle v-if="item.subCaption" class="text-caption mt-n1 hide-menu">
      {{ item.subCaption }}
    </VListItemSubtitle>

    <template v-slot:append v-if="item.chip">
      <VChip
        label
        :color="item.chipColor"
        class="sidebarchip hide-menu"
        size="small"
        :variant="item.chipVariant"
        :prepend-icon="item.chipIcon"
      >
        {{ item.chip }}
      </VChip>
    </template>
  </VListItem>
</template>
