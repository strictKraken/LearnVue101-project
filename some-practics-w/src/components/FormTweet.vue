<template>
    <form @submit.prevent="onSubmit" class="tweets__form form-tweet">
        <textarea class="form-tweet__textarea" v-model="body" required placeholder="Whats new today..." />
        <button class="form-tweet__btn" type="submit">Submit</button>
    </form>
</template>

<script>
import {ref} from 'vue';
export default {
    emits: ['onSubmit'],
    setup(_, {emit}) {
        const body = ref('');

        function onSubmit() {
            emit('onMessage',{
                text: body.value,
                date: new Date(Date.now()).toLocaleString(),
                author: 'Stepan',
                likes: 0,
            });
            body.value = '';
        }

        return {
            body,
            onSubmit,  
        }
    }
}

// export default {
//     data() {
//         return {
//             body: '',
//         }
//     }, 
//     methods: {
//         onSubmit() {
//             this.$emit('onMessage',{
//                 text: this.body,
//                 date: new Date(Date.now()).toLocaleString(),
//                 author: 'Stepan',
//                 likes: 0,
//             });
//             this.body = '';
//             //isVisible = !isVisible;
//         }
//     }
//}
</script>