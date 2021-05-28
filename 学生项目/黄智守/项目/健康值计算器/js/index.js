const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2')
const page3 = document.querySelector('.page3')
const page4 = document.querySelector('.page4')
const page5 = document.querySelector('.page5')


// 加载页百分数
const p2Text = document.querySelector('.p1-text2')
let p2Num = 0
let timer1 = setInterval( () => {
	if (p2Num >= 100) {
		clearInterval(timer1)
		setTimeout( () => {
			page1.style.display = 'none'
			page2.style.display = 'block'
		}, 1000)
	} else {
		p2Num++
		p2Text.innerHTML = `${p2Num * 1}%`
	}
}, 30)

// 背景音乐
const audio = document.querySelector('.audio')
const audioBtn = document.querySelectorAll('.audioBtn')
for (let i = 0; i < audioBtn.length; i++) {
	let play = 0	
	audioBtn[i].addEventListener('click', () => {
		if (play === 0) {
			if (i < audioBtn.length - 1) {
				audio.play()
				audioBtn[i].style.animation = 'bj-rotate 1s linear  infinite alternate'
				audioBtn[i].src = `img/bgm-on.png`
				audioBtn[i + 1].style.animation = 'bj-rotate 1s linear  infinite alternate'
				audioBtn[i + 1].src = `img/bgm-on.png`
				play = 1
			} else {
				audio.play()
				audioBtn[i].style.animation = 'bj-rotate 1s linear  infinite alternate'
				audioBtn[i].src = `img/bgm-on.png`
				audioBtn[i - 1].style.animation = 'bj-rotate 1s linear  infinite alternate'
				audioBtn[i - 1].src = `img/bgm-on.png`
				play = 1
			}
				
		} else {
			if (i < audioBtn.length - 1) {
				audio.pause()
				audioBtn[i].style.animation = 'none'
				audioBtn[i].src = `img/bgm-off.png`
				audioBtn[i + 1].style.animation = 'none'
				audioBtn[i + 1].src = `img/bgm-off.png`
				play = 0
			} else {
				audio.pause()
				audioBtn[i].style.animation = 'none'
				audioBtn[i].src = `img/bgm-off.png`
				audioBtn[i - 1].style.animation = 'none'
				audioBtn[i - 1].src = `img/bgm-off.png`
				play = 0
			}
			
		}
	})
}

const subBtn = document.querySelector('#subBtn')
subBtn.addEventListener('click', () => {
	const inpName = document.querySelector('#inpName')
	const inpNameValue = inpName.value
	const selJob = document.querySelector('#selJob')
	const selval = selJob.value
	page5.innerHTML = `${inpNameValue}--${selval}--你已经很棒了！`
	page4.style.display = 'none'
	page5.style.display = 'block'
})

