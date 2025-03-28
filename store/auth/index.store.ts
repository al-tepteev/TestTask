import { defineStore } from "pinia";
import type { User } from "~/types/User";
import type { Error } from "~/types/Error";
import { useAuthApiStore } from "./api/api.store";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    error: null as Error | null,
    users: null as User[] | null,
    isInitialized: false,
  }),

  actions: {
    async initializeAuth() {
      const authCookie = useCookie<User | null>('auth');
      if (authCookie.value) {
        this.user = authCookie.value;
        this.isInitialized = true; // Флаг инициализации
      }
    },

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
      if (!this.users) {
        await this.fetchUsers();
      }

      if (!this.users) {
        this.error = { 
          message: "Системная ошибка. Попробуйте позже" 
        };
        return false;
      }

      const user = this.users.find(
        u => u.credentials.username === username && 
             u.credentials.passphrase === password
      );

      if (user) {
        const authCookie = useCookie<User>('auth', {
          maxAge: 60 * 60 * 24 * 7, // 1 неделя
          secure: true,
          sameSite: 'strict'
        });

        authCookie.value = user;
        this.user = user;
        this.error = null;
        return true;
      } else {
        this.error = { 
          message: "Неверные данные авторизации" 
        };
        return false;
      }
    },

    logout() {
      const authCookie = useCookie('auth');
      authCookie.value = null;
      this.user = null;
      navigateTo("/login/")
    }
  },

  getters: {
    getError: (state) => state.error,
    isAuthenticated: (state) => !!state.user,
    currentUser: (state) => state.user,
  }
});