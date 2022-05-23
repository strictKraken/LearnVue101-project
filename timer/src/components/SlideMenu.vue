<template>
        <div class="SlideMenu" 
             v-bind:class="{SlideMenu__active : isClassActive}"
             >

        <div class="SlideMenu__body">
            <h4 class="SlideMenu__title">
                <slot name="title">SetUp</slot>
            </h4>
            <ul class="SlideMenu__list">
                <li class="SlideMenu__item" v-for="item in list" :key="item.id">
                    <slot name="item"> {{ item }} </slot>
                </li>
            </ul>
        </div>
    </div>
    
</template>

<script>
import {ref} from 'vue';
export default {
    //props: ['items','isOpen'],
    name: 'SlideMenu',
    setup(props) {
        let isOpen = ref(props.isOpen);

        let list = ref(props.items);
        let isClassActive = ref(true);
        let addBlur = () => {
            isClassActive.value = !isClassActive.value;
            console.log('added Blur');
        }


        let showMenu = () => {
            return 0
        }
        return {
            isClassActive,
            addBlur,
            list,
            isOpen,
            showMenu,
        }
    }
}

</script>

<style lang="scss">
.SlideMenu {
    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    &__body {
        position: absolute;
        top: 100px;
        left: 0;
        right: 160px;
        bottom: 0;  
        padding: 40px 100px;
        text-decoration: underline;
        background: #171717;
        color: #fff;
    }
    
    &__title {
        text-align: end;
        font-family: inconsolata;
        font-size: 50px;
        line-height: calc(53 / 50 * 100%);
        margin-bottom: 60px;
    }

    &__list {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    &__item {   
        font-size: 25px;
        line-height: calc(25 / 26 * 100%);
        margin-bottom: 32px;
        & > button {
            background: transparent;
        }
    }

}   
    
</style>