<template>
  <BaseContainerLogin :header="header">
      <BlockForm class="rounded-md -space-y-px"  @submit="handleFormSubmit">
        <TWInput v-model="email" placeholder="Введите email" :rules="validateEmail"/>
        <TWInput v-model="password" placeholder="Пароль" type="password" :rules="validatePassword"/>
      </BlockForm>
  </BaseContainerLogin>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import TWInput from '~/elements/input/index.vue'

const header = {
  title: "Вход в аккаунт"
}
const login = ref('')
const password = ref('')
const error = ref(false)
const router = useRouter()

const handleSubmit = async () => {
  try {
    // Создаем JSON объект с данными
    const authData = {
      login: login.value,
      password: password.value
    }

    // Здесь должен быть запрос к API
    // Пример:
    // const response = await fetch('/api/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(authData)
    // })

    // Для примера сделаем простую проверку
    if (login.value === 'admin' && password.value === 'password') {
      error.value = false
      router.push('/dashboard')
    } else {
      error.value = true
    }
  } catch (err) {
    error.value = true
    console.error('Ошибка авторизации:', err)
  }
}
</script>