'use strict';

const cardsParent = document.querySelector('.weather__cards'),
	cityName = document.querySelector('.weather__city');
let lat = 0,
	lon = 0;

document.addEventListener('load', () => {
	navigator.geolocation.getCurrentPosition(function (position) {
		let lat = position.coords.latitude,
			lon = position.coords.longitude;
		console.log(lat);
		console.log(lon);
	});
});


getWeatherData();


async function getWeatherData() {
	await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=49.993500&lon=36.230385&dt=1616036341&appid=ce57ea026e80054e57626828540a87f1`)
		.then(data => data.json())
		.then(data => {
			cityName.textContent = 'Kharkiv';
			const arrWeathers = data.daily;
			arrWeathers.forEach(item => {
				const time = unixTimestampToFormatedDate(item.dt),
					img = item.weather[0].icon,
					temperature = Math.floor(item.temp.day - 273);
				addWeatherCard(cardsParent, time.formatedDate, img, temperature);
			});
		});
}


function addWeatherCard(parent, time, img, temperature) {
	const card = `
		<div class="weather__card">
			<p class="weather__date">${time}</p>
			<div class="weather__img">
				<img src="https://openweathermap.org/img/wn/${img}@2x.png">
			</div>
			<p class="weather__temperature">
				${temperature}
			</p>
		</div>
	`;
	parent.insertAdjacentHTML('beforeend', card);
}

const addZero = (val) => val <= 9 ? `0${val}` : val;

function unixTimestampToFormatedDate(timestamp) {
	const milliseconds = timestamp * 1000,
		date = new Date(milliseconds);
	return {
		formatedDate: `${addZero(date.getDate())}.${addZero(date.getMonth())}`,
		date
	};
}
