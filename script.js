let min = 25;
let sec = 0;
let timerIsOn = false;
let timer;

const startBtn = document.getElementById('startBtn');
const displayTime = document.getElementById('time');

startBtn.addEventListener('click', (e) => {
	e.preventDefault();
	if (!timerIsOn) {
		timer = setInterval(() => {
			timerIsOn = true;
			startBtn.innerHTML = `Pause`
			if(sec == 0) {
				sec = 60;
				min--;
				sec--
				displayTime.innerHTML = `${convertNums(min)}:${convertNums(sec)}`
			} else {
				sec--
				displayTime.innerHTML = `${convertNums(min)}:${convertNums(sec)}`
			}
			if (min == 0 && sec == 0) {
				clearInterval(timer)
				displayTime.innerHTML = `Time to rest!`
				min = 20;
				sec = 0;
			}
		}, 1000);
	} else {
		timerIsOn = false;
		startBtn.innerHTML = `Start`
		clearInterval(timer)
	}

})

function convertNums(num) {
	if (num < 10) {
		return num = '0' + num;
	} else {
		return num;
	}
}
