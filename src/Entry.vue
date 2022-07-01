<template>
  <div class="app">
    <Slidebar/>
    <router-view/>
  </div>
</template>

<script >
import Slidebar from '@/components/slidebar.vue'

export default {
  name:'Entry',
  components:{
      Slidebar
  },

  setup (){
  }

}

</script>

<style lang="scss" scoped>


.app {
  display: flex;
  main {
      flex:1 1 0;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
  }
}
</style>
