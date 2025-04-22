<template>
  <header class="flex flex-nowrap justify-between items-center px-5 py-4 bg-zinc-100 dark:bg-zinc-800">
		<NuxtLink to="/" class="text-lg font-semibold">🖱️ MouseShapes</NuxtLink>
    <ul class="flex items-center gap-3">
      <li>
        <NuxtLink to="/compare" class="p-2 text-sm font-semibold rounded-lg transition-colors hover:bg-grey-500 hover:text-blue-500">Compare</NuxtLink>
      </li>
      <li class="opacity-50 pointer-events-none">
        <NuxtLink to="/find-similar" class="p-2 text-sm font-semibold rounded-lg transition-colors hover:bg-grey-500 hover:text-blue-500">Find similar</NuxtLink>
      </li>
      <li class="opacity-50 pointer-events-none">
				<NuxtLink to="/database" class="p-2 text-sm font-semibold rounded-lg transition-colors hover:bg-grey-500 hover:text-blue-500">Database</NuxtLink>
			</li>
      <li class="opacity-50 pointer-events-none">
				<NuxtLink to="/reviews" class="p-2 text-sm font-semibold rounded-lg transition-colors hover:bg-grey-500 hover:text-blue-500">Reviews</NuxtLink>
			</li>
      <li class="opacity-50 pointer-events-none">
				<NuxtLink to="/discounts" class="p-2 text-sm font-semibold rounded-lg transition-colors hover:bg-grey-500 hover:text-blue-500">Discounts</NuxtLink>
			</li>
      <li class="opacity-50 pointer-events-none">
				<NuxtLink to="/contact" class="p-2 text-sm font-semibold rounded-lg transition-colors hover:bg-grey-500 hover:text-blue-500">Contact</NuxtLink>
			</li>
    </ul>
    <div class="flex items-center gap-3">
      <NuxtLink to="https://github.com/OldsunFlush/mouse-shapes" target="_blank">
        <Icon name="uil:github" class="text-black dark:text-white"/>
      </NuxtLink>
      <ThemeSwitch />
    </div>
  </header>
</template>
