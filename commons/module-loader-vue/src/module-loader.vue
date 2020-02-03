<template>
  <div :id="`render-${ entry }`" ref="mount"></div>
</template>

<script>
import { moduleLoader } from 'module-loader';

export default {
  props: [ 'src', 'entry' ],
  data() {
    return { moduleUnloader: null };
  },
  mounted() {
    this.moduleUnloader = moduleLoader({
      src: this.src,
      entry: this.entry,
      mount: this.$refs.mount,
      pushState: (href) => history.pushState({}, null, href)
    });
  },
  beforeDestroy() {
    console.log('destroy!');
    this.moduleUnloader?.();
  }
}
</script>
