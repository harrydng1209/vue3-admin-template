import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { router } from './router'
import vuetify from './plugins/vuetify'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'
import VueTablerIcons from 'vue-tabler-icons'
import VueApexCharts from 'vue3-apexcharts'
import Antd from 'ant-design-vue'

import '@/assets/styles/style.scss'
import 'ant-design-vue/dist/reset.css'

import '@fontsource/public-sans/400.css'
import '@fontsource/public-sans/500.css'
import '@fontsource/public-sans/600.css'
import '@fontsource/public-sans/700.css'

import { fakeBackend } from '@/utils/helpers/fake-backend'

import { createI18n } from 'vue-i18n'
import messages from '@/utils/locales/messages'

const i18n = createI18n({
  locale: 'en',
  messages: messages,
  silentTranslationWarn: true,
  silentFallbackWarn: true
})

const app = createApp(App)
fakeBackend()

app.use(router)
app.use(createPinia())
app.use(i18n)
app.use(PerfectScrollbarPlugin)
app.use(VueTablerIcons)
app.use(VueApexCharts)
app.use(vuetify)
app.use(Antd)

app.mount('#app')
