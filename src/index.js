function displayTemp(response) {
    let temperatureElement = document.querySelector("#current-temp-value");
    let cityElement = document.querySelector("#current-city");
    let currentTemperature = Math.round(response.data.temperature.current);
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = currentTemperature;
  }
  
  function search(event) {
    event.preventDefault();
    let searchInputElement = document.querySelector("#search-input");
    let city = searchInputElement.value;
    let apiKey = "8c48ta45fbf8of4c9026e9ea057383be";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(displayTemp);
  }

function dateElement(date) {
    let minute = date.getMinutes();
    let hour = date.getHours();
    let day = date.getDay();

    if (minute < 10) {
        minute = `0${minute}`;
    }

    if (hour < 10)
    hour = `0${hour}`

    let days = [
        "Sunday",
        "Monday", 
        "Tuesday", 
        "Wednesday", 
        "Thursday", 
        "Friday", 
        "Saturday"
    ];

    let formattedDay = days[day];
    return `${formattedDay} ${hour}:${minute}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateElement.innerHTML = dateElement(currentDate);
