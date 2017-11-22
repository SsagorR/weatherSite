const cheerio = require('cheerio');
const fetch = require('node-fetch');

fetch('https://weather.com/weather/tenday/l/UPXX0017:1:UP')
    .then(function (response) {
        return response.text();
    })
    .then(async function (html) {
        const $ = cheerio.load(html);
        let td = $('td');
        for (let i=0; i < 1; i++) {
        	console.log(td[i]);
        }  
       
        })
    .catch(console.error);