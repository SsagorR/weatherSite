// fetch('https://weather.com/weather/tenday/l/UPXX0017:1:UP')
// .then(function (response) {
//         return response.text();
//     })
//     .then(function (html) {
//     	var siteCode = document.createElement('html');
//     	siteCode.innerHTML = html;
//     	console.log(siteCode.getElementsByTagName('tr'));
//     })
//     .catch(console.error);

    
// 	'https://weather-ydn-yql.media.yahoo.com/forecastrss?w=924943&u=c'

let a = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(924943)%20and%20u=%27c%27&format=json` 
fetch(a).then(res=>res.json()).then(function(data) {
  	for (let i = 0; i <= 4; i++) {
  		let dayInf = data.query.results.channel.item.forecast[i];
  		let temp = "від " + dayInf.low + " до " + dayInf.high;
  		let text = dayInf.text;
  		let date = dayInf.date;
  		let tempIns = document.getElementById('temp' + i);
  		let textIns = document.getElementById('text' + i);
  		let dateIns = document.getElementById('date' + i);

  		textIns.innerHTML = text;
  		tempIns.innerHTML = temp;
  		dateIns.innerHTML = date;
  	}

  });

  // var callbackFunction = 






// function httpGet(theUrl) {
//     let xmlHttp = null;
 
//     xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false );
//     xmlHttp.send( null );
//     alert(xmlHttp.responseText);
// }

// httpGet('http://meteo.gov.ua/ua/33393');
