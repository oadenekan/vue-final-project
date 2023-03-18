import axiosClient from "@/axios";

const state = {
  products: [],
  product: null,
};

const mutations = {
  setProducts(state, products) {
    state.products = products;
  },
  setProduct(state, product) {
    state.product = product;
  },
};

const actions = {
  async fetchProducts({ commit }) {
    try {
      const response = await axiosClient.get(`products`);
      const products = response.data.products;
      commit("setProducts", products);
    } catch (error) {
      console.error(error);
    }
  },
  async fetchProduct({ commit }, productId) {
    try {
      const response = await axiosClient.get(`products/${productId}`);
      const product = response.data;
      commit("setProduct", product);
    } catch (error) {
      console.error(error);
    }
  },
};

const productsModule = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default productsModule;
