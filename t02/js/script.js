'use strict';

const arrObj = [{
	name: "Black Panther",
	strength: 66,
	age: 53
},
{
	name: "Captain America",
	strength: 79,
	age: 137
}, {
	name: "Captain Marvel",
	strength: 97,
	age: 26
},
{
	name: "Hulk",
	strength: 80,
	age: 49
}, {
	name: "Iron Man",
	strength: 88,
	age: 48
}, {
	name: "Spider-Man",
	strength: 78,
	age: 16
}, {
	name: "Thanos",
	strength: 99,
	age: 1000
}, {
	name: "Thor",
	strength: 95,
	age: 1000
}, {
	name: "Young-Rogg",
	strength: 73,
	age: 52
}];


const sortByElement = document.querySelector('.header__sort-by'),
	orderByElement = document.querySelector('.header__sort-order'),
	body = document.querySelector('.body'),
	table = document.createElement('table');



function initTable() {
	table.classList.add('table');
	body.append(table);
}

function createTableHead(table) {
	const thead = document.createElement('thead'),
		tr = document.createElement('tr');
	thead.classList.add('table__head');
	createTHeadCol(tr, "Name", sortByClick);
	createTHeadCol(tr, "Strength", sortByClick);
	createTHeadCol(tr, "Age", sortByClick);
	thead.append(tr);
	table.append(thead);
}

function createTHeadCol(tr, text, callback) {
	const th = document.createElement('th');
	th.classList.add('table__head-col');
	th.textContent = text;
	th.addEventListener("click", () => callback(text));
	tr.append(th);
}

function sortByClick(sortBy) {
	let orderBy = '';
	if (orderByElement.classList.contains('ask')) {
		orderBy = 1;
		orderByElement.classList.remove('ask');
	} else {
		orderBy = 2;
		orderByElement.classList.add('ask');
	}
	console.log(orderBy);


	sortByElement.textContent = sortBy;
	orderByElement.textContent = orderBy === 1 ? "ASK" : "DESK";
	sortDataInColl(arrObj, sortBy.toLowerCase(), orderBy);
}

function createTableBody(table) {
	const tbody = document.createElement('tbody');
	for (let i = 0; i < arrObj.length; i++) {
		const tr = document.createElement('tr');
		for (let j = 0; j < 3; j++) {
			const td = document.createElement('td');
			td.classList.add('table__body-col', `table__body-col--${j}`);
			tr.append(td);
		}
		tbody.append(tr);
	}
	table.append(tbody);
}


initTable();
createTableHead(table);
createTableBody(table);

function sortDataInColl(arr, sortBy = "name", orderBy = 1) {
	const firstCollumn = table.querySelectorAll('.table__body-col--0'),
		secondCollumn = table.querySelectorAll('.table__body-col--1'),
		thirdCollumn = table.querySelectorAll('.table__body-col--2');

	sort(arr, sortBy.toLowerCase(), orderBy);
	for (let i = 0; i < firstCollumn.length; i++) {
		firstCollumn[i].textContent = arr[i].name;
		secondCollumn[i].textContent = arr[i].strength;
		thirdCollumn[i].textContent = arr[i].age;
	}

}

function byField(field) {
	return (a, b) => a[field] > b[field] ? 1 : -1;
}

function byFieldDesc(field) {
	return (a, b) => a[field] > b[field] ? -1 : 1;
}

function sort(arr, sortBy, orderBy) {
	console.log(orderBy);

	if (orderBy == 1) {
		console.log('bb');

		arr.sort(byField(sortBy));
	} else {
		console.log('aa');

		arr.sort(byFieldDesc(sortBy));
	}
}

sortDataInColl(arrObj);