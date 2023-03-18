<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="container px-6 py-16 mx-auto text-center">
      <div class="max-w-lg mx-auto">
        <h1
          class="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl"
        >
          Building Your Confidence and Trust with our Awesome Products
        </h1>
        <p class="mt-6 text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
          similique obcaecati illum mollitia.
        </p>
      </div>

      <div class="flex justify-center mt-10">
        <img
          class="object-cover w-full h-96 rounded-xl lg:w-4/5"
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "HomeView",
});
</script>
