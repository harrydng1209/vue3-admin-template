<script setup lang="ts">
const props = defineProps({
  title: String,
  /* eslint-disable @typescript-eslint/no-explicit-any */
  breadcrumbs: Array as any,
  icon: String
})
</script>

<template>
  <VRow class="page-breadcrumb mb-0 mt-n2">
    <VCol cols="12" md="12">
      <VCard elevation="0" variant="text">
        <VRow no-gutters class="align-center">
          <VCol sm="12">
            <VBreadcrumbs :items="props.breadcrumbs" class="text-h6 pa-1 font-weight-medium mb-0">
              <template v-slot:divider>
                <div class="d-flex align-center">/</div>
              </template>

              <template v-slot:prepend>
                <RouterLink to="/" class="text-lightText text-h6 text-decoration-none">
                  Home
                </RouterLink>
                <div class="d-flex align-center px-2">/</div>
              </template>
            </VBreadcrumbs>
            <h3 class="text-h3 mt-1 mb-0">{{ props.title }}</h3>
          </VCol>
        </VRow>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
.page-breadcrumb {
  .v-toolbar {
    background: transparent;
  }
}
</style>
