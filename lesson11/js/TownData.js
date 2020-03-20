var townsInMyWeb = ['Preston', 'Fish Haven', 'Soda Springs'];
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    for (let i = 0; i < towns.length; i++ ) {
        if (townsInMyWeb.includes(towns[i].name)) {
            let card = document.createElement('section');

            let h2 = document.createElement('h2');
            h2.textContent = towns[i].name;
            card.appendChild(h2);

            let h4 = document.createElement('h4');
            h4.textContent = towns[i].motto;
            card.appendChild(h4);

            let h5 = document.createElement('h5');
            h5.textContent = 'Year Founded: ' + towns[i].yearFounded;
            card.appendChild(h5);

            h5 = document.createElement('h5');
            h5.textContent = 'Population: ' + towns[i].currentPopulation;
            card.appendChild(h5);

            h5 = document.createElement('h5');
            h5.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            card.appendChild(h5);
      
            let image = document.createElement('img');
            image.setAttribute('src', 'images/'+ towns[i].photo);
            card.appendChild(image);
            document.querySelector('div.cards').appendChild(card);   
        }
            
      }
});

  

  