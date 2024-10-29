/** Вивести в консоль числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5 ....) */
let result = '';

/** while */
// let i = 20;
//
// while (i <= 30) {
//   result += i + (i < 20 ? ' ' : ' ');
//   i += 0.5
// }
// console.log('Numbers from 20 till 30 with 0.5 step: ', result);

/** do...while */
// let i = 20;
//
// do {
//   result += i + (i < 20 ? ' ' : ' ');
//   i += 0.5
// } while (i <= 30);
// console.log('Numbers from 20 till 30 with 0.5 step: ', result);

/** for */
for (let i = 20; i <= 30; i += 0.5) {
  result += i + (i < 20 ? ' ' : ' ');
}
console.log('Numbers from 20 till 30 with 0.5 step: ', result);

