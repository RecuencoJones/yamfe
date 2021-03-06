import App from './App.svelte';

export function render({ mount, pushState, events }) {
  console.log('render basket');

  const app = new App({
    target: mount,
    props: {
      history: {
        pushState
      },
      events
    }
  });

  return () => {
    console.log('unmount basket');

    app.$destroy();
  };
}
