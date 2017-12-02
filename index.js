window.onload = loadSite('lviv');

function loadSite(city) {
let a = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22` + city + `%22)%20and%20u%3D%22c%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
fetch(a).then(res=>res.json()).then(function(data) {
	console.log(data);
  	for (let i = 0; i <= 4; i++) {
  		let dayInf = data.query.results.channel.item.forecast[i];
  		let loc = data.query.results.channel.location.city;
  		let temp = "від " + dayInf.low + " до " + dayInf.high;
  		let text = dayInf.text;
  		let date = dayInf.date;
  		let day = dayInf.day;
  		let tempIns = document.getElementById('temp' + i);
  		let textIns = document.getElementById('text' + i);
  		let dateIns = document.getElementById('date' + i);
  		let dayIns = document.getElementById('day' + i);  
  		let locIns = document.getElementById('weather-in-city');		

  		textIns.innerHTML = text;
  		tempIns.innerHTML = temp;
  		dateIns.innerHTML = date;
  		dayIns.innerHTML = day;
  		locIns.innerHTML = loc;
  	}

  	let text = data.query.results.channel.item.forecast[0].text;

  	if (text.includes('Cloudy')) {
  		document.body.style.backgroundImage = 'url(img/cloudy.jpg)';
  	} else if (text.includes('Rain')) {
  		document.body.style.backgroundImage = 'url(img/raining.jpg)';
  	} else if (text.includes('Sun')) {
  		document.body.style.backgroundImage = 'url(img/sunny.jpg)';
  	} else if (text.includes('Snow')) {
  		document.body.style.backgroundImage = 'url(img/snowy.jpg)';
  	}

  });
}
