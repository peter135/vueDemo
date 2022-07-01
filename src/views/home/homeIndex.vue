<template>

  <main class="container-center">
     <!-- <theme-button /> -->
     <tail-wind />
  </main>

</template>

<script>
import ThemeButton from "@/components/ThemeButton.vue";
import TailWind from "@/components/TailWind.vue";

export default {
  name:'HomeIndex',
  components:{ ThemeButton, TailWind },
  setup (){

  }
}
</script>

<style lang="scss" scoped>

.container-center {
  background-color: var(--background-color-primary);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>>