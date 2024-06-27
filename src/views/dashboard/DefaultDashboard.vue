<script setup lang="ts">
import WidgetFive from './components/WidgetFive.vue'
import UniqueVisitor from './components/UniqueVisitor.vue'
import IncomeOverview from './components/IncomeOverview.vue'
import RecentOrder from './components/RecentOrder.vue'
import AnalyticsReport from './components/AnalyticsReport.vue'
import HelpSupport from './components/HelpSupport.vue'
import TransactionHistory from './components/TransactionHistory.vue'
import SalesReport from './components/SalesReport.vue'
</script>

<template>
  <WidgetFive />

  <VRow class="mb-0">
    <VCol cols="12" md="8">
      <UniqueVisitor />
    </VCol>

    <VCol cols="12" md="4">
      <IncomeOverview />
    </VCol>
  </VRow>

  <VRow class="mb-0">
    <VCol cols="12" md="8">
      <RecentOrder />
    </VCol>

    <VCol cols="12" md="4">
      <AnalyticsReport />
    </VCol>
  </VRow>
  <VRow>
    <VCol cols="12" md="7">
      <SalesReport />
    </VCol>

    <VCol cols="12" md="5">
      <VRow>
        <VCol cols="12">
          <TransactionHistory />
        </VCol>

        <VCol cols="12">
          <HelpSupport />
        </VCol>
      </VRow>
    </VCol>
  </VRow>
</template>
