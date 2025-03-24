<template>
  <div class="wrapper-input">
    <input
      v-model="model"
      v-bind="$attrs"
      @input="$emit('update:modelValue', model)"
      :class="[
        'appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm',
        { 'border-red-500': invalid }  // Добавляем красную рамку при ошибке
      ]"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  invalid: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(['update:modelValue']);

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
</script>
