# vue-commercejs

[Commerce.js](https://commercejs.com) and [Vue](https://vuejs.org) made easy.

## Install

You'll need to bring your own version of `@chec/commerce.js`, so don't forget to install it!

```bash
npm install vue-commercejs @chec/commerce.js
```

## Setup

```js
import VueCommercejs from "vue-commercejs";

Vue.use(VueCommercejs, "PUBLIC_KEY");
```

To enable the debugger you can include the third argument `true`.

```js
import VueCommercejs from "vue-commercejs";

Vue.use(VueCommercejs, "PUBLIC_KEY");
```

## Usage

```vue
<template>
  <ul>
    <li v-for="product in products" :key="product.id">
      {{ product.name }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  async created() {
    const { data } = await this.$commercejs.products.list();

    this.products = data;
  },
};
</script>
```
