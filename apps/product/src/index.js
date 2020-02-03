import Vue from 'vue';
import Product from './components/product.vue';

let app;

export function render({ mount, pushState }) {
  console.log('render product');

  app = new Vue({
    render: (h) => h(Product),
    data: {
      history: {
        pushState
      }
    }
  }).$mount();

  mount.appendChild(app.$el);
}

export function remove() {
  app.$destroy();
  app.$el.remove();
}
