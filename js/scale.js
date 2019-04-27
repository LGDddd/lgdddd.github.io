(function() {
	let header = document.getElementsByTagName('head')[0];
	let viewportConf = document.createElement('meta');
	viewportConf.name = 'viewport';
	if (/Android (\d+\.\d+)/.test(navigator.userAgent)) {
		let version = parseFloat(RegExp.$1);
		if (version > 2.3) {
			let phoneScale = parseInt(window.screen.width) / 320;
			if (/MZ-M571C/.test(navigator.userAgent)) {
				viewportConf.content = "width=320, minimum-scale = 1, maximum-scale= 1, user-scalable=no";
				header.appendChild(viewportConf);
			} else if (/M571C/.test(navigator.userAgent) && /LizhiFM/.test(navigator.userAgent)) {
				viewportConf.content = "width=320, minimum-scale = 1, maximum-scale= 1, user-scalable=no";
				header.appendChild(viewportConf);
			} else {
				viewportConf.content = "width=320, minimum-scale = " + phoneScale + ", maximum-scale = " + phoneScale +
					", target-densitydpi=device-dpi, user-scalable=no";
				header.appendChild(viewportConf);
			}
		} else {
			viewportConf.content = "width=320, target-densitydpi=device-dpi, user-scalable=no";
			header.appendChild(viewportConf);
		}
	} else {
		viewportConf.content = "width=320, target-densitydpi=device-dpi, user-scalable=no";
		header.appendChild(viewportConf);
	}
})();
