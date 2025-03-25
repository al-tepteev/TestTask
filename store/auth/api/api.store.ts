import { defineStore } from "pinia";
import type { User } from "~/types/User";

export const useAuthApiStore = defineStore("authApi", {
  actions: {
    async getUsersFromApi(): Promise<User[] | null> {
      try {
        // Правильный путь для Nuxt 3
        const response = await $fetch<User[]>("/data/users.json");
        return response;
      } catch (err) {
        console.error("Ошибка загрузки пользователей:", err);
        return null;
      }
    },
  },
});