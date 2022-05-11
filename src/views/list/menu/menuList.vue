<template>
    <template v-for="item in list" :key="item.id">
        <div v-if="item.type === 'group'" class="group">
            <div class="group_title">
                <div class="text">{{ item.name }}</div>
            </div>
            <div class="group_content">
                <menu-list :active="active" :list='item.children'></menu-list>
            </div>
        </div>
        <template v-else-if="item.type === 'subItem'">
            <sub-item :active="active" :data='item'></sub-item>
        </template>
        <template v-else>
            <v-item :active="active" :data='item'></v-item>
        </template>
    </template>
</template>

<style lang="less" scoped>
    .group {
        .group_title {
            padding: 0 0 0 48px;
            color: #888;
            .text {
                padding: 10px 0 10px 10px;
                border-bottom: 1px solid #f0f0f0;
            }
        }
        .group_content {
            padding: 0 0 0 48px;
        }
    }
    
</style>

<script>
import { onMounted, ref, reactive, inject, watchEffect } from 'vue';
import Item from './item.vue';
import SubItem from './subItem.vue';

export default {
    name: "MenuList",
    components: {
        'v-item': Item,
        'sub-item': SubItem
    },
    props: {
        list: {
            type: Array,
            default: () => []
        },
        active: {
            type: String,
            default: ""
        }
    },
    setup(props, context) {
        onMounted(() => {
        });
        
        // watchEffect(() =>{
        //     console.log(props.active,"watch")
        // })
        /**
         * sub开关
         */
        
    }
}
</script>