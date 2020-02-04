<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="/" @click="handleClick">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/browse?category=warhammer" @click="handleClick">Warhammer</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/browse?category=euphoria" @click="handleClick">Euphoria</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/browse" @click="handleClick">Browse all products</a>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/basket" @click="handleClick">
            <span class="oi oi-basket"/>
            <span>{{ basketItems }}</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
const LOCALSTORAGE_BASKET_KEY = '__basket';

function createEmptyBasket() {
  return {
    items: []
  };
}

export default {
  data() {
    return {
      basket: null
    };
  },
  computed: {
    basketItems() {
      return this.basket?.items.length || 0;
    }
  },
  methods: {
    handleClick(event) {
      event.preventDefault();
      this.$root.history.pushState(event.currentTarget.attributes.href.value);
    },
    loadBasket() {
      const basket = localStorage.getItem(LOCALSTORAGE_BASKET_KEY);

      try {
        this.basket = basket ? JSON.parse(basket) : createEmptyBasket();
      } catch (e) {
        this.basket = createEmptyBasket();
      }
    },
    persistBasket() {
      localStorage.setItem(LOCALSTORAGE_BASKET_KEY, JSON.stringify(this.basket));
    }
  },
  mounted() {
    this.loadBasket();

    this.$root.events.on('cart:add', (id) => {
      this.basket.items.push(id);
      this.persistBasket();
    });
  }
}
</script>
