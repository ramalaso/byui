const requestURL = 'https://ramalaso.github.io/ramalaso/employees.json';

fetch(requestURL)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject); 

  jsObject.Employees.forEach(employee => {

    console.log(employee);
          
            let article = document.createElement('article');
            article.classList.add('card');
            let img = document.createElement('img');
            img.src = employee.photo;
            article.appendChild(img);
            let h1 = document.createElement('h1');
            h1.textContent = employee.firstName + " " + employee.lastName;
            article.appendChild(h1);
            let p = document.createElement('p');
            p.innerHTML = `<b>Phone: </b> ${employee.phoneNumber}`;
            article.appendChild(p);
            p = document.createElement('p');
            p.innerHTML = `<b>Level: </b> ${employee.level}`;
            article.appendChild(p);
            p = document.createElement('p');
            p.innerHTML = `<b>Email: </b> ${employee.emailAddress}`;
            article.appendChild(p);
               
            document.querySelector('div.personal-container').appendChild(article); 
  });
});

let activity = document.getElementById('activity');
let tripSelected = document.getElementById('tripSelected');
let priceTripSelected = document.getElementById('priceTripSelected');
let taxes = document.getElementById('taxes');
let total = document.getElementById('total');
/* <p id="tripSelected">Trip Selected: </p> 
                <p id="priceTripSelected">Price Trip Selected: </p> 
                <p id="taxes">Taxes: </p>
                <p id="total">Total payment: </p> */

activity.addEventListener('change', handleChange);

function handleChange() {
    priceTripSelected.innerText = `Price Trip Selected: ${activity.value}`;
    taxes.innerText = `Taxes(12%): ${Math.floor(activity.value*0.12)}`;
    total.innerText = `Total payment: ${Math.floor(activity.value*1.12)}`;
}


// Menu
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }