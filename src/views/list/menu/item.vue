<template>
    <div class="item" @click="checkItem">
        <router-link :class="{action: data.id === active}" :to="data.path" v-if="data.path">{{ data.name }}</router-link>
        <a href="javascript:void()" :class="{action: data.id === active}" v-else>{{ data.name }}(Path未传)</a>
    </div>
</template>

<style lang="less" scoped>
    .item {
        a {
            padding: 10px 0 10px 10px;
            color: #222;
            text-decoration: none;
            width: 100%;
            height: 100%;
            display: block;
            box-sizing: border-box;
            transition: background 0.5s ease;
        }
        a:hover {
            color: var(--themeColor);
        }
        .action {
            background: var(--themeBgColor);
            color: var(--themeColor);
            border-right: 3px solid var(--themeColor);
        }
    }
    
</style>

<script>
import { onMounted, inject } from 'vue';

export default {
    props: {
        data: {
            type: Object,
            default: () => {}
        },
        active: {
            type: String,
            default: null
        }
    },
    setup(props, context) {
        onMounted(() => {
        });
        /**
         * 菜单选择
         */
        const change = inject("itemChange");
        function checkItem() {
            change(props.data.id);
        }
        return {
            checkItem: checkItem
        }
    }
}
</script>