<script setup lang="ts">
import { RouterView } from 'vue-router'
import LoaderWrapper from './LoaderWrapper.vue'
import VerticalSidebarVue from './vertical-sidebar/VerticalSidebar.vue'
import VerticalHeaderVue from './vertical-header/VerticalHeader.vue'
import FooterPanel from './footer/FooterPanel.vue'
</script>

<template>
  <VLocaleProvider>
    <VApp :class="[]">
      <VerticalSidebarVue />
      <VerticalHeaderVue />

      <VMain class="page-wrapper">
        <VContainer>
          <div>
            <LoaderWrapper />
            <RouterView />
          </div>
        </VContainer>

        <VContainer class="pt-0">
          <div>
            <FooterPanel />
          </div>
        </VContainer>
      </VMain>
    </VApp>
  </VLocaleProvider>
</template>
