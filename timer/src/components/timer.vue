<template>
	<div class="StopWatch">
		<div class="StopWatch__main">
			{{ Timer.time }}
		</div>
		<div class="StopWatch__mseconds">
			<div class="StopWatch__ms">
				{{ Timer.msTime }} 
			</div>
			<div class="StopWatch__text-mc">ms</div>
		</div>
	</div>
</template>

<script>
import {ref} from 'vue';

export default {
	name: 'StopWatch',
	
	setup() {
		let Timer = ref({
			time: '00:00',
			msTime: '0000',
		});

		let TimerSaved = ref(null);
		let isRunning = false;
		
		let timeBegan = null;
		let stoppedDuration = 0; 
		let timeStopped = null;
		let started = null; 

		function startTimer() {
			isRunning = !isRunning;
			
			if(isRunning) {
				if(timeBegan === null) {
					timeBegan = new Date();
				}

				started = setInterval(clockRunning, 10);

			} else {
				timeStopped = new Date();
				clearInterval(started);
			}
			
		}

		function clockRunning() {
			let currentTime = new Date();
			let timeElapsed = new Date(currentTime - timeBegan - stoppedDuration);
			let min = timeElapsed.getUTCMinutes();
			let sec = timeElapsed.getUTCSeconds();
			let ms = timeElapsed.getUTCMilliseconds();

			Timer.value.time = zeroPrefix(min, 2) + ':' + zeroPrefix(sec, 2);
			Timer.value.msTime = zeroPrefix(ms, 4);
		}

		function stopTimer() {
			isRunning = false;
			timeStopped = new Date();
			clearInterval(started);
		}

		function resetTimer() {
			isRunning = false;
			clearInterval(started);
			stoppedDuration = 0;
			timeBegan = null;
			timeStopped = null;
			Timer.value.time = '00:00';
			Timer.value.msTime = '0000';
			//startTimer();
			return 0;
		}
		
		function zeroPrefix(num, digit) {
			let zero = '';
			for(var i = 0; i < digit; i++) {
				zero += '0';
			}
			return (zero + num).slice(-digit);
		}

		return {
			Timer,	
			startTimer,		
			stopTimer,
			resetTimer,
			TimerSaved,
			isRunning,
			started,
			timeStopped,
		}
	},
	
}
</script>

<style lang="scss">
	.StopWatch {
		color: #fff;
		text-align: center;
		margin: 0 0 33px 0;

		&__main {
			margin-bottom: 38px;
			font-size: 320px;
			line-height: calc(320 / 384 * 100%);
		}
		&__mseconds {
			font-family: Gogh;
			font-size: 44px;
			line-height: calc(44 / 61 * 100%);
			display: flex;
			//text-align: center;
			justify-content: center;
			gap: 8px;
			align-items: flex-end;
		}
		&__ms {
			flex: 0 123px
		}
		&__text-mc {
			font-family: Gogh;
			font-size: 27px;
		}
	}
</style>