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



  var callbackFunction = function(data) {
  	for (let i = 0; i <= 4; i++) {
  		let dayInf = data.query.results.channel.item.forecast[i];
  		let temp = "від " + dayInf.low + " до " + dayInf.high;
  		let text = dayInf.text;
  		let tempIns = document.getElementById('temp' + i);
  		let textIns = document.getElementById('text' + i);
  		textIns.innerHTML = text;
  		tempIns.innerHTML = temp;
  	}

  };






// function httpGet(theUrl) {
//     let xmlHttp = null;
 
//     xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false );
//     xmlHttp.send( null );
//     alert(xmlHttp.responseText);
// }

// httpGet('http://meteo.gov.ua/ua/33393');
