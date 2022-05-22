<template>
	<header class="header">
		<div class="container">
			<nav class="header__navigation">
				<ul class="header__list">
					<li @click="showSideMenuHelp" class="header__item">Help</li>
					<li @click="showSideMenu" class="header__item">Settings</li>
				</ul>
			</nav>
		</div>
	</header>
	<Transition name="Slide-Menu">
		<SlideMenu v-if="isOpen" :items="settings">
			<template #title>
				Settings
			</template>
		</SlideMenu>	

		
	</Transition>
	<Transition name=Slide-Menu>
		<SlideMenu v-if="isOpenHelp" >
			<template #title>
				Help
			</template>
		</SlideMenu>
	</Transition>


	<Transition name="Blur">
		<div v-if="isClassActive" class="blur"></div>
	</Transition>
</template>

<script>
import SlideMenu from '@/components/SlideMenu.vue';
import { ref } from 'vue';
export default {
	components: {
	SlideMenu,
	
},
	setup() {
		const settings = [
			'Time',
			'Language',
		]
		
		let isClassActive = ref(false);
		let isOpenHelp = ref(false);
		const isOpen = ref(false);


		let showSideMenu = () => {
			isOpen.value = !isOpen.value;
			isClassActive.value = !isClassActive.value;
		}

		let showSideMenuHelp = () => {
			isOpenHelp.value = !isOpenHelp.value;
			isClassActive.value = !isClassActive.value;
		}

		return {
			isOpen,
			showSideMenu,
			isClassActive,
			settings,
			isOpenHelp,
			showSideMenuHelp,
		}
	}
}
</script>

<style lang="scss">

.header {
	color: #fff;
	padding: 32px 0 0 0;
	z-index: 9999;
	position: sticky;
	
	&__list {
		display: flex;
		gap: 63px;
		align-items: center;
		justify-content: flex-end;
	}
	&__item {
		position: relative;
		cursor: pointer;
		
		&::after {
			content: '';
			position: absolute;
			width: 100%;
			height: 2px;
			background-color: #fff;
			top: 50%;
			left: 0;
			transform: translate(0, 0);
			transition: all 0.2s ease;
		}
		&:hover::after,&:focus::after {            
			transform: translate(0, 450%);
		}
	}
}

.blur {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(82, 82, 82, 0.52);
	backdrop-filter: blur(8px);
}

//-----Animation------//
	.Slide-Menu-enter-from,
    .Slide-Menu-leave-to {
        transform: translate(-100%,0);
    }
   
    .Slide-Menu-leave-active,
    .Slide-Menu-enter-active {
        transition: all 0.5s ease;
		transition-delay: 0.2s;
    }

	.Blur-enter-from,
	.Blur-leave-to {
		opacity: 0;
	}
	
	.Blur-enter-active,
	.Blur-leave-active {
		transition: all 0.2s ease 0.1s;
	}

</style>