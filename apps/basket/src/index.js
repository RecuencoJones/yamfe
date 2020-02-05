import App from './App.svelte';

export function render({ mount, events }) {
  console.log('render basket');

  const app = new App({
    target: mount,
    props: {
      events
    }
  });

  return () => {
    console.log('unmount basket');

    app.$destroy();
  };
}
