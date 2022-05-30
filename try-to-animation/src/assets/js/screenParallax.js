"use strict";

import $ from 'jquery';

function screenParallax($mainPage) {
	const speedScroll = 10;

	let $scrollPosition = $(window).scrollTop();
	console.log($mainPage.height(), $scrollPosition);		
	if($mainPage.height() > $scrollPosition) {
		$($mainPage).css(
			"transform", `translateY(${-$scrollPosition*.25 / speedScroll }vh)`
		)
	} 
}

export {screenParallax}