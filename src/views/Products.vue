<template>
  <main>
    <section class="bg-white dark:bg-gray-900">
      <div class="container px-6 py-10 mx-auto">
        <div class="text-center">
          <h1
            class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"
          >
            Shop Anything, anytime!
          </h1>

          <p class="max-w-lg mx-auto mt-4 text-gray-500">
            We bring you explicit high quality products selected only from the
            best selling categories just for you!
          </p>
        </div>

        <ul class="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
          <li v-for="product in products" :key="product.id">
            <img
              class="relative z-10 object-cover w-full rounded-md h-96"
              :src="product.thumbnail"
              :alt="product.title"
            />

            <div
              class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow dark:bg-gray-900"
            >
              <h4
                class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl"
              >
                {{ product.title }}
              </h4>
              <div class="flex items-center justify-evenly">
                <h3 class="mt-3 font-extrabold text-blue-500">
                  ${{ product.price }}.00
                </h3>
                <router-link
                  :to="{ name: 'ProductView', params: { product: product.id } }"
                >
                  <button
                    class="mt-3 text-sm capitalize bg-blue-900 text-white px-3 py-2 rounded dark:text-gray-300 md:text-sm"
                  >
                    view product
                  </button>
                </router-link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>
<script>
import { useStore } from "vuex";
import { computed, onMounted, defineComponent } from "vue";
export default defineComponent({
  name: "ProductsView",
  setup() {
    const store = useStore();

    onMounted(async () => {
      if (store.state.products.products.length === 0) {
        await store.dispatch("products/fetchProducts");
      }
    });

    const products = computed(() => store.state.products.products);

    return {
      products,
    };
  },
});
</script>
