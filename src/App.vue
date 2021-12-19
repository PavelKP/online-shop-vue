<template>
  <div id="app">
    <navigation />
    <div class="app__page-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import navigation from "./components/navigation.vue";
export default {
  name: "App",
  components: {
    navigation,
  },
};
</script>

<style>
:root {
  --woocommerce: #a46497;
  --menu: #27b6d4;
  --active: #a00;
  --border: #e1e1e1;
  --wc-green: #7ad03a;
  --hover: #dd1f26;
  --wc-orange: #ffba00;
  --wc-blue: #2ea2cc;
  --wc-primary: #a46497;
  --wc-primary-text: white;
  --wc-secondary: #ebe9eb;
  --wc-secondary-text: #515151;
  --wc-highlight: #77a464;
  --wc-highligh-text: white;
  --wc-content-bg: #fff;
  --wc-subtext: #767676;
}

#app {
  font-family: Arial, sans-serif;
  color: #2c3e50;
  background-color: #fafafa;
  padding: 24px;
  padding-top: 50px;
  box-sizing: border-box;
  height: 100%;
}

.app__page-wrapper > .container {
  display: grid;
  justify-content: center;
  max-width: 1064px;
  margin: 0 auto;
  grid-template-columns: repeat(auto-fill, 260px);
  grid-gap: 5px;
  padding-top: 20px;
  padding-bottom: 80px;
}

html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
