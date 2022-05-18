<template>
    <div class="SlideMenu">
        <div class="SlideMenu__body">
            <h4 class="SlideMenu__title">
                Settings
            </h4>
            <ul class="SlideMenu__list">
                <li class="SlideMenu__item">
                    Time
                    <!--<button @click.prevent="">
                        <span>Time</span>
                    </button>-->
                </li>
                <li class="SlideMenu__item">
                    Language
                    <!--<button @click.prevent="">
                        <span>Language</span>
                    </button>-->
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SlideMenu',
}

</script>

<style lang="scss">
    .SlideMenu {
        z-index: 0;
        background: rgba(82, 82, 82, 0.52);
        backdrop-filter: blur(8px);
        position: absolute;
        min-width: 100%;
        height: 100%;
        top: 0;
        &__body {
            z-index: 98;
            max-width: 100%;
            height: 100%;
            margin: 100px 160px 0 0;
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
        }

        &__list {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
        &__item {
            //font-family: inconsolata;
            font-size: 25px;
            line-height: calc(25 / 26 * 100%);
            & > button {
                background: transparent;
            }
        }

    }   

</style>