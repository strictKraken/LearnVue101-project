<template>
	<header class="header">
		<div class="container">
			<nav class="header__navigation">
				<ul class="header__list">
					<li @click="showSideMenu(link.name)" class="header__item" v-for="(link) in headerList" :key="link.id">
						{{ link.name }}
					</li>
				</ul>
			</nav>
		</div>
	</header>
	<Transition name="Slide-Menu">
		<SlideMenu v-if="isOpen && slideMenuItem === 'Help' " >
			<template #title>
				Help
			</template>
		</SlideMenu>	
		<SlideMenu v-else-if="isOpen && slideMenuItem === 'Settings' " >
			<template #title>
				Settings
			</template>
		</SlideMenu>
	</Transition>
	
	<Transition name="Blur">
		<div v-if="isOpen" class="blur" @click="closeOutSideMenu"></div>
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
		let slideMenuItem = ref('');
		const headerList = {
			help: {
				name: "Help"
			},
			settings: {
				name: 'Settings',
				list: [
					'Time',
					'Language',
				],
			}	
		}	
		

		let isClassActive = ref(false);
		let isOpen = ref(false);
		const showSideMenu = (name) => {
			if (slideMenuItem.value !== name) {
				slideMenuItem.value = name ;
				isOpen.value = true;
				isClassActive.value = true;
			} else {
				isOpen.value = !isOpen.value;
				isClassActive.value = !isClassActive.value;
			}
		}

		let closeOutSideMenu = () => {
			isOpen.value = false;
			console.log('close shit');
		}
		return {
			isOpen,
			showSideMenu,
			isClassActive,
			slideMenuItem,
			headerList,
			closeOutSideMenu
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
	z-index: 4;
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