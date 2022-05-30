<template>
	<HeaderNavigation></HeaderNavigation>
	<section class="mainPage h-full flex flex-col items-center sticky top-0 -z-10">
		<!-- <div class="mainPage__content "> -->
			<div class="mainPage__text flex-auto text-center flex flex-col justify-center md:gap-3 gap-2">
				<h1 class="mainPage__title text-6xl font-semibold">
					Keqing
				</h1>
				<h2 class="mainPage__subTitle text-4xl">
					Driving Thunder   
				</h2>
			</div>		
			<div class="mainPage__icon mb-5">
				<MainPageArrowDown></MainPageArrowDown>
			</div>
		<!-- </div> -->
	</section>

	<section class="gallery relative h-screen" parallaxCarusel inverse ref='galleryParallax'>
		<div class="gallery__bg gallery__container sticky top-0 h-screen overflow-hidden">
			<div class="gallery__content md:flex p-4 px-0 absolute t-0 w-full min-h-full lg:p-0 ">
				<div class="gallery__contentText flex lg:g-2 flex-col justify-center items-center ">
					<h3 class="md:text-4xl font-semibold mb-2 mt-2 md:mb-4 text-xl">
						How to Play (Gameplay) Fun
					</h3>
					<p class="lg:text-xl px-6 mb-4" >
						Another advantage of Keqing Genshin Impact is that it is a fun way to play. 
		eleKeqing's mental skill, Lightning Stiletto, can make a mark that you can place at a certain distance or height. 
		You can easily combine your way of playing with Normal Attack which will make Keqing ter infusion with Electro, Charged Attack to attack from afar.
		In fact, a Plunge Attack by placing the Lighting Stiletto at a height makes skills this is one of Keqing Genshin Impact's most dominant strengths.
		Keqing's attacks are also fast-paced so you don't have to wait for long attack animations. Usually this animation will make you easily hit by enemy attacks
		The advantages of Keqing Genshin Impact from Lighting Stilleto can also be used to facilitate map exploration or Map Genshin Impact.
		You can easily reach higher ground using the Stiletto, fly to higher ground, and also save energy because it reduces the stamina time you spend climbing.
					</p>
				</div>
				<div class="gallery__contentImage flex justify-center items-center">
					<img class="rounded-2xl" src="@/assets/img/1.jpg" alt="1">
				</div>
			</div>
			<div class="gallery__content md:flex p-4 px-0 absolute t-0 w-full min-h-full lg:p-o opacity-0">
				<div class="gallery__contentText flex flex-col justify-center items-center ">
					<h3 class="lg:text-4xl mb-4">
						DPS LETSGOO
					</h3>
					<p class="lg:text-xl">
						The advantages of Keqing Genshin Impact as Play DPS also because it doesn't need energy cost large enough to use Elemental Burst.
			Keqing only requires an Energy Cost of 40 to use burst. Many other DPS require Energy Cost 80 so it will be difficult to do spamming burst or requires a Battery character.
			The Cooldown and Internal Cooldown of Keqing's Elemental Skills are also short in duration so you can use them at any time. 
			The choice of weapons that you use can start from 3 stars such as Harbinger of Dawn, 4 stars that you can make such as Amenoma Kageuchi or Prototype Rancour. 
			Even, 5 star weapon like Summit Sharper which rarely matches other characters you can use for Keqing. 
			You can also adjust the team combination with build which one do you want to use where can you use team relemental reaction Electro-Charged or Overloaded. 
			you can use the Mono Electro team (all team members use Electro elements) and Electro-Geo, making this Keqing Genshin Impact advantage you should take into account for build Keqing becomes your DPS.
					</p>    
				</div>
				<div class="gallery__contentImage flex justify-center items-center">
					<img class="rounded-2xl" src="@/assets/img/2.jpg" alt="2">
				</div>
			</div>
		</div>
	</section>
	
	<section class="bigGallery pt-2 pb-2 md:p-10">
		<h2 class="text-center text-4xl font-semibold md:text-6xl"> More characters </h2>
		<div class="bigGallery__grid gridBigGallery">
		</div>
	</section>
</template>

<script>
import MainPageArrowDown from '@/components/MainPageArrowDown.vue';
import HeaderNavigation from '@/components/HeaderNavigation.vue';
//---------my-imports--------------------//
import $ from 'jquery';
import {screenParallax} from '@/assets/js/screenParallax.js';
import {onMounted, onUnmounted, onUpdated, ref} from 'vue';

export default {
	name: 'MainPage',
	components: {
		MainPageArrowDown,
		HeaderNavigation,
	},
	setup () {
		onMounted(() => {
			$(window).on('scroll', function() {
				screenParallax($(".mainPage"));
				handleSliderScroll();
			});
			
		});
		onUpdated(() => {

			handleSliderScroll();
		})
		onUnmounted(() => {
			handleSliderScroll();
			$(window).unbind('scroll', function() {
				screenParallax($(".mainPage"));
			});
		});
		//-----Slider parallax?
		const galleryParallax = ref(null);
		function handleSliderScroll() {
			let $parallaxCarusel = $("[parallaxCarusel]");
			let $slides = $(".gallery__content");
			let $slidesLength = $slides.length;
			//
			// let activeSlide = 0;
			
			// let heightBlock = $parallaxCarusel.height();
			const posotionAnimation = 3; 
			let $slideHeight = $($slides[0]).height();

			// console.log($(window).scrollTop() + $(window).height())
			// console.log(($slideHeight + $slideHeight / posotionAnimation));
			$parallaxCarusel.height(`${100 * $slidesLength}vh`);
			
			if(($(window).height() + $(window).scrollTop()) >= ($slideHeight + ($slideHeight / posotionAnimation))){
				//showSlide(activeSlide);
			} else {
				//showSlide(-1);
			}

			// function showSlide(activeSlide) {
			// 	$($slides).css({
			// 		"opacity": "0",
			// 	});
			// 	$($slides[activeSlide]).css({
			// 		"opacity":'1',
			// 	})
			// }


			if($parallaxCarusel.offset().top <= $(window).scrollTop()) {

				if($(window).scrollTop() - $slideHeight >= $slideHeight / $slidesLength) {
					// activeSlide++;
					//showSlide(activeSlide);
				}

			} else if($(window).scrollTop() < $parallaxCarusel.offset().top) {
				// console.log('top');
			} else if ($(window).scrollTop() > ($parallaxCarusel.offset().top + $parallaxCarusel.height)) {
				// console.log('down');
			}
			// console.log($(window).scrollTop(),$parallaxCarusel.offset().top + $parallaxCarusel.height())
			
			
		}

		return {
			galleryParallax,
			handleSliderScroll,
		}

	}
}
//for mobile browser height sreen
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh',`${vh}px`);
window.addEventListener('resize', () => {
	let vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh',`${vh}px`);
})

</script>

<style lang="scss">
	.mainPage {
		background-color: #fdfdfd;
		height: calc(var(--vh,1vh)*100);
		transition: transform .1s;
		
	}
	.gallery {
		color: #fdfdfd;
		&__bg {
			background-color: #121212;
		}
		&__contentText {
			flex: 1 60%;
		}
		&__contentImage {
			flex: 1 30%;
			img {
				max-height: 90vh;
				object-fit: cover;
				object-position: center;
			}
		}
	}
</style>