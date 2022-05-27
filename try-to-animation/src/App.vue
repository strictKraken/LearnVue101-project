<template>
	<div class="h-full">
		<MainPage>
		</MainPage>
	</div>
</template>

<script>
import './assets/tailwind.css';
import MainPage from '@/pages/MainPage.vue';

export default {
	name: 'App',
	components: {
		MainPage,
	}
}
</script>

<style lang="scss">
	#app {
		height: 100%;
	}
	body, html {
		// height: 100%;
	}
	//width
	::-webkit-scrollbar {
		width: 10px;
	}
	//track
	::-webkit-scrollbar-track {
		background: rgb(202, 210, 245);
		//background: transparent;
	}
	//handle
	::-webkit-scrollbar-thumb {
		background: #AC6BAD;
		border-radius: 5px;
	}


</style>
