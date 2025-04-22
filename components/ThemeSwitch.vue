<template>
  <button @click="toggleTheme" class="flex items-center justify-center p-2">
    <Icon :name="theme === 'dark' ? 'uil:moon' : 'uil:sun'" class="text-black dark:text-white" />
  </button>
</template>

<script setup lang="ts">
const { theme, toggleTheme } = useTheme();
</script>
