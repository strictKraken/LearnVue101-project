<template>
	<div class="">
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
		position: relative;
	}
	body, html {
	}
	body {
		overflow: overlay;
	}
	//width
	::-webkit-scrollbar {
		width: 8px;
		height: 10px;
	}
	//track
	::-webkit-scrollbar-track {
		background: rgba(202, 210, 245, 0.2);
		//background: transparent;
	}
	//handle
	::-webkit-scrollbar-thumb {
		background: #AC6BAD;
		border-radius: 5px;
	}


</style>
