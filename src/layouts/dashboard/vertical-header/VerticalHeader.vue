<script setup lang="ts">
import { useCustomizerStore } from '../../../stores/customizer'
import { MenuFoldOutlined, SearchOutlined, GithubOutlined } from '@ant-design/icons-vue'
import NotificationDD from './NotificationDD.vue'
import Searchbar from './SearchBarPanel.vue'
import ProfileDD from './ProfileDD.vue'

const customizer = useCustomizerStore()
</script>

<template>
  <VAppBar elevation="0" height="60">
    <VBtn
      class="hidden-md-and-down text-secondary mr-3"
      color="darkText"
      icon
      rounded="sm"
      variant="text"
      @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
      size="small"
    >
      <MenuFoldOutlined :style="{ fontSize: '16px' }" />
    </VBtn>
    <VBtn
      class="hidden-lg-and-up text-secondary ms-3"
      color="darkText"
      icon
      rounded="sm"
      variant="text"
      @click.stop="customizer.SET_SIDEBAR_DRAWER"
      size="small"
    >
      <MenuFoldOutlined :style="{ fontSize: '16px' }" />
    </VBtn>

    <VMenu :close-on-content-click="false" class="hidden-lg-and-up" offset="10, 0">
      <template v-slot:activator="{ props }">
        <VBtn
          class="hidden-lg-and-up text-secondary ml-1"
          color="lightsecondary"
          icon
          rounded="sm"
          variant="flat"
          size="small"
          v-bind="props"
        >
          <SearchOutlined :style="{ fontSize: '17px' }" />
        </VBtn>
      </template>
      <VSheet class="search-sheet v-col-12 pa-0" width="320">
        <VTextField
          persistent-placeholder
          placeholder="Search here.."
          color="primary"
          variant="solo"
          hide-details
        >
          <template v-slot:prepend-inner>
            <SearchOutlined :style="{ fontSize: '17px' }" />
          </template>
        </VTextField>
      </VSheet>
    </VMenu>

    <VSheet class="d-none d-lg-block" width="250">
      <Searchbar />
    </VSheet>

    <VSpacer />

    <VBtn
      icon
      class="text-secondary hidden-sm-and-down d-flex"
      color="darkText"
      rounded="sm"
      variant="text"
      href="https://github.com/codedthemes/mantis-free-vuetify-vuejs-admin-template"
      target="_blank"
    >
      <GithubOutlined :style="{ fontSize: '16px' }" />
    </VBtn>

    <NotificationDD />

    <VMenu :close-on-content-click="false" offset="8, 0">
      <template v-slot:activator="{ props }">
        <VBtn class="profileBtn" variant="text" rounded="sm" v-bind="props">
          <div class="d-flex align-center">
            <VAvatar class="mr-sm-2 mr-0 py-2">
              <img src="@/assets/images/users/avatar-1.png" alt="Julia" />
            </VAvatar>
            <h6 class="text-subtitle-1 mb-0 d-sm-block d-none">JWT User</h6>
          </div>
        </VBtn>
      </template>
      <VSheet rounded="md" width="290">
        <ProfileDD />
      </VSheet>
    </VMenu>
  </VAppBar>
</template>
