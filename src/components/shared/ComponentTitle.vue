<script setup lang="ts">
import { GlobalOutlined, NodeExpandOutlined } from '@ant-design/icons-vue'

const props = defineProps({
  title: String,
  subContent: String,
  path: String,
  link: String
})
</script>

<template>
  <VRow class="mb-0 mt-n3">
    <VCol cols="12" md="12">
      <VCard elevation="0" variant="text">
        <VRow no-gutters class="align-center">
          <VCol sm="12">
            <h2 class="text-h2 mb-2">{{ props.title }}</h2>
            <h6 class="text-h6 text-lightText mb-5">{{ props.subContent }}</h6>
            <div class="d-flex align-center mb-2 text-caption text-lightText">
              <NodeExpandOutlined class="mr-2" />
              <span>{{ props.path }}</span>
            </div>
            <a
              :href="props.link"
              class="d-inline-flex align-center text-primary text-caption link-hover"
              target="_blank"
            >
              <GlobalOutlined class="mr-2" />
              <span>{{ props.link }}</span>
            </a>
          </VCol>
        </VRow>
      </VCard>
    </VCol>
  </VRow>
</template>
