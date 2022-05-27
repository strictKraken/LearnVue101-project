"use strict";

import $ from 'jquery';

export function inverseColor() {
        //const $itemInverse = $('[burger]');
        let $inverseBlockPosition = $('[inverse]');
        $inverseBlockPosition = $($inverseBlockPosition).scrollTop;
        console.log(`itemForInverse = ${$inverseBlockPosition}`);  
        // $(window).on('scroll',function() {

        //     let $itemInversePosition = $($itemInverse).scrollTop();
        //     if($inverseBlockPosition === $itemInversePosition) {
        //         $($itemInverse).addClass('inverseColor');
        //     }
        // });
        
}