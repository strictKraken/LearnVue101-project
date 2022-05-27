"use strict";

import $ from 'jquery';

export function screenParallax($mainPage) {
	const speedScroll = 60;

	$(window).on('scroll',function(){
		let $scrollPosition = $(window).scrollTop();
		let $windowHeight = $(window).height();

		if ($scrollPosition * speedScroll / $windowHeight <= speedScroll) {
			$($mainPage).css(
			"transform", `translateY(${$scrollPosition * speedScroll /$windowHeight}vh)`
			)
		}
	})
}

export function sliderParallax($Slider) {
	console.log($($Slider));
	// const $Slides = $($Slider).find("")
}