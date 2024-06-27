import { createRouter, createWebHistory } from 'vue-router'
import MainRoutes from './MainRoutes'
import AuthRoutes from './AuthRoutes'
import { useAuthStore } from '@/stores/auth'
import { useUIStore } from '@/stores/ui'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/pages/maintenance/error/Error404Page.vue')
    },
    MainRoutes,
    AuthRoutes
  ]
})

interface User {
  id: number
  name: string
}

interface AuthStore {
  user: User | null
  returnUrl: string | null
  login(username: string, password: string): Promise<void>
  logout(): void
}

router.beforeEach(async (to, from, next) => {
  const publicPages = ['/auth/login']
  const authRequired = !publicPages.includes(to.path)
  const auth: AuthStore = useAuthStore()

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (authRequired && !auth.user) {
      auth.returnUrl = to.fullPath
      return next('/auth/login')
    } else next()
  } else {
    next()
  }
})

router.beforeEach(() => {
  const uiStore = useUIStore()
  uiStore.isLoading = true
})

router.afterEach(() => {
  const uiStore = useUIStore()
  uiStore.isLoading = false
})
