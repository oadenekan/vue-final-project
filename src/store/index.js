import { createStore } from "vuex";
import authModule from "./modules/authModule";
import productsModule from "./modules/productsModule";

const store = createStore({
  modules: {
    products: productsModule,
    auth: authModule,
  },
});

export default store;
