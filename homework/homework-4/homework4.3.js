let birthYear = prompt('What year were you born?');
if (birthYear === null) {
  alert("We are very sorry that you did not enter the year of your birth.");
}

let city = prompt('What city do you live in?');
if (city === null) {
  alert("We are very sorry that you did not enter your city.");
}

let sport = prompt('What is your favorite sport?');
if (sport === null) {
  alert("We are very sorry that you did not enter your favorite sport.");
}

let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;

/** Main task */
if (city === 'Kyiv' || city === 'Київ' || city === 'Washington' || city === 'London') {
  alert(`Your age is: ${age}. You're living in ${city}, the capital of some beautiful and world-famous country!`);
} else {
  alert(`Your age is: ${age}. You're living in cozy ${city}!`);
}

/** Subtask 1 */
if (sport === 'Football' || sport === 'football') {
  alert(`${sport} is very cool! Do you want to be like Messi?`);
} else if (sport === 'Basketball' || sport === 'basketball') {
  alert(`${sport} sounds nice! Do you want to be like Lebron James?`);
} else if (sport === 'Tennis' || sport === 'tennis') {
  alert(`Wow, ${sport.toLowerCase()} is amazing! Do you want to be like Serena Williams?`);
} else {
  alert(`Your favorite sport is ${sport.toLowerCase()}.`);
}