const event = new Date();

const options = {weekday:'long', day:'numeric', month:'long', year:'numeric'};

try {
    document.getElementById('lastUpdated').innerHTML = event.toLocaleDateString('en-GB', options);
}
catch (e) {
    alert ["Your browser does not support this funtion"]
}