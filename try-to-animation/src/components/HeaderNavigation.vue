<template>
    <header class="header fixed right-20 top-20 flex justify-end z-50 ">
        <HeaderNavigationBurger></HeaderNavigationBurger>
    </header>
</template>

<script>
import HeaderNavigationBurger from '@/components/HeaderNavigationBurger.vue';

export default {
    name: "HeaderNavigation",
    components: {
    HeaderNavigationBurger,
},
    setup() {}
}
</script>

<style lang="scss">
    .header {}
</style>