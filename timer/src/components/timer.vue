<template>
    <div class="StopWatch">
        <div class="StopWatch__main">
            00:00
        </div>
        <div class="StopWatch__mseconds">
            000000000000000000000 
            <span class="StopWatch__text-mc">mc</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'StopWatch',
}
</script>

<style lang="scss">
    .StopWatch {
        color: #fff;
        text-align: center;
        margin: 0 0 33px 0;

        &__main {
            margin-bottom: 38px;
            font-size: 320px;
            line-height: calc(320 / 384 * 100%);
        }
        &__mseconds {
            font-family: Gogh;
            font-size: 44px;
            line-height: calc(44 / 61 * 100%);
        }
        &__text-mc {
            font-family: Gogh;
            font-size: 27px;
        }
    }
</style>