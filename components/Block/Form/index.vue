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
import { defineEmits } from "vue";

const emit = defineEmits(["submit"]);

const handleSubmit = () => {
  if (!hasErrors.value) {
    emit("submit");
  }
};
</script>

