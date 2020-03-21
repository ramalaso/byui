const country = document.getElementsByClassName("countryName")[0].innerText;
console.log(country);
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject); 

  jsObject.towns.forEach(town => {
          if (town.name.includes(country)) {
            let card = document.createElement('section');

            let h1 = document.createElement('h1');
            h1.textContent = "Upcoming events in " + country;
            card.appendChild(h1);

            town.events.forEach(event => {
                let h3 = document.createElement('h3');
                h3.textContent = event;
                card.appendChild(h3);
            });
               
            document.querySelector('div.events').appendChild(card); 
          }  
  });
});