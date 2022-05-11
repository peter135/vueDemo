<template>
    <div class="sub_item">
        <div class="subitem_title" @click="itemSwitch">
            <span class="text">{{ data.name }}</span>
            <span class="iconfont icon-arrow-right arrow" :class="{'on_bottom': state.itemShow}"></span>
        </div>
        <!-- <transition name="slide"> -->
        <collapse-transition>
            <ul class="sub_content" v-show="state.itemShow">
                <li v-for="item in data.children" :key="item.id">
                    <template v-if="item.type === 'subItem'">
                        <sub-item :active="active" :data='item'></sub-item>
                    </template>
                    <template v-else>
                        <v-item :active="active" :data='item'></v-item>
                    </template>
                </li>
            </ul>
        </collapse-transition>
        <!-- </transition> -->
    </div>
</template>

<style lang="less" scoped>
    .sub_item {
        .subitem_title {
            padding: 10px 10px 10px 48px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            .text {
                padding-left: 10px;
            }
            .arrow {
                transition: all 0.5s ease;
            }
            .on_bottom {
                transform: rotate(90deg);
            }
        }
        .subitem_title:hover {
            color: var(--themeColor);
            transition: color 0.5s ease;
        }
        .sub_content {
            padding: 0 0 0 48px;
            overflow: hidden;
        }
    }
    .slide-enter-active,
    .slide-leave-active {
        transition: all 0.3s ease;
    }
    .slide-enter {
        opacity: 0;
    }
    .slide-leave-to {
        opacity: 0;
    }
</style>

<script>
import { onMounted, ref, reactive, inject, watchEffect } from 'vue';
import Item from './item.vue';
// import MenuList from './menuList.vue';
import CollapseTransition from '../../../assets/js/collapse-transition';

export default {
    name: "SubItem",
    components: {
        'v-item': Item,
        // 'menu-list': MenuList,
        'collapse-transition': CollapseTransition
    },
    props: {
        data: {
            type: Object,
            default: () => {}
        },
        active: {
            type: String,
            default: ""
        }
    },
    setup(props, context) {
        const state = reactive({
            itemShow: false // 是否展开list
        });

        onMounted(() => {
            if (props.active.indexOf(props.data.id) === 0) {
                state.itemShow = true;
            }
        })

        const change = inject("itemChange");

        function itemSwitch() {
            state.itemShow = !state.itemShow;
        }

        return {
            itemSwitch,
            state
        }
    }
}
</script>