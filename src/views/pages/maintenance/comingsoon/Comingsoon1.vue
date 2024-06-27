<script>
import { ref } from 'vue'

export default {
  name: 'CounterCards',
  setup() {
    const years = ref(0)
    const days = ref(0)
    const hours = ref(0)
    const minutes = ref(0)
    const seconds = ref(0)
    const lunchDate = new Date('30 Octobar 2023')

    setInterval(() => {
      const currentDate = new Date()
      const lunchTime = lunchDate - currentDate
      seconds.value = parseInt(lunchTime / 1000)
      minutes.value = parseInt(seconds.value / 60)
      hours.value = parseInt(minutes.value / 60)
      days.value = parseInt(hours.value / 24)
      years.value = parseInt(days.value / 365)
    }, 1000)
    return { years, days, hours, minutes, seconds }
  }
}
</script>

<template>
  <VRow no-gutters class="bg-containerBg">
    <VCol cols="12" class="d-flex align-center justify-center">
      <div class="text-center">
        <div class="ComingsoonWrapper my-6">
          <img src="@/assets/images/maintenance/coming-soon.png" alt="maintenance" class="w-100" />
        </div>
        <h1 class="text-h1 mb-2 mt-sm-12">Coming Soon</h1>
        <small class="text-h6 text-lightText">Something new is on it's way</small>
        <div class="max450 align-center mt-5">
          <VRow class="ma-0 comingsoon-timer overflow-hidden">
            <VCol cols="3" sm="3">
              <VCard variant="outlined" class="withbg">
                <VCardText class="pa-0">
                  <VSheet rounded="md" class="Timeblock text-h2 py-3 px-1"
                    >{{ days % 365 }}
                  </VSheet>
                  <h6 class="pa-1 bg-gray100 text-caption mb-0">day</h6>
                </VCardText>
              </VCard>
            </VCol>
            <VCol cols="3" sm="3">
              <VCard variant="outlined" class="withbg">
                <VCardText class="pa-0">
                  <VSheet rounded="md" class="Timeblock text-h2 py-3 px-1">{{ hours % 24 }}</VSheet>
                  <h6 class="pa-1 bg-gray100 text-caption mb-0">hour</h6>
                </VCardText>
              </VCard>
            </VCol>
            <VCol cols="3" sm="3">
              <VCard variant="outlined" class="withbg">
                <VCardText class="pa-0">
                  <VSheet rounded="md" class="Timeblock text-h2 py-3 px-1">{{
                    minutes % 60
                  }}</VSheet>
                  <h6 class="pa-1 bg-gray100 text-caption mb-0">minute</h6>
                </VCardText>
              </VCard>
            </VCol>
            <VCol cols="3" sm="3">
              <VCard variant="outlined" class="withbg">
                <VCardText class="pa-0">
                  <VSheet rounded="md" class="Timeblock text-h2 py-3 px-1">{{
                    seconds % 60
                  }}</VSheet>
                  <h6 class="pa-1 bg-gray100 text-caption mb-0">second</h6>
                </VCardText>
              </VCard>
            </VCol>
          </VRow>
        </div>
        <VRow class="ma-0">
          <VCol cols="12" class="pt-7 pb-0">
            <h6 class="text-h6 text-secondary mb-3">
              Be the first to be notified when Mantis launches.
            </h6>
          </VCol>
          <VCol cols="12" class="d-sm-flex gap-2 align-center pt-0">
            <VTextField
              variant="outlined"
              label="Email Address"
              color="primary"
              hide-details
            ></VTextField>
            <VBtn color="primary" elevation="0" class="mt-4 mt-sm-0">Notify Me</VBtn>
          </VCol>
        </VRow>
      </div>
    </VCol>
  </VRow>
</template>
<style lang="scss">
.max450 {
  max-width: 450px;
  margin: 0 auto;
}
.Timeblock {
  @media (max-width: 768px) {
    font-size: 1.25rem !important;
    line-height: 1.4;
  }
}
.ComingsoonWrapper {
  @media (min-width: 0px) {
    height: 310px;
    width: 360px;
    margin-inline: auto;
  }
  @media (min-width: 768px) {
    height: 420px;
    width: auto;
  }
}
.comingsoon-timer {
  > div {
    padding: 20px;
    position: relative;
    @media (max-width: 768px) {
      padding: 12px;
    }
    &::before {
      position: absolute;
      content: ':';
      font-weight: 600;
      font-size: 2.375rem;
      line-height: 1.21;
      padding-left: 16px;
      top: 50%;
      transform: translateY(-50%);
      right: -6px;
      @media (max-width: 768px) {
        right: -5px;
      }
    }
    &:nth-last-child(-n + 1) {
      &::before {
        display: none;
      }
    }
  }
}
</style>
