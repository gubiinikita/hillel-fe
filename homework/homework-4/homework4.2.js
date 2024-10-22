let number = prompt('Input any three-digit number');

let firstDigit = number.toString().slice(0, 1);
let secondDigit = number.toString().slice(1, 2);
let thirdDigit = number.toString().slice(2, 3);

if (Number(firstDigit) === Number(secondDigit) && Number(secondDigit) === Number(thirdDigit)) {
  alert('All digits are the same.');
} else if (Number(firstDigit) === Number(secondDigit) || Number(firstDigit) === Number(thirdDigit) || Number(secondDigit) === Number(thirdDigit)) {
  alert('Two digits are the same.');
} else {
  alert('No same digits.');
}