/** Function which calculates birthday year */
// function calculateBirthYear() {
//   const currentYear = prompt("What is the current year?");
//   const age = prompt("What is your age?");
//   const confirmData = confirm(`You said that ${currentYear} is current year and your age is ${age}. Is it correct?`);
//   if (!confirmData) {
//     alert("Please, try again.");
//     return;
//   }
//   const birthYear = currentYear - age;
//
//   alert(`Your birth year is probably: ${birthYear}`);
// }
// calculateBirthYear();


/** if else */
// //task 1
// let number = prompt('Input any number');
//
// if(number > 0) {
//   console.log(1)
// } else if(number < 0) {
//   console.log(-1)
// } else {
//   console.log(0)
// }
//
// //task 2
// let a = 2;
// let b = 2;
//
// let result = (a + b < 4) ? 'down' : 'up';
//
// console.log(result);

/** switch case */
//task 1
let input = prompt("Input a number: ");

switch (Number(input)) {
  case 1:
    console.log("A");
    break;
  case 2:
    console.log("B");
    break;
  case 3:
    console.log("C");
    break;
  default:
    console.log("UA");
}

//task 2
