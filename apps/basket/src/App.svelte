<script>
  import ModuleLoader from 'module-loader-svelte';

  export let events;
  export let history;
  let basket;
  let items;

  const LOCALSTORAGE_BASKET_KEY = '__basket';

  function createEmptyBasket() {
    return {
      items: []
    };
  }

  async function fetchProduct(id) {
    const response = await fetch(`/_/product/${ id }`);

    return response.json();
  }

  function loadBasket() {
    const basket = localStorage.getItem(LOCALSTORAGE_BASKET_KEY);

    try {
      return basket ? JSON.parse(basket) : createEmptyBasket();
    } catch (e) {
      return createEmptyBasket();
    }
  }

  function groupBasket(items) {
    return [ ...items ].sort().reduce((accum, next) => {
      if (!accum[next]) {
        accum[next] = 0;
      }

      accum[next]++;

      return accum;
    }, {});
  }

  async function populateBasket(items) {
    const products = await Promise.all(Object.keys(items).map(fetchProduct));

    return Object.keys(items).reduce((accum, next) => {
      accum[next] = {
        ...products.find(({ id }) => id === next),
        quantity: items[next]
      };

      return accum;
    }, {});
  }

  function calculateTotalPrice(items) {
    const total = Object.values(items).reduce((accum, { rrp, quantity }) => {
      return accum + (rrp * quantity);
    }, 0);

    return total.toFixed(2);
  }

  function handlePushState(href) {
    history.pushState(href);
  }

  function handleInc(id) {
    console.log('add to cart', id);
    events.emit('cart:add', id);
  }

  function handleDec(id) {
    console.log('remove from cart', id);
    events.emit('cart:remove', id);
  }

  function handleEmpty() {
    console.log('empty cart');
    events.emit('cart:empty');
  }

  events.on('cart:add', () => {
    basket = loadBasket();
  });

  events.on('cart:remove', () => {
    basket = loadBasket();
  });

  events.on('cart:empty', () => {
    basket = loadBasket();
  });

  basket = loadBasket();

  $: itemsPrice = items
    ? calculateTotalPrice(items)
    : '--.--';

  $: populateBasket(groupBasket(basket.items))
    .then((_) => { items = _; });
</script>

<main class="container mt-4">
  {#if basket.items.length && items}
    <ul class="list-group">
      {#each Object.entries(items) as [ itemID, item ]}
        <li class="list-group-item d-flex flex-wrap justify-content-between align-items-center">
          <span>
            <span class="text-muted">{itemID}</span>
            <span>{item.name}</span>
          </span>
          <span>
            <span>{item.rrp}€</span>
            <span>x</span>
            <span>{item.quantity}</span>
            <div class="btn-group btn-group-sm ml-1" role="group">
              <button class="btn btn-secondary" on:click={() => handleInc(itemID)}>
                <span class="oi oi-plus" />
              </button>
              <button class="btn btn-secondary" on:click={() => handleDec(itemID)}>
                <span class="oi oi-minus" />
              </button>
            </div>
          </span>
        </li>
      {/each}
    </ul>
  {:else}
    <span>No items in cart</span>
  {/if}
  <div class="text-right mt-4">
    Total: {itemsPrice}€
  </div>
  <div class="text-right mt-4">
    <button class="btn btn-default mr-1" disabled={!basket.items.length} on:click={handleEmpty}>
      Empty cart
    </button>
    <button class="btn btn-primary" disabled={!basket.items.length}>
      Proceed to checkout
    </button>
  </div>
  <footer class="navbar fixed-bottom navbar-expand-lg d-none d-md-block" style="transform: scale(.75);">
    <ModuleLoader src="http://localhost:8083/index.js" entry="browse" events={events} on:pushState={handlePushState}/>
  </footer>
</main>
