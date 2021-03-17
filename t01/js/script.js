'use strict';


const listItems = document.querySelectorAll('#characters > li');

const initBorder = () => {
	listItems.forEach(item => {
		if (checkClassName(item.className)) {
			item.classList.add('unknown');
		}
	});
};

function checkClassName(classEl) {
	return classEl === '' || (classEl !== 'evil' && classEl !== 'good' && classEl !== 'undefined');
}

const addElements = () => {
	listItems.forEach(item => {
		const data = item.getAttribute('data-element');
		createElements(data, item);
	});

};

function createElements(dataArr, parent) {
	const blockElements = document.createElement('line');
	blockElements.style.cssText = `
		display: flex;
		justify-content: center;
	`;
	if (dataArr === null) {
		const elem = document.createElement('div'),
			line = document.createElement('div');
		elem.classList.add("elem");
		elem.style.border = '2px solid #fff';
		line.classList.add('line');
		elem.append(line);
		blockElements.append(elem);
	} else {
		dataArr.split(' ').forEach(item => {
			const elem = document.createElement('div');
			elem.classList.add("elem", item);
			elem.style.border = '2px solid #fff';
			blockElements.append(elem);
		});
	}
	parent.append(blockElements);
}

initBorder();
addElements();