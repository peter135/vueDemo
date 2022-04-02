<template>
  <div id='root'>
     <div id='nav'>
        <router-link to='/FilterSearch'>FilterSearch </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}

</script>


<style>
#root {
  text-align: center;
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}

#nav {
  font-size: 1.5em;
  margin-bottom: 30px;
}

</style>
