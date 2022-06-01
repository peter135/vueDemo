<template>
  <!-- <dynamic-form :form="form" /> -->
  <!-- <div>
    <dynamic-form
      :form="form"
      @submitted="formSubmitted"
      @error="processErrrors"
    />
    <button submit="true" :form="form.id">Submit</button>
  </div> -->
    <!-- <dynamic-form :form="form"  /> -->
     <div class=" md:mx-auto relative bg-white overflow-hidden border-b">
    <div class="h-12 md:ml-10 md:pr-4 md:space-x-8 flex justify-center">
      <a href="#" class="font-medium text-gray-500 hover:text-gray-900 flex items-center">Home</a>
      <a href="#" class="font-medium text-gray-500 hover:text-gray-900 flex items-center">Product</a>
      <a href="#" class="font-medium text-gray-500 hover:text-gray-900 flex items-center">Article</a>
      <a href="#" class="font-medium text-gray-500 hover:text-gray-900 flex items-center">About</a>
      <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500 flex items-center">Log in</a>
    </div>
        <h1 class="text-4xl font-bold text-center text-blue-500">Hello world, Tailwind by webpack-postcss!</h1>

  </div>

</template>

<script>
import { TextField, EmailField } from '@asigloo/vue-dynamic-forms'
import { Validator, required, email } from '@asigloo/vue-dynamic-forms'

export default {
  name:'HomeIndex',
  components:{
  },
  setup (){

    const updateValues = (values)=> {

      console.log('values',values)
      // Apply your own validation
      // Do what you need with the data
    }

    const form = {
        id: 'my-awesome-form',
        fields: {
          name: TextField({
            label: 'Name',
          }),
          email: EmailField({
            label: 'Email',
            validations: [
                // Validator({ validator: required, text: 'This field is required' }),
                // Validator({ validator: email, text: 'Format of email is incorrect' }),
            ],
          }),
        },
    }

    return {form,updateValues}
  }
}
</script>

<style>
/* @tailwind base;
@tailwind components;
@tailwind utilities; */

</style>>