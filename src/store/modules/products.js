import { fetchProductList } from "../../api/index";

export const ProductsModule = {
  namespaced: true,
  state: () => ({
    productList: [],
    isLoading: false,
  }),
  mutations: {
    setProductList(state, payload) {
      state.productList = payload;
    },
    resetProductList(state) {
      state.productList = [];
    },
    setIsLoading(state) {
      state.isLoading = true;
    },
    resetIsLoading(state) {
      state.isLoading = false;
    },
  },
  actions: {
    async getProductList(context) {
      context.commit("setIsLoading");
      const productList = await fetchProductList();
      context.commit("setProductList", productList);
      context.commit("resetIsLoading");
    },
  }
};
