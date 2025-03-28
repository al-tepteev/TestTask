<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <div class="content-form space-y-4">
      <slot></slot>
    </div>
    <TWButton value="отправить" />
  </form>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";
import type { Error } from "~/types/Error";
import TWButton from "@/elements/Button/index.vue"

const emit = defineEmits(["submit"]);

const props = defineProps({
  error: {
    type: Object as () => Error, // Функция для создания объекта типа Error
    default: () => ({ message: "" }) // Указание дефолтного значения
  }
});

const handleSubmit = () => {
  if (!props.error.message) {
    emit("submit");
  }
};
</script>

