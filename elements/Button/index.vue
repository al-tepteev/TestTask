<template>
  <button 
    type="submit" 
    class="tw-button"
    :class="buttonClasses"
    v-text="value"
    @click="onClick"
  ></button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  value: {
    type: String,
    required: true
  },
  theme: {
    type: String as () => "primary" | "secondary" | "danger",
    default: "primary"
  },
  size: {
    type: String as () => "sm" | "md" | "lg",
    default: "md"
  }
});

const emit = defineEmits(["onClick"]);

const onClick = () => {
  emit("onClick");
};
const { theme, size } = props;
// Классы Tailwind для кнопки
const buttonClasses = computed(() => [
  "w-full font-medium rounded-md transition duration-300 focus:outline-none",
  {
    "bg-indigo-600 text-white hover:bg-indigo-700": !theme || theme === "primary",
    "bg-gray-600 text-white hover:bg-gray-700": theme === "secondary",
    "bg-red-600 text-white hover:bg-red-700": theme === "danger",
    "px-3 py-1 text-sm": size === "sm",
    "px-4 py-2 text-base": !size || size === "md",
    "px-6 py-3 text-lg": size === "lg",
  },
]);
</script>
