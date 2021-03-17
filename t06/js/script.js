'use strict';

document.addEventListener("DOMContentLoaded", function () {
	const lazyImages = document.querySelectorAll('img'),
		info = document.querySelector('.info');

	let count = 1;
	const lazyLoad = function () {

		lazyImages.forEach(lazyImage => {
			window.addEventListener('scroll', onScrollLazy);
			window.addEventListener("resize", onScrollLazy);
			window.addEventListener("orientationchange", onScrollLazy);
			onScrollLazy();

			function onScrollLazy() {
				if (isElementInViewport(lazyImage)) {
					window.removeEventListener('scroll', onScrollLazy);
					window.removeEventListener("resize", onScrollLazy);
					window.removeEventListener("orientationchange", onScrollLazy);
					lazyImage.src = lazyImage.getAttribute('data-src');
					refreshCounter(info, count++);
				}
			}
		});
	};

	function refreshCounter(info, count) {
		info.textContent =
			`${count} images loaded from ${lazyImages.length}`;
		if (count == lazyImages.length) {
			info.classList.add('info--active');
		}
	}

	function isElementInViewport(el) {
		let top = el.offsetTop,
			left = el.offsetLeft,
			width = el.offsetWidth,
			height = el.offsetHeight;

		while (el.offsetParent) {
			el = el.offsetParent;
			top += el.offsetTop;
			left += el.offsetLeft;
		}

		return (
			top < (window.pageYOffset + window.innerHeight) &&
			left < (window.pageXOffset + window.innerWidth) &&
			(top + height) > window.pageYOffset &&
			(left + width) > window.pageXOffset
		);
	}
	lazyLoad();

});

