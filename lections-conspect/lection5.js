/** While, do while, for*/

// let i = 1;
// while (i <= 9) {
//   console.log(i ** 2);
//   i++;
// }
//
// let y = 1;
// do {
//   console.log(y ** 2);
//   y++;
// } while (y <= 9);
//
// for (let x = 1; x <= 9; x++) {
//   console.log(x ** 2);
// }

/** Вивести числа в один рядок через кому від 10 до 20*/
// let result = "";
// for (let i = 10; i <= 20; i++) {
//   result += i + (i < 20 ? ", " : "");
// }
// console.log(result);

/** Вивести квадрати чисел від 10 до 20 */
// let i = 10;
// while (i <=20) {
//   console.log(i ** 2);
//   i++;
// }

/** Просумувати всі цілі числа від 1 до 15 */
// let sum = 0;
// let i = 1;
//
// while (i <= 15) {
//   sum += i;
//   i++;
// }
// console.log(sum);

/** Знайти добуток всіх чисел від 1 до 4 */
// let res = 1;
// let i = 1;
//
// while (i <= 4) {
//   res *= i;
//   i++;
// }
// console.log(res);

/** Знайти середнє арифметичне всіх цілих чисел від 1 до 500 (250.5) */
// let sum = 0;
// let count = 0;
// let i = 1;
//
// while (i <= 500) {
//   sum += i;
//   count++;
//   i++;
// }
//
// let average = sum / count;
// console.log(average);

/** Вивести суму лише парних чисел у диапазоні від 30 до 80 */
// let sum = 0;
// let i = 30;
//
// while (i <= 80) {
//   if (i % 2 === 0) {
//     sum += i;
//   }
//   i++;
// }
// console.log(sum);

/** Вивести на консоль усі числа в діапазоні від 100 до 200 кратні 3 */
// let i = 100;
//
// while (i <= 200) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
//   i++;
// }

/** Надрукувати повну таблицю множення від 2 до 10 */
for (let i = 2; i <= 10; i++) {
  console.log(`Таблиця множення для ${i}:`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
  console.log(''); // Пустий рядок для відступу між таблицями
}