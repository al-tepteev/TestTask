<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <div v-if="props.header" class="wrapper-header">
				<component :is="titleTag" class="text-2xl font-bold text-center mb-6 text-gray-800">{{ header.title }}</component>
				<div v-if="header.subtitle" v-html="header.subtitle" />
			</div>
			<div class="wrapper-content">
				<slot />
			</div>
        </div>
    </div>
</template>

<script lang="ts" setup>
// import { useContainerLogin } from './Composables/useContainerLogin';
import { defineProps } from 'vue';
import { propsContainer } from './Shared/props';

const props = defineProps(propsContainer);
</script>