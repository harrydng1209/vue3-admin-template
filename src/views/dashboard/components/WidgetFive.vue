<script setup lang="ts">
import { shallowRef } from 'vue'
import { RiseOutlined, FallOutlined } from '@ant-design/icons-vue'

const fivecards = shallowRef([
  {
    name: 'Total Page Views',
    earn: '4,42,236',
    percent: '59.3%',
    color: 'primary',
    icon: RiseOutlined,
    text: '35,000'
  },
  {
    name: 'Total Users',
    earn: '78,250',
    percent: '70.5%',
    color: 'success',
    icon: RiseOutlined,
    text: '8,900'
  },
  {
    name: 'Total Order',
    earn: '18,800',
    percent: '27.4%',
    color: 'warning',
    icon: FallOutlined,
    text: '1,943'
  },
  {
    name: 'Total Sales',
    earn: '$35,078',
    percent: '27.4%',
    color: 'error',
    icon: FallOutlined,
    text: '$20,395'
  }
])
</script>

<template>
  <VRow class="my-0">
    <VCol cols="12" sm="6" md="3" v-for="(card5, i) in fivecards" :key="i" :value="card5">
      <VCard elevation="0">
        <VCard variant="outlined">
          <VCardText>
            <div class="d-flex align-items-center justify-space-between">
              <div>
                <h6 class="text-h6 text-lightText mb-1">{{ card5.name }}</h6>
                <h4 class="text-h4 d-flex align-center mb-0">
                  {{ card5.earn }}
                  <VChip :color="card5.color" class="combined ml-2" size="small" label>
                    <template v-slot:prepend>
                      <component
                        :is="card5.icon"
                        :style="{ fontSize: '12px' }"
                        :class="'mr-1 text-' + card5.color"
                      />
                    </template>
                    {{ card5.percent }}
                  </VChip>
                </h4>
                <span class="text-lightText text-caption pt-5 d-block"
                  >You made an extra
                  <span :class="'text-' + card5.color">{{ card5.text }}</span> this year</span
                >
              </div>
            </div>
          </VCardText>
        </VCard>
      </VCard>
    </VCol>
  </VRow>
</template>
