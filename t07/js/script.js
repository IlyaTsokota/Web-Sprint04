'use strict';

async function getData() {
	let answer = await fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=ce57ea026e80054e57626828540a87f1",
		{
			"method": "GET"
		})
		.then(response => response.json()
		)
		.catch(err => {
			console.error(err);
		});
	return answer;
}

console.log(getData());
