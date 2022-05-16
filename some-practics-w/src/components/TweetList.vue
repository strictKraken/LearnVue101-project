<template>
    <select v-model="sortBy">
        <option value="date">Sort by date</option>
        <option value="likes">Sort by likes</option>
    </select>

    <ul class="tweets__list">
        <TweetItem v-for="item in sorteredItems" :key="item.id" :item='item' />
    </ul>
</template>

<script>
import {ref,computed} from 'vue';
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

    setup(props) {          
        const sortBy = ref('likes');
        const sorteredItems = computed(() => {
            return [...props.items].sort((a,b) => {
                if ( a[sortBy.value] > b[sortBy.value]) {
                    console.log(a[sortBy.value]);
                    return -1;
                } else if (a[sortBy.value] < b[sortBy.value]) {
                    return 1;
                } else return 0; 
            })
        })

        return {
            sortBy,
            sorteredItems,
        }
    }
}
</script>