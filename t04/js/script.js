'use strict';

const btns = document.querySelectorAll('.film__list-link'),
	items = document.querySelectorAll('.film__item');


function hideTabs() {
	btns.forEach(el => el.classList.remove('film__list-link--active'));
	items.forEach(el => el.style.display = 'none');
}

function showTab(i = 0) {
	hideTabs();
	btns[i].classList.add('film__list-link--active');
	items[i].style.display = '';
}

btns.forEach((item, i) => {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		showTab(i);
	});
});

showTab();