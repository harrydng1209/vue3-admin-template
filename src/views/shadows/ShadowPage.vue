<script setup lang="ts">
import { ref } from 'vue'
import BaseBreadcrumb from '@/components/shared/BaseBreadcrumb.vue'
import UiParentCard from '@/components/shared/UiParentCard.vue'

const page = ref({ title: 'Shadows' })
const breadcrumbs = ref([
  {
    title: 'Color',
    disabled: true,
    href: '#'
  }
])

const colorShadow = ref(['primary', 'secondary', 'info', 'success', 'warning', 'error'])
</script>

<template>
  <BaseBreadcrumb :title="page.title" :breadcrumbs="breadcrumbs"></BaseBreadcrumb>
  <VRow>
    <VCol cols="12" md="12">
      <UiParentCard title="Basic Shadow">
        <VRow justify="center">
          <VCol v-for="n in 25" :key="n" cols="auto">
            <VCard
              height="100"
              width="100"
              class="mb-5"
              :class="['d-flex justify-center align-center flex-column', `elevation-${n}`]"
            >
              <h6 class="text-h6">elevation</h6>
              <div>{{ n - 1 }}</div>
            </VCard>
          </VCol>
        </VRow>
      </UiParentCard>
    </VCol>
    <VCol cols="12" md="12">
      <UiParentCard title="Color Shadow">
        <VRow>
          <VCol cols="6" lg="2" md="3" sm="4" v-for="color in colorShadow" :key="color">
            <VCard :class="`${color}-shadow bg-${color} px-4 py-6 text-center`">
              {{ color }}
            </VCard>
          </VCol>
        </VRow>
      </UiParentCard>
    </VCol>
  </VRow>
</template>
