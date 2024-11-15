/**
 * Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву,
 * в якому лише парні числа з оригінального масиву.
 */

const numbers = [0, 4, 8, 15, 16, 23, 42];

/** map */
// let evens = numbers.map(num => num % 2 === 0 ? num : null).filter(Boolean);
//
// console.log(evens);
/** filter */
// let evens = numbers.filter((x) => {
//   return x % 2 === 0;
// })
//
// console.log(evens);
/** slice */
// let partial = numbers.slice(0, 7);
// let evens = partial.filter(num => num % 2 === 0);
//
// console.log(evens);
/** concat */
// let evens = [].concat(...numbers.filter(num => num % 2 === 0));
//
// console.log(evens);
/** spread-operator */
// let evens = [...numbers.filter(num => num % 2 === 0)];
//
// console.log(evens);
/** from */
// let evens = Array.from(numbers.filter(num => num % 2 === 0));
//
// console.log(evens);
/** reduce */
// let evens = arr => arr.reduce((a, v) => (v % 2 === 0 ? [...a, v] : a), []);
//
// console.log(evens(numbers));
/** Array.of */
let evenNumbers = Array.of(...numbers.filter(num => num % 2 === 0));

console.log(evenNumbers);