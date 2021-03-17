'use strict';

const btnAdd = document.querySelector('.form__btn-add'),
	btnClear = document.querySelector('.form__btn-clear'),
	input = document.querySelector('.form__input'),
	historyContainer = document.querySelector('.form__line-history');
console.log(localStorage.getItem('history'));

let arrHistory = localStorage.getItem('history') === null ? [] : JSON.parse(localStorage.getItem('history'));

function zeroAdd(num) {
	if (num < 9) {
		return "0" + num;
	}
	return num;
}


const getFormattedDate = date => {
	return `${zeroAdd(date.getDate())}.${zeroAdd(date.getMonth() + 1)
		}.${date.getFullYear().toString().slice(2)}, ${zeroAdd(date.getHours())}:${zeroAdd(date.getMinutes())}:${zeroAdd(date.getSeconds())} `;
};

btnAdd.addEventListener('click', (e) => {
	e.preventDefault();
	const value = input.value.trim();
	if (value.length > 0) {
		arrHistory.push(`-->${value} [${getFormattedDate(new Date())}]`);
		localStorage.setItem('history', JSON.stringify(arrHistory));
		input.value = '';
		updateHistory();
	}
});

btnClear.addEventListener('click', (e) => {
	e.preventDefault();
	localStorage.removeItem('history');
	input.value = '';
	clearHistoryElements();
});


function clearHistoryElements() {
	const items = document.querySelectorAll('.form__history-item');
	items.forEach(item => item.remove());
}

function updateHistory() {
	clearHistoryElements();
	for (let i = arrHistory.length - 1; i >= 0; i--) {
		const elem = document.createElement('div');
		elem.classList.add('form__history-item');
		elem.textContent = arrHistory[i];
		historyContainer.append(elem);
	}
}

updateHistory();