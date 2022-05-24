<template>	
	<div id="app__blur" class="app__blur">
	</div>

	<div class="container">
		<HeaderBox />
		<MainPage />
	</div>
</template>

<script>

import HeaderBox from '@/components/header_box.vue';
import MainPage from '@/components/main_page.vue'

export default {
	name: 'App',
	components: {
		HeaderBox,
		MainPage,
	}
}
</script>

<style lang="scss">	
	.app {		
		position: relative;
		&__blur {
			position: absolute;
			background: rgba(6, 6, 6, 0.76);
			backdrop-filter: blur(40px);
			min-height: 100%;
			top: 0;
			left: 24px;
			right: 24px;
			bottom: 0;
		}
	}
</style>
