import Vue from 'vue';
import Product from './components/product.vue';

export function render({ mount, pushState, events }) {
  console.log('render product');

  const app = new Vue({
    render: (h) => h(Product),
    data: {
      history: {
        pushState
      },
      events
    }
  }).$mount();

  mount.appendChild(app.$el);

  return () => {
    console.log('unmount product');

    app.$destroy();
    app.$el.remove();
  };
}
