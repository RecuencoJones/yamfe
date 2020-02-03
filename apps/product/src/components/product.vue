<template>
  <main>
    <div>
      Product page
    </div>
    <footer>
      <module-loader src="http://localhost:8083/index.js" entry="browse" />
    </footer>
  </main>
</template>

<script>
import { ModuleLoader } from 'module-loader-vue';

export default {
  components: {
    ModuleLoader
  }
};
</script>
