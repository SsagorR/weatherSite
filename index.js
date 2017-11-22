fetch('https://weather.com/weather/tenday/l/UPXX0017:1:UP')
.then(function (response) {
        return response.text();
    })
    .then(function (html) {
    	console.log(html);
    })
    .catch(console.error);

// function httpGet(theUrl) {
//     let xmlHttp = null;
 
//     xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false );
//     xmlHttp.send( null );
//     alert(xmlHttp.responseText);
// }

// httpGet('http://meteo.gov.ua/ua/33393');
