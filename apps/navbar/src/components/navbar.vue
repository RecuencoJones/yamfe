<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/" @click="handleClick">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/browse" @click="handleClick">Browse</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    handleClick(event) {
      event.preventDefault();
      this.$root.history.pushState(event.target.attributes.href.value);
    }
  }
}
</script>
