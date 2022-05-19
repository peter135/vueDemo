
<template>
	<div class='scrolling-component' ref='scrollComponent'>
		<PostComponent v-for="(post,index) in posts" :post="post" :key="index" />
	</div>
</template>

<script>

import PostComponent from "./PostComponent.vue";
import { ref, onMounted, onUnmounted } from "vue";
import getPosts from "../scripts/post-loader";
export default {

  components: { PostComponent},

  setup () {
    const scrollComponent = ref(null) 
  	const posts = ref(getPosts(10))

 	onMounted(() => {
        console.log('onMounted')
        let element = scrollComponent.value;
  		element.addEventListener("scroll", handleScroll)
  	})

  	onUnmounted(() => {
        console.log('onUnmounted')
        let element = scrollComponent.value;
  		element.removeEventListener("scroll", handleScroll)
  	})

    const loadMorePosts = () => {
  		let newPosts = getPosts(10)
  		console.log(newPosts)
  		posts.value.push(...newPosts)
  	}

    const handleScroll = (e) => {

     let element = scrollComponent.value;
     console.log('滚动',e.target.scrollTop)
     console.log('滚动',e.target.scrollHeight)

    //  console.log('滚动1',element.innerHeight)

    // if (
	// 			window.scrollY + window.innerHeight >=
	// 			document.body.scrollHeight - 50
	// 		){
    //             loadMorePosts();
    //         }
    //   let element = scrollComponent.value;

    //   console.log('bottom',element.getBoundingClientRect().bottom)
    //   if (element.getBoundingClientRect().bottom < window.innerHeight) {
    //     loadMorePosts();
    //   }
    };

  	return {
  		posts,
        scrollComponent
  	}
  }
}
</script>

<style lang="scss" scoped>

.scrolling-component{

	// padding: 0 2rem;
	// max-width: 640px;
	// margin: 0 auto;
    height:200px;
    overflow-y:auto
}

</style>