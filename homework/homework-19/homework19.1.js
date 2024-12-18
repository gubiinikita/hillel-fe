let button = document.querySelector('.button');
let inputvalue = document.querySelector('.inputValue');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.desc');
let wind = document.querySelector('.wind');
let country = document.querySelector('.country');
let city = document.querySelector('.city');

button.addEventListener('click', function(){

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputvalue.value}&units=metric&appid=9640a10e77983ca9c2520c0c69c12192`)
    .then(response => response.json())
    .then(
      displayData)
    .catch(err => alert('Wrong city name'));
})

const displayData=(weather)=>{
  temp.innerText=`Temperature: ${weather.main.temp}°C`
  desc.innerText=`Description: ${weather.weather[0].main}`
  wind.innerText=`Wind: ${weather.wind.speed} m/s`
  country.innerText=`Country code: ${weather.sys.country}`
  city.innerText=`City: ${weather.name}`
}