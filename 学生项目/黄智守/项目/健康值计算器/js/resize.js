(function(){
	let calc = function () {
		const docElement = document.documentElement
		let clientWidthValue = docElement.clientWidth > 750 ? 750 : docElement.clientWidth
		docElement.style.fontSize = 16 * (clientWidthValue / 375) + 'px'
	}
	calc()
	window.addEventListener('resize', calc)
})()