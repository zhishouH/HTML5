// 获取page1-page6页节点
const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2')
const page3 = document.querySelector('.page3')
const page4 = document.querySelector('.page4')
const page5 = document.querySelector('.page5')
const page6 = document.querySelector('.page6')

// page1加载页进度条数据
// 获取进度条数据节点
const progessNum = document.querySelector('.progress-num')
// 声明数值变量
let num = 0
// 声明计时器
let progress = setInterval(() => {
	if (num >= 100) {
		// 当num等于100时不再执行
		clearInterval(progress)
		// 一秒后隐藏page1页，跳转到page2页
		setTimeout(() => {	
			page1.style.display='none'
		},1000)
	} else {
		num++
		progessNum.innerHTML = `${num * 1} %`
	}
},50)

// 背景音乐控制
const audio = document.querySelector('#audio')
const audioSwitch = document.querySelector('#audioSwitch')
let play = 0
audioSwitch.addEventListener('click', () => {
	if (play == 0) {
		audio.play()
		play = 1
	} else {
		audio.pause()
		play = 0
	}
})
// page2页面点击关于亚健康跳转到page3页面
// 获取按钮
const aboutHealthBtn = document.querySelector('#aoubtHealthBtn')
aboutHealthBtn.addEventListener('click', () => {
	page2.style.display = 'none'
	page3.style.display = 'block'
})

// page3页点击返回按钮返回page2页,点击测试按钮跳转到page4页
const p3ReturnBtn = document.querySelector('#p3ReturnBtn')
const testHealthBtn = document.querySelector('#testHealthBtn')
p3ReturnBtn.addEventListener('click', () => {
	page2.style.display = 'block'
})
testHealthBtn.addEventListener('click',() => {
	page3.style.display = 'none'
	page4.style.display = 'block'
})

// page4页点击返回按钮返回page3页,点击提交测试跳转到page5页
const p4RetuenBtn = document.querySelector('#p4ReturnBtn')
const submitTestBtn = document.querySelector('#submitTestBtn')
p4RetuenBtn.addEventListener('click', () => {
	page3.style.display = 'block'
})
submitTestBtn.addEventListener('click', () => {
	page4.style.display = 'none'
	page5.style.display = 'block'
})

// page4页选择症状改变样式
const choose = document.querySelector('.choose')
const btns = choose.querySelectorAll('button')
// 星星图片
const start = document.querySelector('.start')
for (let i = 0; i < btns.length; i++) {
		let cho = 0
		const btnspan = btns[i].querySelector('span')
		const symptom = document.querySelector('.symptom')
		const symptomChild = document.createElement('div')
		// 分数
		const scoreNum = document.querySelector('.score-num')
		btns[i].addEventListener('click', () => {
			if (cho === 0) {
				btns[i].style.backgroundImage = 'url(./img/p4-选中圆角矩形.png)'
				btns[i].style.color = 'red'
				btnspan.style.color = 'red'
				symptomChild.innerHTML = btns[i].value
				symptom.appendChild(symptomChild)
				cho = 1
			} else {
				btns[i].style.backgroundImage = 'url(./img/p4-圆角矩形.png)'
				btns[i].style.color = '#fff'
				btnspan.style.color = '#2b7a50'
				symptom.removeChild(symptomChild)
				cho = 0
			}
			const num = symptom.querySelectorAll('div').length
				if (num % 2 === 0) {
					scoreNum.innerHTML = `${num * 0.5}.0`
				} else {
					scoreNum.innerHTML = `${num * 0.5}`
				}
			setTimeout(()=>{
				const startNum = scoreNum.innerHTML 
				startImg(startNum)
			},3000)
			
	})
}
// page5页点击返回按钮返回page4页,点击了解更多跳转到page6页
const p5ReturnBtn = document.querySelector('#p5ReturnBtn')
const learnMoreBtn = document.querySelector('#learnMoreBtn')
p5ReturnBtn.addEventListener('click', () => {
	page4.style.display = 'block'
})
learnMoreBtn.addEventListener('click', () => {
	page5.style.display = 'none'
	page6.style.display = 'block'
})


// page6页返回按钮返回page5页，点击首页跳转到首页
const p6returnBtn = document.querySelector('#p6ReturnBtn')
const homeBtn = document.querySelector('#homeBtn')
p6returnBtn.addEventListener('click', () => {
	page5.style.display = 'block'
})
homeBtn.addEventListener('click', () => {
	page6.style.display = 'none'
	page2.style.display = 'block'
})
function startImg(n) {
	switch (n * 10) {
		case 5:	 
			start.innerHTML = "<img src='./img/p5-半星.png' /><img src='./img/p5-无星.png' /><img src='./img/p5-无星.png' /><img src='./img/p5-无星.png' /><img src='./img/p5-无星.png' />"
			break;
		case 10: 
			start.innerHTML = "<img src='./img/p5-全星.png' /><img src='./img/p5-无星.png' /><img src='./img/p5-无星.png' /><img src='./img/p5-无星.png' /><img src='./img/p5-无星.png' />"
			break;
		case 15:
			start.innerHTML = "<img src='./img/p5-全星.png' /><img src='./img/p5-半星.png' /><img src='./img/p5-无星.png' /><img src='./img/p5-无星.png' /><img src='./img/p5-无星.png' />"
			break;
		case 20:
			start.innerHTML = "<img src='./img/p5-全星.png' /><img src='./img/p5-全星.png' /><img src='./img/p5-无星.png' /><img src='./img/p5-无星.png' /><img src='./img/p5-无星.png' />"
			break;
		case 25:
			start.innerHTML = "<img src='./img/p5-全星.png' /><img src='./img/p5-全星.png' /><img src='./img/p5-半星.png' /><img src='./img/p5-无星.png' /><img src='./img/p5-无星.png' />"
			break;
		case 30:
			start.innerHTML = "<img src='./img/p5-全星.png' /><img src='./img/p5-全星.png' /><img src='./img/p5-全星.png' /><img src='./img/p5-无星.png' /><img src='./img/p5-无星.png' />"
			break;
		case 35:
			start.innerHTML = "<img src='./img/p5-全星.png' /><img src='./img/p5-全星.png' /><img src='./img/p5-全星.png' /><img src='./img/p5-半星.png' /><img src='./img/p5-无星.png' />"
			break;
		case 40:
			start.innerHTML = "<img src='./img/p5-全星.png' /><img src='./img/p5-全星.png' /><img src='./img/p5-全星.png' /><img src='./img/p5-全星.png' /><img src='./img/p5-无星.png' />"
			break;
		case 45:
			start.innerHTML = "<img src='./img/p5-全星.png' /><img src='./img/p5-全星.png' /><img src='./img/p5-全星.png' /><img src='./img/p5-全星.png' /><img src='./img/p5-半星.png' />"
			break;
		case 50:
			start.innerHTML = "<img src='./img/p5-全星.png' /><img src='./img/p5-全星.png' /><img src='./img/p5-全星.png' /><img src='./img/p5-全星.png' /><img src='./img/p5-全星.png' />"
			break;
		default: 					
			start.innerHTML = "<img src='./img/p5-无星.png' /><img src='./img/p5-无星.png' /><img src='./img/p5-无星.png' /><img src='./img/p5-无星.png' /><img src='./img/p5-无星.png' />"
			break;
	}
}