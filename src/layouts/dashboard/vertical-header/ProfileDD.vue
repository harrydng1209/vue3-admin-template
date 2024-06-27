<script setup lang="ts">
import { ref } from 'vue'
import {
  LogoutOutlined,
  UserOutlined,
  SettingOutlined,
  QuestionCircleOutlined,
  LockOutlined,
  CommentOutlined,
  UnorderedListOutlined,
  EditOutlined,
  ProfileOutlined,
  WalletOutlined
} from '@ant-design/icons-vue'
import { useAuthStore } from '@/stores/auth'

const tab = ref(null)
const authStore = useAuthStore()
</script>

<template>
  <div>
    <div class="d-flex align-center pa-5">
      <VAvatar size="32" class="mr-2">
        <img src="@/assets/images/users/avatar-1.png" width="32" alt="Julia" />
      </VAvatar>
      <div>
        <h6 class="text-h6 mb-0">JWT User</h6>
        <p class="text-caption mb-0">UI/UX Designer</p>
      </div>
      <div class="ml-auto">
        <VBtn
          variant="text"
          color="primary"
          rounded="sm"
          icon
          size="large"
          @click="authStore.logout()"
        >
          <LogoutOutlined :style="{ fontSize: '20px' }" />
        </VBtn>
      </div>
    </div>

    <VTabs v-model="tab" color="primary" grow>
      <VTab value="111"> <UserOutlined class="v-icon--start" /> Profile </VTab>
      <VTab value="222"> <SettingOutlined class="v-icon--start" /> Setting </VTab>
    </VTabs>

    <PerfectScrollbar style="height: calc(100vh - 300px); max-height: 240px">
      <VWindow v-model="tab">
        <VWindowItem value="111">
          <VList class="py-0" aria-label="profile list" aria-busy="true">
            <VListItem color="primary" rounded="0" value="Edit profile">
              <template v-slot:prepend>
                <EditOutlined :style="{ fontSize: '14px' }" class="mr-4" />
              </template>

              <VListItemTitle class="text-h6"> Edit Profile</VListItemTitle>
            </VListItem>

            <VListItem color="primary" rounded="0" value="View Profile">
              <template v-slot:prepend>
                <UserOutlined :style="{ fontSize: '14px' }" class="mr-4" />
              </template>

              <VListItemTitle class="text-h6"> View Profile</VListItemTitle>
            </VListItem>

            <VListItem color="primary" rounded="0" value="Social Profile">
              <template v-slot:prepend>
                <ProfileOutlined :style="{ fontSize: '14px' }" class="mr-4" />
              </template>

              <VListItemTitle class="text-h6"> Social Profile</VListItemTitle>
            </VListItem>

            <VListItem color="primary" rounded="0" value="Billing">
              <template v-slot:prepend>
                <WalletOutlined :style="{ fontSize: '14px' }" class="mr-4" />
              </template>

              <VListItemTitle class="text-h6"> Billing</VListItemTitle>
            </VListItem>

            <VListItem @click="authStore.logout()" color="secondary" rounded="0">
              <template v-slot:prepend>
                <LogoutOutlined :style="{ fontSize: '14px' }" class="mr-4" />
              </template>

              <VListItemTitle class="text-subtitle-2"> Logout</VListItemTitle>
            </VListItem>
          </VList>
        </VWindowItem>

        <VWindowItem value="222">
          <VList class="py-0" aria-label="profile list" aria-busy="true">
            <VListItem color="primary" rounded="0" value="Support">
              <template v-slot:prepend>
                <QuestionCircleOutlined :style="{ fontSize: '14px' }" class="mr-4" />
              </template>

              <VListItemTitle class="text-h6"> Support</VListItemTitle>
            </VListItem>

            <VListItem color="primary" rounded="0" value="Account">
              <template v-slot:prepend>
                <UserOutlined :style="{ fontSize: '14px' }" class="mr-4" />
              </template>

              <VListItemTitle class="text-h6"> Account settings</VListItemTitle>
            </VListItem>

            <VListItem color="primary" rounded="0" value="Privacy">
              <template v-slot:prepend>
                <LockOutlined :style="{ fontSize: '14px' }" class="mr-4" />
              </template>

              <VListItemTitle class="text-h6"> Privacy center</VListItemTitle>
            </VListItem>

            <VListItem color="primary" rounded="0" value="Feedback">
              <template v-slot:prepend>
                <CommentOutlined :style="{ fontSize: '14px' }" class="mr-4" />
              </template>

              <VListItemTitle class="text-h6"> Feedback</VListItemTitle>
            </VListItem>

            <VListItem color="primary" rounded="0" value="History">
              <template v-slot:prepend>
                <UnorderedListOutlined :style="{ fontSize: '14px' }" class="mr-4" />
              </template>

              <VListItemTitle class="text-h6"> History</VListItemTitle>
            </VListItem>
          </VList>
        </VWindowItem>
      </VWindow>
    </PerfectScrollbar>
  </div>
</template>
