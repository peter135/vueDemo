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
