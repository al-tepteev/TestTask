<template>
    <div class="account">
        <TWButton value="Выйти" @on-click="logout"/>
    </div>
</template>
<script setup lang="ts">
import TWButton from "@/elements/Button/index.vue";
import { useAuthStore } from "~/store/auth/index.store";
const authStore = useAuthStore();

const logout = () => {
    authStore.logout()
}
</script>
