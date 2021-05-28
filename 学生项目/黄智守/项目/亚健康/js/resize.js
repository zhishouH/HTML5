(function () {
	let calc = () => {
		// 获取文档的元素赋值给docElement保存
		const docElement = document.documentElement;
		// 如果页面的宽度大于750px 那么让它等于750px 否则返回页面的宽度 最后赋值保存到定义的clientWidthValue
		let clientWidthValue = docElement.clientWidth > 750 ? 750 : docElement.clientWidth;
		// 设置字体比例
		docElement.style.fontSize = 16 * (clientWidthValue / 375) + 'px';
	}
	// 调用函数
	calc();
	// 全局执行事件（自定义屏幕尺寸）
	window.addEventListener('resize', calc);
})()
