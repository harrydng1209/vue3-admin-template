import { defineStore } from 'pinia'
import { router } from '@/router'
import { fetchWrapper } from '@/utils/helpers/fetch-wrapper'

const baseUrl = `${import.meta.env.VITE_API_URL}/users`

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: JSON.parse(localStorage.getItem('user') ?? ''),
    returnUrl: null
  }),
  actions: {
    async login(username: string, password: string) {
      const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password })

      this.user = user
      localStorage.setItem('user', JSON.stringify(user))
      router.push(this.returnUrl || '/dashboard')
    },
    logout() {
      this.user = null
      localStorage.removeItem('user')
      router.push('/auth/login')
    }
  }
})
