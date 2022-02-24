//Current Date
let currentTime = document.querySelector("#current-time");

let now = new Date();
let minutes = ("0" + now.getMinutes()).slice(-2);
let hour = now.getHours();
let date = now.getDate();
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
let month = months[now.getMonth()];
currentTime.innerHTML = `${month} ${date} | ${hour}:${minutes}`;

let h2 = document.querySelector("#weekday");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
h2.innerHTML = `${day}`;

//

function showTemperature(response) {
  let temp = Math.round(response.data.main.temp);
  let temperature = document.querySelector("#number");
  temperature.innerHTML = `${temp}`;
  console.log(response);
}

function showCityElement(event) {
  event.preventDefault();
  let apiKey = "178729f582cff7adb3205d5bd4373ae0";
  let units = "metric";
  let city = document.querySelector("input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
  let name = document.querySelector("#name-city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${name.value}`;
}

let form = document.querySelector("form");
form.addEventListener("submit", showCityElement);

//Curent Location

function getTemperature(response) {
  console.log(response);
  let temperature = Math.round(response.data.main.temp);
  let tempElement = document.querySelector("#number");
  tempElement.innerHTML = `${temperature}`;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${response.data.name}`;
}

function getLocation(response) {
  let apiKey = "178729f582cff7adb3205d5bd4373ae0";
  let latitude = "43.5435228";
  let longitude = "16.4872602";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=${units}&appid=${apiKey}`;
  axios.get(apiUrl).then(getTemperature);

  console.log(response);
}
function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(getLocation);
}
let button = document.querySelector("#current-location");
button.addEventListener("click", getCurrentPosition);
