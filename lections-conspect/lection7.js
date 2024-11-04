/** Написати функцію addToArray(array, number), яка додаватиме число в масив і повертатиме новий масив, де array –
 * вхідний масив, number – число яке потрібно додати. Якщо в масиві немає такого числа, то
 * додати в кінець, якщо є щось нічого не робити. */
// function addToArray(array, number) {
//   return array.includes(number) ? array : [...array, number];
// }
//
//
// const arr = [1, 2, 3];
// console.log(addToArray(arr, 8));

/** Написати функцію generateCode(n), яка повертатиме рядок із n випадкових значень чисел від 0 до 9, де n - число. */
// function generateCode(n) {
//   let num = '';
//
//   for (let i = 0; i < n; i++) {
//     let random = Math.floor(Math.random() * 10);
//     num += random;
//   }
//
//   return num;
//
// }
// console.log(generateCode(5));

/** Написати функцію sum(array), яка віддаватиме суму всіх чисел масиву. */
// const arr = [20, 40, 77, 53];
//
// function sum(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   return total;
// }
// console.log(sum(arr));

/** Написати функцію лічильник. Яка буде при кожному виклику збільшувати значення на одиницю */
// function createCounter() {
//   let count = 0; // Змінна в замиканні
//
//   return function() {
//     count++; // Збільшуємо значення на 1
//     return count; // Повертаємо поточне значення
//   };
// }
//
// const counter = createCounter();
//
// console.log(counter());
// console.log(counter());
// console.log(counter());

/** Карування */
function multiply(x) {
  return function(y) {
    return function(z) {
      return x * y * z;
    };
  };
}

console.log(multiply(2)(3)(4)); // 24

const multiplyByTwo = multiply(2);
const multiplyByThree = multiplyByTwo(3);

console.log(multiplyByThree(4)); // 24
console.log(multiply(2)(3)(4)); // 24

const multiplyByTwoAndThree = multiply(2)(3);

console.log(multiplyByTwoAndThree(5)); // 30
console.log(multiplyByTwoAndThree(10)); // 60