import App from './App.svelte';

export function render({ mount }) {
  console.log('render basket');

  const app = new App({
    target: mount
  });

  return () => {
    console.log('unmount basket');

    app.$destroy();
  };
}
