<template>	
	<div id="app__blur" class="app__blur">
		<HeaderBox />
		<MainPage />
		
	</div>
	<SlideMenu v-if="true"/>	
</template>

<script>

import HeaderBox from '@/components/header_box.vue';
import MainPage from '@/components/main_page.vue'
import SlideMenu from '@/components/SlideMenu.vue'

export default {
	name: 'App',
	components: {
		HeaderBox,
		MainPage,
		SlideMenu,
	}
}
</script>

<style lang="scss">	
	.app {		
		&__blur {
			z-index: 0;
			height: 100%;
			background: rgba(6, 6, 6, 0.76);
			backdrop-filter: blur(40px);
			margin: 0 24px;
		}
	}
</style>
