<template>
  <div class="app">
    <slide-bar/>
    <router-view/>
  </div>
</template>

<script >
import Slidebar from '@/components/slidebar.vue'

export default {
  name:'Entry',
  components:{
      Slidebar:'slide-bar'
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
      padding:2rem;
      // @media (max-width:768px) {
      //   padding-left: 6rem;
      // }
  }
}
</style>
