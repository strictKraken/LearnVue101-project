<template>
    <li class="tweets__item item-tweet"> 
        <div class="item-tweet__top-block">
            <div class="item-tweet__avatar"></div>
            <div class="item-tweet__author">
                {{ item.author }}
            </div>
        </div>
       <p class="item-tweet__text">
            {{ item.text }} 
        </p>
        <div class="item-tweet__likes">
            <div class="item-tweet__logo"></div>
            <span class="item-tweet__count-likes">
                {{ item.likes }}
            </span>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            require: true,
        }
    }
}
</script>