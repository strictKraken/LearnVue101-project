<template>
	<div class="main">
		<div class="container">
			<div class="main__sign">
				<SignText @onTap = 'handleTap'/>
			</div>
			<div class="main__timer">
				<StopWatch ref='StopWatch'/>
			</div>
			
			<div class="main__buttons">
				<BtnRestart @click="btnRestart"/>
				<BtnStop @click="btnStop"/>
			</div>
		</div>    
	</div>  
	<div class="main__img-left">
		<img src="@/assets/img/left-img.jpg" alt="">
		<img src="@/assets/img/left-img.jpg" alt="">
		<img src="@/assets/img/left-img.jpg" alt="">
		<img src="@/assets/img/left-img.jpg" alt="">
		<div class="main__corean-sign">
			세상에서 <br>
			보고싶은  <br>
			변화가있 <br>
			다면당신 <br>
			스스로그 <br>
			변화가되 <br>
			어라<br>
		</div>
	</div>
	<div class="main__img-right">
		<img class="main__img-green" src="@/assets/img/img-left(1).jpg" alt="">
		<img src="@/assets/img/cursed.jpg" alt="">
		<img src="@/assets/img/cursed_bigger.jpg" alt="">
	</div>  
</template>

<script>
import StopWatch from './timer.vue';
import SignText from './SignText.vue';
import BtnRestart from './Btn-Restart.vue';
import BtnStop from './Btn-Stop.vue';

import {ref} from 'vue';

export default {
	components: {
		StopWatch,
		SignText,
		BtnStop,
		BtnRestart,
	},
	setup () {
		let isStartedTimer = ref(null);
		const StopWatch = ref(null);

		const handleTap = () => {
			StopWatch.value.startTimer();
		}
		const btnStop = () => {
			StopWatch.value.stopTimer();
		}
		const btnRestart = () => {
			StopWatch.value.resetTimer();
		}

		return {
			handleTap,
			isStartedTimer,
			StopWatch,
			btnStop,
			btnRestart,
		}
	}
}
</script>
<style lang="scss">
.main {
	z-index: 3;
}
.main {
	position: relative;
	&__sign {
		display: flex;
		justify-content: center;
		z-index: 33;
	}
	
	&__img-right, &__img-left {
		z-index: 0;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
	}
	&__img-left {
		img {
			position: absolute;
			$topPosition: 30%;
			&:nth-child(4) {
				left: -30px;
				top: calc($topPosition + 100px);
			}
			&:nth-child(3) {
				left: -0px;
				top: calc($topPosition + 70px);
			}
			&:nth-child(2) {
				left: 30px;
				top: calc($topPosition + 40px);
			}
			&:nth-child(1) {
				left: 60px;
				top: calc($topPosition + 10px);
			}            
		}
	}
	&__img-right {
		
		img {
			position: absolute;
			right: 0;
			top: 0;
			&:nth-child(1) {
				z-index: -1;
				top: 50%;
				margin-right: -24px;
				transform: translate(0,-50%);
			}
			&:nth-child(2), &:nth-child(3) {
				z-index: -2;
				top: 7vh;
				right: 5vh;
			}
			&:nth-child(3) {
				top: 40vh;
			}
		}
	}
	&__corean-sign {
		z-index: 1;
		position: absolute;
		left: 2vh;
		top: 65vh;
		color: #fff;
		font-size: 37px;
		max-width: 148px;        
	}
	&__buttons {
		display: flex;
		gap: 80px;
		justify-content: center;
	}
}
</style>