<template>
    <div class="bg-white w-full h-20 flex flex-row justify-between items-center md:justify-start">
         <span class="ml-5">Navbar</span>

         <div class="hidden md:block">
              <span class="ml-5 text-sky-500">About</span>
              <span class="ml-5 text-sky-500">Home</span>
              <span class="ml-5 text-sky-500">Settings</span>
         </div>

          <div class="md:hidden mr-5" >
            <span class="material-icons">home</span>
         </div>
    </div>
</template>

<script>
export default {

    setup (){
    }

}
</script>

<style scoped>


</style>