<template>

<!-- <main> -->
  <!-- <div class="container text-center  mt-5 mb-5">
    <h1 class="mt-5 fw-bolder text-success "> Student's Database </h1>
     <div class="table-responsive my-5">
      
       <Table :fields='fields' :studentData ="studentData"></Table>
     </div>
  </div> -->
<!-- </main> -->
  <div class="container-fluid">
       <div class="row ">
           <div class="col-6 col-md-8 _red">.col-12 .col-md-8</div>
           <div class="col-6 col-md-4 _green">.col-6 .col-md-4</div>
       </div>
      <div class="row">
           <div class="col-6 col-md-4 _red">.col-6 .col-md-4</div>
           <div class="col-6 col-md-4 _green">.col-6 .col-md-4</div>
           <div class="col-6 col-md-4 _blue">.col-6 .col-md-4</div>
      </div>
  </div>

</template>

<script>

import Table from '@/components/Table.vue'

export default {
  name: 'Team',
  components: {
    Table
  },
  setup(){

    //An array of values for the data
       const studentData = [
      {ID:"01", Name: "Abiola Esther", Course:"Computer Science", Gender:"Female", Age:"17"},
     {ID:"02", Name: "Robert V. Kratz", Course:"Philosophy", Gender:"Male", Age:'19'},
      {ID:"03", Name: "Kristen Anderson", Course:"Economics", Gender:"Female", Age:'20'},
     {ID:"04", Name: "Adam Simon", Course:"Food science", Gender:"Male", Age:'21'},
      {ID:"05", Name: "Daisy Katherine", Course:"Business studies", Gender:"Female", Age:'22'},  
    ]

    const fields = [
      'ID','Name','Course','Gender','Age'
    ]

    return{studentData,fields}
  },
}

</script>

<style scoped>

@import "bootstrap/dist/css/bootstrap.min.css";
._red  {
  background: red;
}

._green  {
  background: green;
}

._blue  {
  background: blue;;
}

._black  {
  background: black;
}


</style>>