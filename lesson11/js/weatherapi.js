const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=e803642aa3ddd99e1ae274b7d8a17444';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('currently').textContent = Math.round(jsObject.main.temp) + " ºF";
    document.getElementById('high').textContent = Math.round(jsObject.main.temp_max)+ " ºF";
    document.getElementById('low').textContent = Math.round(jsObject.main.temp_min)+ " ºF";
    document.getElementById('windspeed').textContent = Math.round(jsObject.wind.speed)+ " mph";
    document.getElementById('humidity').textContent = Math.round(jsObject.main.humidity)+ "%";

    const temperature = parseFloat(Math.round(jsObject.main.temp));
    const windspeed = parseFloat(Math.round(jsObject.wind.speed));
    let windchill;
    if (temperature <= 50 && windspeed >= 3) {
        windchill = Math.round((35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windspeed, 0.16)) + (0.4275 * temperature * Math.pow(windspeed, 0.16))).toFixed(2));
        document.getElementById('windchill').textContent = windchill;
  
      } else {
        windchill = ('N/A');
        document.getElementById('windchill').textContent = windchill;
      }
});

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const currentTemp = document.querySelector('#current-temp');

    currentTemp.textContent = jsObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('apiicon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('apiicon').setAttribute('alt', desc);
    
  });

  