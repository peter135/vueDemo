<template>
  <main class="contact">
    <ListComponent/>
  </main>
</template>

<script>
import ListComponent from "@/components/ListComponent.vue"
import{ref} from 'vue'

export default {
  name:'Contact',
  components:{
      ListComponent
  }
}
</script>

<style lang="scss" scoped>

.contact {
  background-color: rgba(0,176,234,0.5);
  // height: 100px;
  // height: 100vh;
  // display: flex;
  // justify-content: center;
  // align-items: center;
}

</style>