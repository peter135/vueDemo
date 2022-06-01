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
    <dynamic-form :form="form"  />

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


