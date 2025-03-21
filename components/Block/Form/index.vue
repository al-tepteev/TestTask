<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div class="content-form space-y-4">
      <slot></slot>
    </div>
    <button type="submit" class="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
    >
      Отправить
    </button>
  </form>
</template>

<script setup>
import { provide, reactive, defineEmits, computed } from "vue";

const emit = defineEmits(["submit"]);
const formErrors = reactive({});

provide("formErrors", formErrors);

const hasErrors = computed(() => Object.keys(formErrors).length > 0);

const handleSubmit = () => {
  if (!hasErrors.value) {
    emit("submit", formData);
  }
};
</script>

