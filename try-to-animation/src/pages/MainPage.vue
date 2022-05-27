<template>
	<HeaderNavigation></HeaderNavigation>
	<section class="mainPage h-screen overflow-hidden">
		<div class="mainPage__content h-full flex flex-col justify-center items-center sticky top-0">
			<div class="mainPage__text">
				<h1 class="mainPage__title text-6xl font-semibold">
					Keqing
				</h1>
				<h2 class="mainPage__subTitle text-4xl">
					Driving Thunder   
				</h2>
			</div>		
			<div class="mainPage__icon flex justify-center mb-10">
				<MainPageArrowDown></MainPageArrowDown>
			</div>
		</div>
	</section>

	<section class="gallery relative" parallaxCarusel inverse>
		<div class="gallery__bg top-0 sticky h-screen overflow-hidden">
			<!-- <transition name="slideItems"></transition> -->
			<div class="gallery__content flex p-4 px-0 absolute t-0 w-full min-h-full">
				<div class="gallery__contentText flex flex-col justify-center items-center ">
					<h3 class="text-4xl mb-4">
						How to Play (Gameplay) Fun
					</h3>
					<p class="text-xl">
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
			<div class="gallery__content flex p-4 px-0 absolute t-0 w-full min-h-full">
				<div class="gallery__contentText flex flex-col justify-center items-center ">
					<h3 class="text-4xl mb-4">
						DPS LETSGOO
					</h3>
					<p class="text-xl">
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
	
	<section class="bigGallery p-10">
		<h2 class="text-center text-6xl"> More characters </h2>
		<div class="bigGallery__grid gridBigGallery">
		</div>
	</section>
</template>

<script>
import MainPageArrowDown from '@/components/MainPageArrowDown.vue';
import HeaderNavigation from '@/components/HeaderNavigation.vue';
//---------my-imports--------------------//
import $ from 'jquery';
import * as screenParallax from '@/assets/js/screenParallax.js';

$(window).ready(function() {
	screenParallax.screenParallax($(".mainPage__content"));
	screenParallax.sliderParallax($('[parallaxCarusel]'));
})	

export default {
	name: 'MainPage',
	components: {
		MainPageArrowDown,
		HeaderNavigation,
	},
	setup () {
		
	}
}
</script>

<style lang="scss">
	.mainPage {
		background-color: #fdfdfd;
		
		&__text {
			flex: 1 1 auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: center;
			gap: 1em;
		}
	}
	.gallery {
		color: #fdfdfd;
		&__bg {
			background-color: #121212;
		}
		&__contentText {
			flex: 1 60%;
			padding: 10em;            
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