<template>
	<main>
		<div class="tweets">
			<div class="container">
                <FormAddTweet v-if="isVisible" @onMessage='handleMessage'/>
				<TweetList :items="items" />
                <button class="tweets__btn-show-form btn-show-form" @click.prevent.stop="showForm"  >+</button>
			</div>
		</div>
	</main>
</template>

<script>
import TweetList from '@/components/TweetList.vue';
import FormAddTweet from '@/components/FormTweet.vue';
export default {
	components: {
		TweetList,
		FormAddTweet,
	},
	data() {
        return {
            isVisible: false,
            items: [
                {
                    text: 'Hello its my Vue app',
                    date: new Date(Date.now()).toLocaleString(),
                    likes: 0,
                    author: 'Stepan',
                },
                {
                    text: 'Its great work!',
                    date: new Date(Date.now()).toLocaleString(),
                    likes: 1,
                    author: 'Boolean',
                },
                {
                    text: 'Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,v,Some spam lets goooo,Some spam lets goooo,v,v,v,v,Some spam lets gooooSome spam lets gooooSome spam lets gooooSome spam lets goooo,Some spam lets goooo,Some spam lets goooo,v',
                    date: new Date(Date.now()).toLocaleString(),
                    likes: 1024,
                    author: 'Tomas',
                },
                {
                    text: 'Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,v,Some spam lets goooo,Some spam lets goooo,v,v,v,v,Some spam lets gooooSome spam lets gooooSome spam lets gooooSome spam lets goooo,Some spam lets goooo,Some spam lets goooo,v',
                    date: new Date(Date.now()).toLocaleString(),
                    likes: 1024,
                    author: 'Tomas',
                },
            ],
        }
    },
    methods: {
        showForm() {
            this.isVisible = !this.isVisible;
        },
        handleMessage(item) {
            this.items.push(item);
        },
    }
}
</script>