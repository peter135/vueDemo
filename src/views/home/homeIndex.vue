<template>

  <main class="container-center">
     <!-- <theme-button /> -->
     <tail-wind />
  </main>

</template>

<script>
import ThemeButton from "@/components/ThemeButton.vue";
import TailWind from "@/components/TailWind.vue";
import { getCurrentInstance } from 'vue';

export default {
  name:'HomeIndex',
  components:{ ThemeButton, TailWind },
  setup (){

    const instance = getCurrentInstance();
    instance.proxy.$Toast.info("不会有bug的好");

  }
}
</script>

<style lang="scss" scoped>

.container-center {
  background-color: var(--background-color-primary);
  width:100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>>