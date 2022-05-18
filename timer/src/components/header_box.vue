<template>
    <header class="header">
        <div class="container">
            <nav class="header__navigation">
                <ul class="header__list">
                    <li class="header__item">Help</li>
                    <li @click="showSidemenu" class="header__item">Settings</li>
                    <teleport to='#SlideMenu'>
                        <SlideMenu v-if="isOpen"/>
                    </teleport>                
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import SlideMenu from '@/components/SlideMenu.vue';
import { ref } from 'vue';
export default {
    components: {
    SlideMenu,
    
},
    setup() {
        const isOpen = ref(false);
        const showSidemenu = () => {
            isOpen.value = !isOpen.value;
        }

        return {
            isOpen,
            showSidemenu,
        }
    }
}
</script>

<style lang="scss">
.header {
    color: #fff;
    z-index: 99;
    padding: 32px 0 0 0;
    &__list {
        display: flex;
        gap: 63px;
        align-items: center;
        justify-content: flex-end;
    }
    &__item {
        position: relative;
        cursor: pointer;
        
        &::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #fff;
            top: 50%;
            left: 0;
            transform: translate(0, 0);
            
            transition: all 0.2s ease;
        }
        &:hover::after,&:focus::after {            
            transform: translate(0, 450%);
        }
    }
}

</style>