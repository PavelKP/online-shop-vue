import Vue from "vue";

export const CartModule = {
  namespaced: true,
  state: () => ({
    cart: {},
    ids: [],
  }),
  mutations: {
    addToCart: (state, product) => {
      const id = product.id;
      const currenCount = state.cart[id] ? state.cart[id]?.count : 0;

      state.cart = Object.assign({}, state.cart, {
        [id]: {
          product,
          count: currenCount + 1,
        },
      });

      if (!state.ids.includes(id)) {
        state.ids.push(id);
      }
    },
    updateOne: (state, { count, id }) => {
      state.cart[id] = Object.assign({}, state.cart[id], { count });
    },
    removeOne: (state, id) => {
      Vue.delete(state.cart, id);

      const index = state.ids.findIndex((dataId) => dataId === id);
      if (index !== -1) {
        state.ids.splice(index, 1);
      }
    },
  },
  getters: {
    getAll: (state) => {
      return state.ids.map((id) => {
        return state.cart[id];
      });
    },
    getTotal: (state) => {
      let total = 0;
      for (let key in state.cart) {
        total += state.cart[key].count * state.cart[key].product.price;
      }
      return total;
    },
    getIds(state) {
      return state.ids;
    },
  },
};
