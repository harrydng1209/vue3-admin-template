<script setup lang="ts">
import { computed, ref } from 'vue'
import { getPrimary, getdarkPrimary, getLightBorder, getSecondary } from './UpdateColors'

const chartOptions1 = computed(() => {
  return {
    chart: {
      type: 'area',
      height: 450,
      fontFamily: `inherit`,
      foreColor: getSecondary.value,
      toolbar: false
    },
    colors: [getPrimary.value, getdarkPrimary.value],
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.4,
        stops: [0, 100]
      }
    },
    grid: {
      borderColor: getLightBorder.value
    },
    xaxis: {
      axisBorder: {
        show: true,
        color: getLightBorder.value
      },
      axisTicks: {
        color: getLightBorder.value
      }
    },
    legend: {
      show: true
    }
  }
})

const chartOptions2 = computed(() => {
  return {
    chart: {
      type: 'area',
      height: 450,
      fontFamily: `inherit`,
      foreColor: '#a1aab2',
      toolbar: false
    },
    colors: [getPrimary.value, getdarkPrimary.value],
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.4,
        stops: [0, 100]
      }
    },
    grid: {
      borderColor: getLightBorder.value
    },
    xaxis: {
      axisBorder: {
        show: true,
        color: getLightBorder.value
      },
      axisTicks: {
        color: getLightBorder.value
      }
    },
    legend: {
      show: true
    },
    tooltip: {
      theme: 'dark'
    }
  }
})

const areaChart1 = {
  series: [
    {
      name: 'Page Views',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'Sessions',
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ]
}

const areaChart2 = {
  series: [
    {
      name: 'Page Views',
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 86, 115, 35]
    },
    {
      name: 'Sessions',
      data: [110, 60, 150, 35, 60, 36, 26, 45, 65, 52, 53, 41]
    }
  ]
}

const tab = ref(1)
</script>

<template>
  <VCard class="title-card" variant="text">
    <VCardItem class="pb-2 px-0 pt-0">
      <div class="d-flex justify-space-between">
        <VCardTitle class="text-h5">Unique Visitor</VCardTitle>
        <div class="d-flex flex-wrap">
          <VTabs v-model="tab" color="primary" class="tabBtn" density="compact" hide-slider>
            <VTab value="one" class="mr-1" variant="outlined" rounded="md"> Month </VTab>
            <VTab value="two" variant="outlined" rounded="md"> Week </VTab>
          </VTabs>
        </div>
      </div>
    </VCardItem>
    <VCardText class="rounded-md overflow-hidden">
      <VWindow v-model="tab">
        <VWindowItem value="one">
          <Apexchart type="area" height="450" :options="chartOptions2" :series="areaChart2.series">
          </Apexchart>
        </VWindowItem>

        <VWindowItem value="two">
          <Apexchart type="area" height="450" :options="chartOptions1" :series="areaChart1.series">
          </Apexchart>
        </VWindowItem>
      </VWindow>
    </VCardText>
  </VCard>
</template>
450
