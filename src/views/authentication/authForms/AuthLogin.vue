<script setup lang="ts">
import { ref } from 'vue'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons-vue'
import { useAuthStore } from '@/stores/auth'
import { Form } from 'vee-validate'

const checkbox = ref(false)
const valid = ref(false)
const show1 = ref(false)
const password = ref('admin')
const username = ref('admin')
const passwordRules = ref([
  (v: string) => !!v || 'Password is required',
  (v: string) => (v && v.length <= 10) || 'Password must be less than 10 characters'
])
const emailRules = ref([
  (v: string) => !!v || 'E-mail is required',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
])

function validate(values: any, { setErrors }: any) {
  const authStore = useAuthStore()
  return authStore
    .login(username.value, password.value)
    .catch((error) => setErrors({ apiError: error }))
}
</script>

<template>
  <div class="d-flex justify-space-between align-center">
    <h3 class="text-h3 text-center mb-0">Login</h3>
    <RouterLink to="/auth/register" class="text-primary text-decoration-none">
      Don't Have an account?
    </RouterLink>
  </div>

  <Form @submit="validate" class="mt-7 loginForm" v-slot="{ errors, isSubmitting }">
    <div class="mb-6">
      <VLabel>Email Address</VLabel>

      <VTextField
        aria-label="email address"
        v-model="username"
        :rules="emailRules"
        class="mt-2"
        required
        hide-details="auto"
        variant="outlined"
        color="primary"
      />
    </div>

    <div>
      <VLabel>Password</VLabel>
      <VTextField
        aria-label="password"
        v-model="password"
        :rules="passwordRules"
        required
        variant="outlined"
        color="primary"
        hide-details="auto"
        :type="show1 ? 'text' : 'password'"
        class="pwdInput mt-2"
      >
        <template v-slot:append>
          <VBtn color="secondary" icon rounded variant="text">
            <EyeInvisibleOutlined
              :style="{ color: 'rgb(var(--v-theme-secondary))' }"
              v-if="show1 == false"
              @click="show1 = !show1"
            />
            <EyeOutlined
              :style="{ color: 'rgb(var(--v-theme-secondary))' }"
              v-if="show1 == true"
              @click="show1 = !show1"
            />
          </VBtn>
        </template>
      </VTextField>
    </div>

    <div class="d-flex align-center mt-4 mb-7 mb-sm-0">
      <VCheckbox
        v-model="checkbox"
        :rules="[(v: any) => !!v || 'You must agree to continue!']"
        label="Keep me sign in"
        required
        color="primary"
        class="ms-n2"
        hide-details
      />

      <div class="ml-auto">
        <RouterLink to="/auth/login" class="text-darkText link-hover">Forgot Password?</RouterLink>
      </div>
    </div>

    <VBtn
      color="primary"
      :loading="isSubmitting"
      block
      class="mt-5"
      variant="flat"
      size="large"
      :disabled="valid"
      type="submit"
    >
      Login
    </VBtn>

    <div v-if="errors.apiError" class="mt-2">
      <VAlert color="error">{{ errors.apiError }}</VAlert>
    </div>
  </Form>
</template>

<style lang="scss">
.loginForm {
  .v-text-field .v-field--active input {
    font-weight: 500;
  }
}
</style>
