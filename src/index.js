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

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateElement.innerHTML = dateElement(currentDate);
