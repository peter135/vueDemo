<template>
  <div class="wrapper">
   <h3> home </h3>
    <!-- <router-link :to="{ path: `/airport/${airport.abbreviation}` }" v-for="airport in airports" :key="airport.abbreviation" class="airport"> -->
		<!-- <router-link :to="{ name: 'AirportDetail', params: { code: airport.abbreviation } }" v-for="airport in airports" :key="airport.abbreviation" class="airport">
      <p>{{ airport.abbreviation }}</p>
			<p>{{ airport.name }}</p>
			<p>{{ airport.city }}, {{ airport.state }}</p>
		</router-link> -->
  </div>
</template>

<script>
import { ref,reactive } from 'vue'
import allAirports from '../../data/airport'

export default {
  name:'Home',
  setup() {

    // const airports = ref(allAirports)
		// return { airports }

    const state = reactive({
        pokemons:[],
        urlIdLookup:{}
    })

    fetch("https://pokeapi.co/api/v2/pokemon?offset=0")
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data)
          state.pokemons = data.results
          // state.urlIdLookup = data.results.reduce((acc,cur,idx) => {
          // },{})
        })

	}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}
.airport {
  border: 3px solid;
  border-radius: .5rem;
  padding: 1rem;
}
.airport p:first-child {
  font-weight: bold;
  font-size: 2.5rem;
  margin: 1rem 0;
}
.airport p:last-child {
  font-style: italic;
  font-size: .8rem;
}
</style>