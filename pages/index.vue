<template>
  <div>
    <header class="relative w-screen h-[calc(100vh-10em)] flex items-center justify-center">
      <div class="relative max-w-5xl mx-auto">
        <h1 class="bg-gradient-to-br from-pink-600 to-fuchsia-600 bg-clip-text text-transparent font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center">
          The open-source TypeForm alternative
        </h1>

        <p class="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto">
          Create forms that are focused around the user experience. Rapidform is a form infrastructure that your users will enjoy.
        </p>

        <div class="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
          <NuxtLink class="bg-pink-600 hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2 focus:ring-offset-pink-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto" to="https://app.rapidform.io">
            Get started
          </NuxtLink>

          <NuxtLink class="bg-slate-600 hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto" to="https://github.com/rapidformio/rapidform">
            <svg viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13 .324c-7.15 0-13 5.85-13 13 0 5.769 3.737 10.644 8.856 12.35.65.082.894-.244.894-.65V22.83c-3.656.813-4.388-1.706-4.388-1.706-.568-1.462-1.462-1.868-1.462-1.868-1.219-.813.081-.813.081-.813 1.3.081 2.032 1.3 2.032 1.3 1.137 1.95 3.006 1.381 3.818 1.056a2.805 2.805 0 0 1 .813-1.706c-2.925-.325-5.931-1.462-5.931-6.419 0-1.381.487-2.6 1.3-3.494-.163-.325-.57-1.625.162-3.412 0 0 1.056-.325 3.575 1.3 1.056-.325 2.113-.406 3.25-.406s2.194.162 3.25.406c2.519-1.706 3.575-1.381 3.575-1.381.731 1.787.244 3.087.163 3.412.812.894 1.3 2.031 1.3 3.494 0 4.956-3.007 6.094-5.932 6.419.488.406.894 1.218.894 2.437v3.575c0 .325.244.732.894.65C22.263 23.968 26 19.093 26 13.324c0-7.15-5.85-13-13-13Z" fill="#fff"></path>
            </svg>

            Star us on GitHub
          </NuxtLink>
        </div>
      </div>
    </header>
  </div>
</template>
