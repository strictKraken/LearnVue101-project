<template>
    <ul class="tweets__list">
        <TweetItem v-for="item in items" :key="item.id" :item='item' />
    </ul>
</template>

<script>
import TweetItem from '@/components/TweetItem.vue';

export default {
    components: {
        TweetItem,
    },
    props: {
        items: {
            type: Array,
            require: true,
        }
    },
}
</script>
