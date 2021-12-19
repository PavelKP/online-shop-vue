import Vue from "vue";
import Vuex from "vuex";
import { ProductsModule } from "../store/modules/products";
import { CartModule } from "../store/modules/cart";

Vue.use(Vuex);

export default new Vuex.Store({
	strict: true,
	modules: {
		products: ProductsModule,
		cart: CartModule,
	},
});
