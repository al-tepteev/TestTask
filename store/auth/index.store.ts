import { defineStore } from "pinia";
import { useAuthApiStore } from "./api/api.store";

import type { User } from "~/types/User";
import type { Error } from "~/types/Error";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    error: null as Error | null,
    users: null as User[] | null,
  }),

  actions: {
    async fetchUsers() {
      try {
        const authApi = useAuthApiStore();
        const users = await authApi.getUsersFromApi();
        
        if (users) {
          this.users = users;
        }
      } catch (err) {
        this.error = { 
          message: "Ошибка при загрузке пользователей" 
        };
      }
    },

    async login(username: string, password: string) {
      // Если пользователи ещё не загружены
      if (!this.users) {
        await this.fetchUsers();
      }

      // Если после загрузки всё ещё нет пользователей
      if (!this.users) {
        this.error = { 
          message: "Системная ошибка. Попробуйте позже" 
        };
        return false;
      }

      const user = this.users.find(
        u => u.credentials.username === username && u.credentials.passphrase === password
      );

      if (user) {
        this.user = user;
        this.error = null;
        return true;
      } else {
        this.error = { 
          message: "Введены неверные данные авторизации. Попробуйте ещё раз" 
        };
        return false;
      }
    },

    logout() {
      this.user = null;
    }
  },

  getters: {
    getError: (state) => state.error,
  }
});