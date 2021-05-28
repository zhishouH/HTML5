const pages = document.querySelectorAll('.page')
let startY = 0
let endY = 0
let dis = 0
let index = 1

document.addEventListener('touchstart', (e) => {
	startY = e.targetTouches[0].pageY
})
document.addEventListener('touchmove', (e) => {
	endY = e.targetTouches[0].pageY
	dis = endY - startY
})
document.addEventListener('touchend', (e) => {
	if (Math.abs(dis) > 50) {
		if (dis < 0) {
			pageTop(index)
			clear()
		} else {
			pageDown(index)
			clear()
		}
	}
})

function pageTop(n) {
	if (n < pages.length - 1) {
		pages[n].classList.add('in-top')
		pages[n].classList.remove('out-top','in-down','out-down')
		pages[n + 1].classList.add('out-top')
		pages[n + 1].classList.remove('in-top','in-down','out-down')
		pages[n + 1].style.display = 'block'
		n++
		index++
	}
}

function pageDown(n) {
	if (n > 1) {
		pages[n].classList.add('in-down')
		pages[n].classList.remove('in-top','out-top','out-down')
		pages[n - 1].classList.add('out-down')
		pages[n - 1].classList.remove('in-top','out-top','in-down')
		n--
		index--
	}
}

function clear () {
	startY = 0
	endY = 0
	dis = 0
}