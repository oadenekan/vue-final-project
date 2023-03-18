<template>
  <main>
    <section class="bg-white dark:bg-gray-900">
      <div
        class="container min-h-screen px-6 py-12 flex-col justify-center mx-auto lg:flex lg:items-center lg:gap-12"
      >
        <div class="relative w-full mt-12 lg:mt-0">
          <img
            class="w-full max-w-lg lg:mx-auto"
            :src="require('../../public/illustration.svg')"
            alt="404 page"
          />
        </div>
        <div class="w-full">
          <p class="text-sm font-medium text-blue-500 dark:text-blue-400">
            404 error
          </p>
          <h1
            class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl"
          >
            Page not found
          </h1>
          <p class="mt-4 text-gray-500 dark:text-gray-400">
            Sorry, the page you are looking for doesn't exist.Here are some
            helpful links:
          </p>

          <div class="flex justify-center items-center mt-6 gap-x-3">
            <router-link to="/">
              <button
                class="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
              >
                Take me home
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageNotFound",
});
</script>
