'use strict';
const container = document.getElementById('lab'),
	text = document.getElementById('hero');

function transformation() {
	const name = text.classList.contains('hero--active') ? 'Bruce Banner'
		: 'Hulk';
	text.textContent = name;
	text.classList.toggle('hero--active');
	container.classList.toggle('lab--active');
}