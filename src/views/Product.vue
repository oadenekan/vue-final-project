<template>
  <main>
    <section class="bg-white dark:bg-gray-900">
      <div v-if="product" class="container px-6 py-10 mx-auto">
        <h1
          class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"
        >
          From the Store
        </h1>

        <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
          <img
            class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96"
            :src="product ? product.thumbnail : ''"
            alt="product.title"
          />

          <div class="mt-6 lg:w-1/2 text-start lg:mt-0 lg:mx-6">
            <p
              class="block mt-4 text-2xl mb-6 font-semibold text-gray-800 hover:underline dark:text-white"
            >
              All the features you want to know
            </p>
            <p class="text-sm text-blue-700 uppercase">
              <strong>Name</strong>: {{ product ? product.title : "" }}
            </p>

            <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              <strong>Price</strong>: {{ product ? product.price : "" }}
            </p>
            <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              <strong>Brand</strong>: {{ product ? product.brand : "" }}
            </p>
            <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              <strong>No in Stock</strong>: {{ product ? product.stock : "" }}
            </p>
            <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              <strong>Rating</strong>: {{ product ? product.rating : "" }}
            </p>
            <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
              <strong>Details</strong>: {{ product ? product.description : "" }}
            </p>
          </div>
        </div>
      </div>
      <p
        class="flex min-h-full place-content-center place-items-center font-bold text-2xl"
        v-else
      >
        Loading...
      </p>
    </section>
  </main>
</template>

<script>
import { computed, onBeforeMount, defineComponent } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "ProductView",
  setup() {
    const store = useStore();
    const route = useRoute();
    const product = computed(() => {
      return store.state.products.product || null;
    });

    onBeforeMount(async () => {
      if (!product.value) {
        await store.dispatch("products/fetchProduct", route.params.product);
      }
    });

    return { product };
  },
});
</script>
