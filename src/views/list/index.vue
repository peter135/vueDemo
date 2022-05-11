<template>
  <!-- <div> -->
    <menu  :menuList="menuListData"/>
  <!-- </div> -->
</template>

<script>

import menu from "./menu/menu.vue";
import { computed } from "vue";
import {useStore} from "vuex";

export default {
  name: 'ShoppingCart',
  components: {
    menu,
  },
  setup(){
    const store = useStore();
    // let menuListData = computed(function () {
    //     return store.state.userinfo.menuListData
    // });

    const menuListData = [{
            type: "group",
            name: "通用",
            id: "1",
            children: [
                {
                    type: "item",
                    name: '透明输入框',
                    path: '/docs/inputdoc',
                    id: "1-1"
                },
                {
                    type: "item",
                    name: '菜单',
                    path: '/docs/menudoc',
                    id: "1-2"
                }
            ]
        },
        {
            type: "subItem",
            name: "测试",
            id: "2",
            children: [
                {
                    type: "subItem",
                    name: '测试',
                    id: "2-1",
                    children: [
                        {
                            type: "item",
                            name: '测试',
                            path: '/docs',
                            id: "2-1-1",
                            checked: true
                        },
                        {
                            type: "item",
                            name: '测试',
                            path: '/docs',
                            id: "2-1-2"
                        }
                    ]
                }
            ]
        }]

    console.log('menuListData',menuListData)
    return {
        menuListData
    }
  }
}
</script>