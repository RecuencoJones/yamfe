<script>
import { onMount, onDestroy, createEventDispatcher } from 'svelte';
import { moduleLoader } from 'module-loader';

export let src;
export let entry;
export let events;
let mount;
let moduleUnloader;

const dispatch = createEventDispatcher();

onMount(() => {
  moduleUnloader = moduleLoader({
    src,
    entry,
    events,
    mount,
    pushState: (href) => dispatch('pushState', href)
  });
});

onDestroy(() => {
  moduleUnloader && moduleUnloader();
});
</script>

<div id={`render-${ entry }`} bind:this={mount}></div>
