<script setup lang="ts">
import { ref } from 'vue'
import {
  CheckCircleOutlined,
  GiftOutlined,
  MessageOutlined,
  SettingOutlined,
  BellOutlined
} from '@ant-design/icons-vue'

const isActive = ref(true)

function deactivateItem() {
  isActive.value = false
}
</script>

<template>
  <VMenu :close-on-content-click="false" offset="6, 0">
    <template v-slot:activator="{ props }">
      <VBtn
        icon
        class="text-secondary ml-sm-2 ml-1"
        color="darkText"
        rounded="sm"
        size="small"
        v-bind="props"
      >
        <VBadge :content="isActive ? '2' : '0'" color="primary" offset-x="-4" offset-y="-5">
          <BellOutlined :style="{ fontSize: '16px' }" />
        </VBadge>
      </VBtn>
    </template>

    <VSheet rounded="md" width="387" class="notification-dropdown">
      <div class="pa-4">
        <div class="d-flex align-center justify-space-between">
          <h6 class="text-subtitle-1 mb-0">Notifications</h6>
          <VBtn
            variant="text"
            color="success"
            icon
            rounded
            size="small"
            @click="deactivateItem()"
            :class="isActive ? 'd-block' : 'd-none'"
          >
            <CheckCircleOutlined :style="{ fontSize: '16px' }" />
            <VTooltip
              aria-label="tooltip"
              activator="parent"
              location="bottom"
              :content-class="isActive ? 'custom-tooltip' : 'd-none'"
            >
              <span class="text-caption">Mark as all read</span>
            </VTooltip>
          </VBtn>
        </div>
      </div>

      <VDivider></VDivider>

      <PerfectScrollbar style="height: calc(100vh - 300px); max-height: 265px">
        <VList class="py-0" lines="two" aria-label="notification list" aria-busy="true">
          <VListItem value="1" color="secondary" class="no-spacer py-1" :active="isActive">
            <template v-slot:prepend>
              <VAvatar size="36" variant="flat" color="lightsuccess" class="mr-3 py-2 text-success">
                <GiftOutlined />
              </VAvatar>
            </template>
            <div class="d-inline-flex justify-space-between w-100">
              <h6 class="text-subtitle-1 font-weight-regular mb-0">
                It's <span style="font-weight: 600">Cristina danny's</span> birthday today.
              </h6>
              <span class="text-caption">3:00 AM</span>
            </div>

            <p class="text-caption text-medium-emphasis my-0">2 min ago</p>
          </VListItem>

          <VDivider></VDivider>

          <VListItem value="2" color="secondary" class="no-spacer">
            <template v-slot:prepend>
              <VAvatar size="36" variant="flat" color="lightprimary" class="mr-3 py-2 text-primary">
                <MessageOutlined />
              </VAvatar>
            </template>
            <div class="d-inline-flex justify-space-between w-100">
              <h6 class="text-subtitle-1 font-weight-regular mb-0">
                <span style="font-weight: 600">Aida Burg</span> commented your post.
              </h6>
              <span class="text-caption">6:00 PM</span>
            </div>

            <p class="text-caption text-medium-emphasis my-0">5 August</p>
          </VListItem>

          <VDivider></VDivider>

          <VListItem value="3" color="secondary" class="no-spacer" :active="isActive">
            <template v-slot:prepend>
              <VAvatar size="36" variant="flat" color="lighterror" class="mr-3 py-2 text-error">
                <SettingOutlined />
              </VAvatar>
            </template>
            <div class="d-inline-flex justify-space-between w-100">
              <h6 class="text-subtitle-1 font-weight-regular mb-0">
                Your Profile is Complete <span style="font-weight: 600">60%</span>
              </h6>
              <span class="text-caption">2:45 PM</span>
            </div>

            <p class="text-caption text-medium-emphasis my-0">7 hours ago</p>
          </VListItem>

          <VDivider></VDivider>

          <VListItem value="4" color="secondary" class="no-spacer">
            <template v-slot:prepend>
              <VAvatar size="36" variant="flat" color="lightprimary" class="mr-3 py-2 text-primary">
                C
              </VAvatar>
            </template>
            <div class="d-inline-flex justify-space-between w-100">
              <h6 class="text-subtitle-1 font-weight-regular mb-0">
                <span style="font-weight: 600">Cristina Danny</span> invited to join
                <span style="font-weight: 600">Metting.</span>
              </h6>
              <span class="text-caption">9:10 PM</span>
            </div>

            <p class="text-caption text-medium-emphasis my-0">Daily scrum meeting time</p>
          </VListItem>
        </VList>
      </PerfectScrollbar>

      <VDivider></VDivider>

      <div class="pa-2 text-center">
        <VBtn color="primary" variant="text">View All</VBtn>
      </div>
    </VSheet>
  </VMenu>
</template>

<style lang="scss">
.v-tooltip {
  > .v-overlay__content.custom-tooltip {
    padding: 2px 6px;
  }
}
</style>
