<template>
  <div class="app">
    <Slidebar/>
    <router-view/>
  </div>
</template>

<script setup>
import Slidebar from './components/slidebar.vue'

</script>


<style lang="scss" scoped>

:root{
  --primary:#4ade80;
  --primary-alt:#22c55e;
  --grey:#64748b;
  --dark:#4ade80;
  --dark-alt:#334155;
  --light:#f1f5f9;
  --slidebar-width:300px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--light);
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.app {
  display: flex;
  main {
      flex:1 1 0;
      padding:2rem;
      @media (max-width:768px) {
        padding-left: 6rem;
      }
  }
}
</style>
