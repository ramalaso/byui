const apiForecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=e803642aa3ddd99e1ae274b7d8a17444';
fetch(apiForecastURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject); 

    let i = 1;
    let myDate;
    let day;

    jsObject.list.forEach(element => {
            if (element.dt_txt.includes("18:00:00")) {
                myDate = new Date(element.dt_txt.substr(0,10));
                day = myDate.toDateString().substr(0,3);
                document.getElementById('day' + i).textContent = day;
                var imagesrc = 'https://openweathermap.org/img/w/' + element.weather[0].icon + '.png';
                var desc = element.weather[0].description;
                document.getElementById('weather' + i).setAttribute('src', imagesrc);
                document.getElementById('weather' + i).setAttribute('alt', desc);
                document.getElementById('temp' + i).textContent = Math.round(element.main.temp) + " ºF"; 
                i=i+1;
            }  
    });
});



