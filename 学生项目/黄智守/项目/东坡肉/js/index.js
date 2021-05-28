const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2')
const page3 = document.querySelector('.page3')
const page4 = document.querySelector('.page4')

// 加载页进度
// 获取p1-text2节点
const p1tText2 = document.querySelector('.p1-text2')
let num = 0
let timer1 = setInterval(() => {
	if (num >= 100) {
		clearInterval(timer1)
		setTimeout(() => {
			page1.style.display = 'none'
			page2.style.display = 'block'
		},1500)
	} else {
		num++
		p1tText2.innerHTML = `${num * 1}%`
	}
},30)

// 背景音乐
const music = document.querySelector('.music')
const MusicBtn = document.querySelectorAll('.music-btn')
let play = 0
for (let i = 0; i < MusicBtn.length; i++) {
	MusicBtn[i].addEventListener('click', () => {
	if (play === 0) {
		music.play()
		MusicBtn[i].classList.add('rotate')
		MusicBtn[i].classList.remove('stop-rotate')
		play = 1
	}
	else {
		music.pause()
		MusicBtn[i].classList.add('stop-rotate')
		MusicBtn[i].classList.remove('rotate')
		play = 0
	}
})
}


// page3页tab选项卡
const p3Tab = document.querySelector('.p3-tab')
const tabs = p3Tab.querySelectorAll('div')
const textPic = document.querySelector('#textPic')
for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener('click', () => {
		textPic.src = `./img/p3-${i + 1}-text.png`
		page3.style.backgroundImage = `url(./img/p3-${i + 1}-bj.png)`
		for (let j = 0; j < tabs.length; j++) {
			tabs[j].style.boxShadow = 'none'
		}
		tabs[i].style.boxShadow = '0 0 1px 1px #c6d291'
	})
}