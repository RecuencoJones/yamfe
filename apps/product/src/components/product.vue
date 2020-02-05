<template>
  <main class="container mt-4">
    <div v-if="product">
      <h4>{{ product.name }}</h4>
      <div style="display: flex; place-content: space-between; flex-wrap: wrap">
        <div style="flex: 1; display: flex; flex-wrap: wrap">
          <dl style="flex: 1">
            <dt>Category</dt>
            <dd>{{ product.category }}</dd>
          </dl>
          <dl style="flex: 1" v-if="product.tags">
            <dt>Tags</dt>
            <dd>{{ product.tags.join(', ') }}</dd>
          </dl>
        </div>
        <div>
          <span class="pr-2">{{ product.rrp.toFixed(2) }}€</span>
          <button class="btn btn-primary" @click="handleAddToCart">Add to cart</button>
        </div>
      </div>
      <p>{{ product.description }}</p>
    </div>
    <div v-else>
      Loading...
    </div>
    <footer class="navbar fixed-bottom navbar-expand-lg d-none d-md-block" style="transform: scale(.75);">
      <module-loader src="http://localhost:8083/index.js" entry="browse" :events="$root.events" @pushState="handlePushState" />
    </footer>
  </main>
</template>

<script>
import { ModuleLoader } from 'module-loader-vue';

const MATCH_PRODUCT_ID = /\/browse\/(\w+)/;

export default {
  data() {
    return {
      product: null
    };
  },
  methods: {
    handleAddToCart(event) {
      event.preventDefault();
      event.stopPropagation();

      console.log('add to cart', this.product.id);
      this.$root.events.emit('cart:add', this.product.id);
    },
    handlePushState(href) {
      this.$root.history.pushState(href);
    }
  },
  mounted() {
    const { 1: id } = location.pathname.match(MATCH_PRODUCT_ID);

    fetch(`/_/product/${ id }`)
    .then((_) => _.json())
    .then((data) => {
      this.product = data;
    });
  },
  components: {
    ModuleLoader
  }
};
</script>
