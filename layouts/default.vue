<template>
  <div class="overflow-hidden pb-5">
    <div class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-5 supports-backdrop-blur:bg-white/60">
      <div class="max-w-8xl mx-auto">
        <div class="py-4 lg:px-8 lg:border-0 mx-4 lg:mx-0">
          <div class="relative flex items-center">
            <NuxtLink class="mr-3 flex-none w-[2.0625rem] overflow-hidden md:w-auto" to="/">
              <span class="sr-only">Rapidform</span>
              <RLogo class="w-32 hidden md:block text-xl" />
              <RLogo pictogram class="w-7 block md:hidden" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <slot />
  </div>
</template>
