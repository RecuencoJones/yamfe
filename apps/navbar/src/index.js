import Vue from 'vue';
import Navbar from './components/navbar.vue';

let app;

export function render({ mount, pushState }) {
  console.log('render navbar');

  app = new Vue({
    render: (h) => h(Navbar),
    data: {
      history: {
        pushState
      }
    }
  }).$mount();

  mount.appendChild(app.$el);
}

export function remove() {
  app.$el.remove();
}
