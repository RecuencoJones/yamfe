import Vue from 'vue';
import Navbar from './components/navbar.vue';

export function render({ mount, pushState, events }) {
  console.log('render navbar');

  const app = new Vue({
    render: (h) => h(Navbar),
    data: {
      history: {
        pushState
      },
      events
    }
  }).$mount();

  mount.appendChild(app.$el);

  return () => {
    console.log('unmount navbar');

    app.$destroy();
    app.$el.remove();
  };
}
