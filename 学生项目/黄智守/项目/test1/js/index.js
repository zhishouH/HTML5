const myAudio = document.querySelector('#myAudio')
const musicBtn = document.querySelectorAll('.musicBtn')
console.log(musicBtn)
for (let i = 0; i < musicBtn.length; i++) {
	let play = 1
	musicBtn[i].addEventListener('click', () => {
		if (play === 0) {
			myAudio.play()
			for (let j = 0; j < musicBtn.length;j++) {
				musicBtn[j].src = './img/bgm-on.png'
				musicBtn[j].style.animation = 'musicRotate 1s linear infinite alternate'
			}
			
			play = 1
		} else {
			myAudio.pause()
			for (let k = 0; k < musicBtn.length; k++) {
					musicBtn[k].src = './img/bgm-off.png'
					musicBtn[k].style.animation = 'none'
			}
			play = 0
		}
	})
}