'use strict';


const phoneCount = document.querySelector('.form__phone-count'),
	wordCount = document.querySelector('.form__word-count'),
	replaceCount = document.querySelector('.form__replace-count'),
	btns = document.querySelectorAll('.form__btn'),
	wordInput = document.querySelector('.form__input-word'),
	textInput = document.querySelector('.form__input-text'),
	output = document.querySelector('.form__line-answer');

initCookies();
function initCookies() {
	wordCount.textContent = getCookie("word-count") === '' ? 0 : getCookie("word-count");
	phoneCount.textContent = getCookie("phone-count") === '' ? 0 : getCookie("phone-count");
	replaceCount.textContent = getCookie("replace-count") === '' ? 0 : getCookie("replace-count");

}

btns[0].addEventListener('click', (e) => {
	e.preventDefault();
	const value = wordInput.value.trim();
	if (isNum(value)) {
		output.textContent = value.substring(0, 3) + '-' + value.substring(3, 6) + '-' + value.slice(6);
	} else {
		output.textContent = "Invalid phone number!";
	}
	const count = +phoneCount.textContent + 1;
	setCookie("phone-count", count, 365);
	initCookies();
});


function isNum(val) {
	return isNaN(parseInt(val)) ? false : true && val.length === 10;
}

btns[1].addEventListener('click', (e) => {
	e.preventDefault();
	const countWords = countWord(wordInput.value.trim(), textInput.value);
	output.textContent = `Word count: ${countWords}`;
	const count = +wordCount.textContent + 1;
	setCookie("word-count", count, 365);
	initCookies();
});

btns[2].addEventListener('click', (e) => {
	e.preventDefault();
	changeWords(wordInput.value.trim(), textInput.value.trim());
	const count = +replaceCount.textContent + 1;
	setCookie("replace-count", count, 365);
	initCookies();
});

function changeWords(word, text) {
	const length = text.split(' ').filter(item => item !== '').length,
		arr = [];
	for (let i = 0; i < length; i++) {
		arr.push(word);
	}
	output.textContent = arr.join(' ');
}

function countWord(word, text) {
	return text.trim().split(' ').filter(item => item === word).length;
}


function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}