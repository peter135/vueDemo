<template>
    <aside>
        slidebar
    </aside>
</template>

<script setup>

</script>

<style lang="scss" scoped>
aside {
    display:flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

    background-color: var(--dark);
    color: var(--light);

    transition: 0.2s ease-out;

    @media (max-width:768px) {
        position: fixed;
        z-index: 99;
    }
}
</style>