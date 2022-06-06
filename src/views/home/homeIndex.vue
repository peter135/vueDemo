<template>
     <!-- <div class=" md:mx-auto relative bg-white overflow-hidden border-b">
    <div class="h-12 md:ml-10 md:pr-4 md:space-x-8 flex justify-center">
      <a href="#" class="font-medium text-gray-500 hover:text-gray-900 flex items-center">Home</a>
      <a href="#" class="font-medium text-gray-500 hover:text-gray-900 flex items-center">Product</a>
      <a href="#" class="font-medium text-gray-500 hover:text-gray-900 flex items-center">Article</a>
      <a href="#" class="font-medium text-gray-500 hover:text-gray-900 flex items-center">About</a>
      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 flex items-center">Log in</a>
    </div>
    <h1 class="text-4xl font-bold text-center text-blue-500">Hello world, Tailwind by webpack-postcss!</h1> 
      </div>-->
  <main class="container-center">
    <div class="card">
      <theme-button />
      <p>Wer sitzt dort so spät, bei Nacht und Wind?</p>
      <p>Entwickler Clemens, mit einem Pint.</p>
      <p>Man hört ihn seufzen, ziemlich hart -</p>
      <p>Sonntag ist's, die Deadline naht</p>
    </div>
  </main>

</template>

<script>
import ThemeButton from "@/components/ThemeButton.vue";

export default {
  name:'HomeIndex',
  components:{ ThemeButton },
  setup (){

  }
}
</script>

<style lang="scss" scoped>

p {
  color: var(--text-primary-color);
}

.container-center {
  background-color: var(--background-color-primary);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  padding: 2rem 4rem;
  height: 200px;
  width: 400px;
  text-align: center;
  border: 1px solid var(--accent-color);
  border-radius: 4px;
  background-color: var(--background-color-secondary);
}

</style>>