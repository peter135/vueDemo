
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
        // console.log('onUnmounted')
        // let element = scrollComponent.value;
  		// element.removeEventListener("scroll", handleScroll)
  	})

    const loadMorePosts = () => {
  		let newPosts = getPosts(10)
  		console.log(newPosts)
  		posts.value.push(...newPosts)
  	}

    const handleScroll = (e) => {

     let element = scrollComponent.value;
     const height = Math.ceil(element.getBoundingClientRect().height)
     const scrollTop = e.target.scrollTop
     const scrollHeight = e.target.scrollHeight

     const toggleDistance = 20;//触发距离

     console.log('滚动 scrollTop',scrollTop)
     console.log('滚动 scrollHeight',scrollHeight)
     console.log('滚动 height',height)

     if (scrollTop + height + toggleDistance >= scrollHeight) {
        console.log('加载更多')
        loadMorePosts();
     }

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
    height:80vh;
    overflow-y:auto
}

</style>