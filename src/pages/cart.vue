<template>
  <div class="container">
    <div v-if="!getIds.length">
      Корзина пуста. Купите, что-нибудь в нашем магазине!
    </div>
    <table v-else class="table" cellspacing="0">
      <thead>
        <tr>
          <th class="product-remove">&nbsp;</th>
          <th class="product-thumbnail">&nbsp;</th>
          <th class="product-name">Товар</th>
          <th class="product-price">Цена</th>
          <th class="product-quantity">Количество</th>
          <th class="product-subtotal">Итого</th>
        </tr>
      </thead>
      <tbody>
        <tr class="" v-for="cartItem in getAll" :key="cartItem.product.id">
          <td class="product-remove">
            <span @click="removeProduct(cartItem.product.id)" class="remove"
              >X</span
            >
          </td>

          <td class="product-thumbnail">
            <img
              width="100"
              height="100"
              :src="getImageSource(cartItem.product.image)"
            />
          </td>

          <td class="product-name" data-title="Product">
            {{ cartItem.product.dish }}
          </td>

          <td class="product-price" data-title="Price">
            <span>{{ cartItem.product.price }} ₽</span>
          </td>

          <td class="product-quantity" data-title="Quantity">
            <div class="quantity">
              <input
                @input="(evt) => changeCount(evt, cartItem)"
                :value="cartItem.count"
                type="number"
                class="input-text"
                step="1"
                min="1"
                size="4"
                placeholder=""
                inputmode="numeric"
              />
            </div>
          </td>

          <td class="product-subtotal" data-title="Subtotal">
            <span>{{ cartItem.product.price * cartItem.count }} ₽</span>
          </td>
        </tr>

        <tr>
          <td colspan="6" class="actions">
            <div>Общая сумма заказа: {{ getTotal }} ₽</div>
          </td>
        </tr>

        <tr>
          <td colspan="6" class="actions">
            <button
              @click="showOrder"
              type="submit"
              class="button"
              name="update_cart"
              value="Update cart"
              aria-disabled="true"
            >
              Перейти к оформлению
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters("cart", ["getAll"]),
    ...mapGetters("cart", ["getTotal"]),
    ...mapGetters("cart", ["getIds"]),
  },
  methods: {
    getImageSource(imageName) {
      return require(`@/assets/images/${imageName}`);
    },
    changeCount(evt, cartItem) {
      const payload = {
        id: cartItem.product.id,
        count: evt.target.value || 1,
      };

      this.$store.commit("cart/updateOne", payload);
    },
    removeProduct(id) {
      this.$store.commit("cart/removeOne", id);
    },
    showOrder() {
      const order = this.getAll.reduce((prevVal, curVal) => {
        return [
          ...prevVal,
          {
            dish: curVal.product.dish,
            price: curVal.product.price,
            count: curVal.count,
          },
        ];
      }, []);

      alert(JSON.stringify(order, null, "  "));
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.table {
  border: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0 -1px 24px 0;
  text-align: left;
  width: 100%;
  border-collapse: separate;
  border-radius: 5px;
}
.table th,
.table td {
  padding: 9px 12px;
  line-height: 1.5em;
  border: 1px solid #eee;
}
.product-thumbnail img {
  height: 100px;
}
.input-text {
  height: 30px;
  font-size: 16px;
  width: 150px;
}
.remove {
  cursor: pointer;
}
</style>
