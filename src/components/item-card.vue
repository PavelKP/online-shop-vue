<template>
  <div>
    <div v-if="skeleton" class="product__item product__item--skeleton">
      <loader />
    </div>
    <div v-else class="product__item">
      <div class="product__wrapper">
        <div class="product__img">
          <a>
            <img :src="imageSource" :alt="product.dish" />
          </a>
        </div>

        <h3>{{ product.dish }}</h3>
        <p class="product__description">{{ product.description }}</p>
        <span class="product__price">₽ {{ product.price }}</span>
      </div>
      <div class="product__actions">
        <div class="product__add-to-cart">
          <a
            class="product__cart-button"
            @click="$emit('button-click', product)"
          >
            <cartIcon />
            <div>В корзину</div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import loader from "../components/loader.vue";
import cartIcon from "../assets/images/icons/shopping-cart-solid.svg";

export default {
  props: {
    product: Object,
    price: Number,
    imageSource: String,
    skeleton: Boolean,
  },
  components: {
    loader,
    cartIcon,
  },
};
</script>

<style scoped>
.product__item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 260px;
  min-height: 445px;
  margin: 0 auto;
  padding: 10px 10px 5px 10px;
  border: 1px solid var(--border);
  background: white;
  font-family: "Open Sans";
  overflow: hidden;
  transition: 0.4s linear;
}
.product__item--skeleton {
  display: flex;
  align-items: center;
  justify-content: center;
}
.product__img {
  overflow: hidden;
}
.product__img img {
  display: block;
  width: 100%;
  height: 238px;
  transition: 1s ease-in-out;
}
.product__img:hover img {
  transform: scale(1.3);
}
.product__description {
  margin: 0;
  margin-bottom: 10px;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: var(--wc-secondary-text);
}
.product__wrapper {
  margin-top: 15px;
}
.product__wrapper h3 {
  padding-top: 10px;
  font-weight: 700;
  color: #39404b;
  margin: 0;
  font-size: 14px;
  line-height: 2;
}
.product__price {
  color: #e34d38;
  display: block;
  margin-bottom: 12px;
}
.product__actions {
  border-top: 1px solid #eee;
  padding-top: 4px;
  font-size: 13px;
  height: 30px;
  line-height: 30px;
}
.product__actions:after {
  content: "";
  display: table;
  clear: both;
}
.product__cart-button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  text-decoration: none;
  color: #8c877c;
  padding-right: 20px;
  border-right: 1px solid #ddd;
  transition: 0.4s linear;
  cursor: pointer;
  user-select: none;
}
.product__cart-button .fa-shopping-cart {
  width: 16px;
  height: 16px;
  color: var(--wc-primary);
}
.product__cart-button:hover .fa-shopping-cart {
  color: var(--hover);
}
.product__cart-button:active .fa-shopping-cart {
  color: var(--active);
}
</style>
