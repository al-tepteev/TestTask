<template>
  <BaseContainerLogin :header="headerBlock">
      <BlockForm class="rounded-md -space-y-px"  @submit="handleLogin">
        <TWInput v-model="username" placeholder="Введите email" :invalid="isHasError" />
        <TWInput v-model="password" placeholder="Пароль" :invalid="isHasError" type="password" />
        <TWError :error="authStore.getError" />
      </BlockForm>
  </BaseContainerLogin>
</template>

<script setup>
import { ref } from 'vue'
import TWInput from '~/elements/Input/index.vue'
import TWError from "~/elements/Error/index.vue"
import { useAuthStore } from "~/store/auth/index.store"

const headerBlock = {
  title: "Вход в аккаунт"
}
const authStore = useAuthStore();
const username = ref("");
const password = ref("");

const isHasError = computed(() => !!authStore.getError)

async function handleLogin() {
  const isLogin = await authStore.login(username.value, password.value)
  
  if (isLogin) {
    navigateTo('/')
  }
};
</script>