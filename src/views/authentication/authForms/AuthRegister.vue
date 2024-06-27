<script setup lang="ts">
import { ref } from 'vue'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons-vue'
const show1 = ref(false)
const password = ref('')
const email = ref('')
const Regform = ref()
const firstname = ref('')
const lastname = ref('')
const passwordRules = ref([
  (v: string) => !!v || 'Password is required',
  (v: string) => (v && v.length <= 10) || 'Password must be less than 10 characters'
])
const firstRules = ref([(v: string) => !!v || 'First Name is required'])
const lastRules = ref([(v: string) => !!v || 'Last Name is required'])
const emailRules = ref([
  (v: string) => !!v || 'E-mail is required',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid'
])

function validate() {
  Regform.value.validate()
}
</script>

<template>
  <div class="d-flex justify-space-between align-center">
    <h3 class="text-h3 text-center mb-0">Sign up</h3>
    <RouterLink to="/auth/login" class="text-primary text-decoration-none"
      >Already have an account?</RouterLink
    >
  </div>

  <VForm ref="Regform" lazy-validation action="/dashboards/analytical" class="mt-7 loginForm">
    <VRow class="my-0">
      <VCol cols="12" sm="6" class="py-0">
        <div class="mb-6">
          <VLabel>First Name*</VLabel>
          <VTextField
            v-model="firstname"
            :rules="firstRules"
            hide-details="auto"
            required
            variant="outlined"
            class="mt-2"
            color="primary"
            placeholder="John"
          ></VTextField>
        </div>
      </VCol>

      <VCol cols="12" sm="6" class="py-0">
        <div class="mb-6">
          <VLabel>Last Name*</VLabel>
          <VTextField
            v-model="lastname"
            :rules="lastRules"
            hide-details="auto"
            required
            variant="outlined"
            class="mt-2"
            color="primary"
            placeholder="Doe"
          ></VTextField>
        </div>
      </VCol>
    </VRow>

    <div class="mb-6">
      <VLabel>Company</VLabel>
      <VTextField
        hide-details="auto"
        variant="outlined"
        class="mt-2"
        color="primary"
        placeholder="Demo Inc."
      ></VTextField>
    </div>

    <div class="mb-6">
      <VLabel>Email Address*</VLabel>
      <VTextField
        v-model="email"
        :rules="emailRules"
        placeholder="demo@company.com"
        class="mt-2"
        required
        hide-details="auto"
        variant="outlined"
        color="primary"
      ></VTextField>
    </div>

    <div class="mb-6">
      <VLabel>Password</VLabel>
      <VTextField
        v-model="password"
        :rules="passwordRules"
        placeholder="*****"
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

    <div class="d-sm-inline-flex align-center mt-2 mb-7 mb-sm-0 font-weight-bold">
      <h6 class="text-caption">
        By Signing up, you agree to our
        <RouterLink to="/auth/register" class="text-primary link-hover font-weight-medium"
          >Terms of Service
        </RouterLink>
        and
        <RouterLink to="/auth/register" class="text-primary link-hover font-weight-medium"
          >Privacy Policy</RouterLink
        >
      </h6>
    </div>

    <VBtn color="primary" block class="mt-4" variant="flat" size="large" @click="validate()">
      Create Account
    </VBtn>
  </VForm>
</template>
