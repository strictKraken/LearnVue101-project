<template>
    <header class="header fixed lg:right-20 lg:top-20 right-5 top-5 flex justify-end z-50 ">
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
    setup() {
    }
}
</script>