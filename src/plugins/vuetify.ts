import { createVuetify } from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { DefaultTheme } from '@/configs/LightTheme'

export default createVuetify({
  components,
  directives,

  theme: {
    defaultTheme: 'DefaultTheme',
    themes: {
      DefaultTheme
    }
  },
  defaults: {
    VBtn: {},
    VCard: {
      rounded: 'md'
    },
    VTextField: {
      rounded: 'lg'
    },
    VTooltip: {
      location: 'top'
    }
  }
})
