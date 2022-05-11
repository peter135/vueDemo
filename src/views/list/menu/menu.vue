<template>
    <!-- <div class="tao_menu">
        <div class="menu_header">
            
        </div> -->
        <MenuList :list="menuList" :active="state.active"/>
    <!-- </div> -->
</template>

<style lang="less" scoped>
    .menu_header {
        height: 48px;
    }
</style>

<script>
import { provide, reactive } from 'vue';
import MenuList from './menuList.vue';

export default {
    name: 'MenuList',
    components: {
         MenuList
    },
    // props: {
    //     menuList: {
    //         type: Array,
    //         default: () => []
    //     },
    //     defaultActive: {
    //         type: String,
    //         default: ""
    //     }
    // },
    setup(){
        console.log('setup')

    }
    // setup(props, context) {
    //     console.log('props',props)
    //     const state = reactive({
    //         active: props.defaultActive
    //     });
    //     const itemChange = (e) => {
    //         state.active = e;
    //         context.emit("onActive", e);
    //     }
        
    //     provide('itemChange', itemChange);
    //     return {
    //         state
    //     }
    // }
}
</script>