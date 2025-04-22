<template>
  <footer class="flex flex-col items-center p-5">
		<span class="text-xs">
			A coding exercise based on <NuxtLink to="https://www.eloshapes.com/" target="_blank" class="hover:text-blue-500 transition-colors">eloshapes.com</NuxtLink> · Pierre Prézelin © {{ year }}
		</span>
	</footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
