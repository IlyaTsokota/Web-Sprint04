'use strict';

const items = document.querySelectorAll('.item');

items.forEach(item => {
	item.addEventListener('click', () => {
		if (!item.classList.contains('item--disable')) {
			item.classList.add('item--disable');
		} else {
			item.classList.remove('item--disable');
		}
	});
	item.addEventListener('mousedown', (event) => {
		if (item.classList.contains('item--disable')) {
			return;
		}
		let shiftX = event.clientX - item.getBoundingClientRect().left + 6;
		let shiftY = event.clientY - item.getBoundingClientRect().top - 20;
		console.log(shiftX + '\n' + shiftY);

		item.style.position = 'absolute';
		item.style.zIndex = 1000;
		document.body.append(item);

		moveAt(event.pageX, event.pageY);

		function moveAt(pageX, pageY) {
			item.style.left = pageX - shiftX + 'px';
			item.style.top = pageY - shiftY + 'px';
		}

		function onMouseMove(event) {
			moveAt(event.pageX, event.pageY);
		}

		document.addEventListener('mousemove', onMouseMove);
		item.addEventListener('mouseup', () => {
			item.onmouseup = null;
			document.removeEventListener('mousemove', onMouseMove);
		});
	});
	item.addEventListener('dragstart', () => false);
});

