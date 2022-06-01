"use strict";

import $ from 'jquery';

function screenParallax($mainPage) {
	const speedScroll = 11.5;
	let $scrollPosition = $(window).scrollTop();
	if($mainPage.height() >= $scrollPosition) {
		$($mainPage).css(
			"transform", `translateY(${-$scrollPosition*.25 / speedScroll }vh)`
		)
	} 
}

export {screenParallax}