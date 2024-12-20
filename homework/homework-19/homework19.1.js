const button = document.querySelector('.button');
const refresh = document.querySelector('.refresh');
const inputValue = document.querySelector('.inputValue');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const wind = document.querySelector('.wind');
const country = document.querySelector('.country');
const city = document.querySelector('.city');

const apiKey = '9640a10e77983ca9c2520c0c69c12192';

const displayData = (weather) => {
  temp.innerText = `Temperature: ${weather.main.temp}°C`;
  desc.innerText = `Description: ${weather.weather[0].main}`;
  wind.innerText = `Wind: ${weather.wind.speed} m/s`;
  country.innerText = `Country code: ${weather.sys.country}`;
  city.innerText = `City: ${weather.name}`;
};

const fetchWeather = (query) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(displayData)
    .catch(() => alert('Failed to fetch weather data. Please check the city name or try again.'));
};

const fetchWeatherByLocation = (lat, lon) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(displayData)
    .catch(() => alert('Failed to fetch weather data. Please check your location or try again.'));
};

button.addEventListener('click', () => {
  const query = inputValue.value;
  if (query) {
    fetchWeather(query);
  } else {
    alert('Please enter a location.');
  }
});

refresh.addEventListener('click', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherByLocation(latitude, longitude);
      },
      () => alert('Failed to fetch location. Please enable location services.')
    );
  } else {
    alert('Geolocation is not supported by your browser.');
  }
});

window.addEventListener('load', () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetchWeatherByLocation(latitude, longitude);
      },
      () => alert('Failed to fetch location. Please enable location services.')
    );
  } else {
    alert('Geolocation is not supported by your browser.');
  }
});
