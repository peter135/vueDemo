<template>
  <div class="wrapper">
    <!-- <router-link :to="{ path: `/airport/${airport.abbreviation}` }" v-for="airport in airports" :key="airport.abbreviation" class="airport"> -->
		<router-link :to="{ name: 'AirportDetail', params: { code: airport.abbreviation } }" v-for="airport in airports" :key="airport.abbreviation" class="airport">
      <p>{{ airport.abbreviation }}</p>
			<p>{{ airport.name }}</p>
			<p>{{ airport.city }}, {{ airport.state }}</p>
		</router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import allAirports from '../../data/airport'
import { useStore } from "vuex";
import { dynamic_routes } from "../../router/index";
import router from "../../router/index";

export default {
  setup() {

    // // 【用户角色权限控制 | 动态添加路由】
    // const store = useStore();
    // if(store.state.userinfo.user != null){ //从vuex中拿到用户信息
    //   //用户已经登录
    //   const { permission_list } = store.state.userinfo.user; // 从用户信息中获取权限列表
    //   const allow_routes = dynamic_routes.filter((route)=>{ //过滤允许访问的路由
    //     return permission_list.includes(route.name); 
    //   })
    //   console.log('store',allow_routes)

    //   allow_routes.forEach((route)=>{ // 将允许访问的路由动态添加到路由栈中
    //     router.addRoute(route);
    //   })
    // }

    const airports = ref(allAirports)
		return { airports }
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