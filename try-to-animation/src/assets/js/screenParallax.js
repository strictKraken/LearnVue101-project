"use strict";

import $ from 'jquery';

export function screenParallax($mainPage) {
	const speedScroll = 60;

	function scrollParalax(){
		let $scrollPosition = $(window).scrollTop();
		let $windowHeight = $(window).height();

		if ($scrollPosition * speedScroll / $windowHeight <= speedScroll) {
			$($mainPage).css(
			"transform", `translateY(${$scrollPosition * speedScroll /$windowHeight}vh)`
			)
		}
	}
	scrollParalax();
	$(window).on('scroll', scrollParalax);
	
}

export function sliderParallax($Slider) {
	console.log($($Slider));
}