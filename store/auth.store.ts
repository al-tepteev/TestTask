import { defineStore } from "pinia";
import usersData from "~/data/users.json";
import type { User } from "~/types/User";
import type { Error } from "~/types/Error";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    error: null as Error | null,
    users: usersData as User[],
  }),

  actions: {
    login(username: string, password: string) {
      const user: User | undefined = this.users.find(
        (u) => u.credentials.username === username && u.credentials.passphrase === password
      );
      
      if (user) {
        this.user = user;
        this.error = null;
        return true;
      } else {
        this.error = { message: "Введены неверные данные авторизации. Попробуйте ещё раз." };
        return false;
      }
    },

    logout() {
      this.user = null;
    }
  },

  getters: {
    getError(state): Error | null {
      return state.error;
    }
  }
});
