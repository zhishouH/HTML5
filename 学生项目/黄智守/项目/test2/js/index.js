// 背景音乐
const myAudio = document.querySelector('#myAudio')
const musicBtns = document.querySelectorAll('.music-btn')

let play = 1
for (let i = 0; i < musicBtns.length; i++) {
	musicBtns[i].addEventListener('click', () => {
		if (play === 0) {
			myAudio.play()
			for (let j = 0; j < musicBtns.length; j++) {
				musicBtns[j].src = `./img/bgm-on.png`
				musicBtns[j].style.animation = `music-rotate 2s linear infinite alternate`
			}
			play = 1
		} else {
			myAudio.pause()
			for (let k = 0; k < musicBtns.length; k++) {
				musicBtns[k].src = `./img/bgm-off.png`
					musicBtns[k].style.animation = 'none'
			}
			play = 0
		}
	})
}