<script>
import { onDestroy, createEventDispatcher } from 'svelte';
import { moduleLoader } from 'module-loader';

export let src;
export let entry;
export let events;
let mount;

const dispatch = createEventDispatcher();

let moduleUnloader = moduleLoader({
  src,
  entry,
  events,
  mount,
  pushState: (href) => dispatch('pushState', href)
});

onDestroy(() => {
  moduleUnloader && moduleUnloader();
});
</script>

<div id={`render-${ entry }`} bind:this={mount}></div>
