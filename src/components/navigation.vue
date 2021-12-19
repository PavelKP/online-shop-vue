<template>
  <div class="nav">
    <div class="nav__wrapper">
      <router-link to="/product-list" class="nav__item" exact>
        <div class="nav__link">Продукты</div>
      </router-link>
      <router-link to="/cart" class="nav__item">
        <div to="/cart" class="nav__link" exact>Корзина</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {
    // cart: Cart,
    // "profuct-list": ProductList,
  },
};
</script>

<style>
.nav {
  width: 100%;
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: var(--menu);
	z-index: 100;
}

.nav__wrapper {
  height: 50px;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav__item {
  display: flex;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
}

.nav__item:hover {
  background-color: var(--hover);
}

.active-exact {
  background-color: var(--hover);
}

.nav__link {
  display: block;
  padding: 0 24px;
  margin: auto;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
}
</style>
