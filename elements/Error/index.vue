<template>
  <div v-if="error" class="error-message bg-red-100 border-red-300 text-red-700 p-4 rounded-md mb-4 flex items-center gap-2">
    <span>{{ error.message }}</span>
  </div>
</template>

<script setup lang="ts">
import type { Error } from "~/types/Error";

defineProps({
  error: {
    type: Object as () => Error, // Функция для создания объекта типа Error
    default: () => null // Указание дефолтного значения
  }
});
</script>
