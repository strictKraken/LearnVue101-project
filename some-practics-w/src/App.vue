<template>
	<main>
		<div class="tweets">
			<div class="container">
                <transition name="slide-form">
                    <FormAddTweet v-show="isVisible" @onMessage='handleMessage'/>
                </transition>
				<TweetList :items="items" />
                <button class="tweets__btn-show-form btn-show-form" @click.prevent.stop="showForm"  >+</button>
			</div>
		</div>
	</main>
</template>

<script>
import { ref } from 'vue';
import TweetList from '@/components/TweetList.vue';
import FormAddTweet from '@/components/FormTweet.vue';

//----Composition APi--------------
export default {
    components: {
        TweetList,
        FormAddTweet,
    },
    setup() {
        let isVisible = ref(false);
        const items = ref([
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
        ]);
        const handleMessage = item => items.value.push(item);
        const showForm = () => isVisible.value = !isVisible.value;
        // function showForm() {
        //     isVisible.value = !isVisible.value;
        // }
        return {
            items,
            handleMessage,
            isVisible,
            showForm,
        }        
    },
}
// export default {
// 	components: {
// 		TweetList,
// 		FormAddTweet,
// 	},
// 	data() {
//         return {
//             isVisible: false,
//             items: [
//                 {
//                     text: 'Hello its my Vue app',
//                     date: new Date(Date.now()).toLocaleString(),
//                     likes: 0,
//                     author: 'Stepan',
//                 },
//                 {
//                     text: 'Its great work!',
//                     date: new Date(Date.now()).toLocaleString(),
//                     likes: 1,
//                     author: 'Boolean',
//                 },
//                 {
//                     text: 'Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,v,Some spam lets goooo,Some spam lets goooo,v,v,v,v,Some spam lets gooooSome spam lets gooooSome spam lets gooooSome spam lets goooo,Some spam lets goooo,Some spam lets goooo,v',
//                     date: new Date(Date.now()).toLocaleString(),
//                     likes: 1024,
//                     author: 'Tomas',
//                 },
//                 {
//                     text: 'Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,Some spam lets goooo,v,Some spam lets goooo,Some spam lets goooo,v,v,v,v,Some spam lets gooooSome spam lets gooooSome spam lets gooooSome spam lets goooo,Some spam lets goooo,Some spam lets goooo,v',
//                     date: new Date(Date.now()).toLocaleString(),
//                     likes: 1024,
//                     author: 'Tomas',
//                 },
//             ],
//         }
//     },
//     methods: {
//         showForm() {
//             this.isVisible = !this.isVisible;
//         },
//         handleMessage(item) {
//             this.items.push(item);
//         },
//     }
// }
</script>