<template>
  <div v-if="!this.isLoading" class="container">
    <item-card
      v-for="product in productList"
      :key="product.id"
      :product="product"
      :imageSource="getImageSource(product.image)"
      @button-click="addToCart"
    />
  </div>
  <div v-else class="container">
    <item-card v-for="index in 12" :key="index" :skeleton="true" />
  </div>
</template>

<script>
import itemCard from "../components/item-card.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    "item-card": itemCard,
  },
  computed: {
    ...mapState("products", ["productList"]),
    ...mapState("products", ["isLoading"]),
  },
  methods: {
    addToCart(product) {
      this.$store.commit("cart/addToCart", product);
    },
    getImageSource(imageName) {
      return require(`@/assets/images/${imageName}`);
    },
  },
  created() {
    if (!this.productList.length) {
      this.$store.dispatch("products/getProductList");
    }
  },
};
</script>

<style scoped>
</style>
