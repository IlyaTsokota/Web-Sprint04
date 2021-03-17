'use strict';


const next = document.querySelector('.slider__btn--next'),
	prev = document.querySelector('.slider__btn--prev');
let id = setInterval(nextSlide, 3000);

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
	showSlides(slideIndex += 1);
	refreshTimer();
}

function prevSlide() {
	showSlides(slideIndex -= 1);
	refreshTimer();
}

function refreshTimer() {
	clearInterval(id);
	id = setInterval(nextSlide, 3000);
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

function showSlides(n) {

	let slides = document.querySelectorAll(".slider__line-item");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}

