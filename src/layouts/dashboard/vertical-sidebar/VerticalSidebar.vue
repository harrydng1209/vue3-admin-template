<script setup lang="ts">
import { shallowRef } from 'vue'
import { useCustomizerStore } from '../../../stores/customizer'
import sidebarItems from './sidebarItem'
import NavGroup from './NavGroup/NavGroup.vue'
import NavItem from './NavItem/NavItem.vue'
import NavCollapse from './NavCollapse/NavCollapse.vue'
import ExtraBox from './extrabox/ExtraBox.vue'
import Logo from '../logo/LogoDark.vue'

const customizer = useCustomizerStore()
const sidebarMenu = shallowRef(sidebarItems)
</script>

<template>
  <VNavigationDrawer
    left
    v-model="customizer.Sidebar_drawer"
    elevation="0"
    rail-width="60"
    mobile-breakpoint="lg"
    app
    class="leftSidebar"
    :rail="customizer.mini_sidebar"
    expand-on-hover
  >
    <div class="pa-5">
      <Logo />
    </div>

    <PerfectScrollbar class="scrollnavbar">
      <VList aria-busy="true" aria-label="menu list">
        <template v-for="(item, i) in sidebarMenu" :key="i">
          <NavGroup :item="item" v-if="item.header" :key="item.title" />
          <VDivider class="my-3" v-else-if="item.divider" />
          <NavCollapse class="leftPadding" :item="item" :level="0" v-else-if="item.children" />
          <NavItem :item="item" v-else />
        </template>
      </VList>
      <div class="pa-4">
        <ExtraBox />
      </div>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
