<template>
   <div v-show="visible" class="loading-wrap">
		<div class="loading-box">{{loading}}</div>
	</div>
</template>

<script>
import { reactive ,toRefs } from 'vue';
// interface DataProps {
//    loading:string,
//    visible:boolean
// }
export default ({
  name: 'App',
  components:{
  },
  setup(){
    const data  = reactive({
      loading:"你写的可能有错误...",
      visible: false
    })
    const refData = toRefs(data);
    const setLoading = (val) =>{
      console.log('setloading',val)
      data.loading = val;
      data.visible = true;
    }
    return {
      ...refData,setLoading
    }
  }
});
</script>

<style>
.loading-wrap {
	position: absolute;
	left: 50%;
	top: 50%;
    width: 100px;
    height: 30px;
	/* top: 0;
	bottom: 0; */
	background: rgba(0, 0, 0, 0.5);
}
.loading-box {
	position: absolute;
	left: 50%;
	top: 50%;
	width: 100px;
	transform: translate(-50%, -50%);
}
</style>