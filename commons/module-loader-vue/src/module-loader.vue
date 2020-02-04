<template>
  <div :id="`render-${ entry }`" ref="mount"></div>
</template>

<script>
import { moduleLoader } from 'module-loader';

export default {
  props: [ 'src', 'entry', 'events' ],
  data() {
    return { moduleUnloader: null };
  },
  mounted() {
    this.moduleUnloader = moduleLoader({
      src: this.src,
      entry: this.entry,
      events: this.events,
      mount: this.$refs.mount,
      pushState: (href) => this.$emit('pushState', href)
    });
  },
  beforeDestroy() {
    this.moduleUnloader?.();
  }
}
</script>
