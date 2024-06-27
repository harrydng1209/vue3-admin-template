<script setup>
import NavItem from '../NavItem/NavItem.vue'

const props = defineProps({ item: Object, level: Number })
</script>

<template>
  <VListGroup no-action>
    <template v-slot:activator="{ props }">
      <VListItem v-bind="props" :value="item.title" rounded class="mb-1" color="primary">
        <template v-slot:prepend>
          <component :is="item.icon" class="iconClass" :level="level"></component>
        </template>

        <VListItemTitle class="mr-auto">{{ item.title }}</VListItemTitle>

        <VListItemSubtitle v-if="item.subCaption" class="text-caption mt-n1 hide-menu">
          {{ item.subCaption }}
        </VListItemSubtitle>
      </VListItem>
    </template>

    <template v-for="(subitem, i) in item.children" :key="i">
      <NavCollapse :item="subitem" v-if="subitem.children" :level="props.level + 1" />
      <NavItem :item="subitem" :level="props.level + 1" v-else></NavItem>
    </template>
  </VListGroup>
</template>
