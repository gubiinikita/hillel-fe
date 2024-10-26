/** Дано ціле число N (ввести через prompt). Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N */
let N = prompt('Enter an integer');

/** while */
// let i = 1;
// while (i <= 100 && i * i <= N) {
//   console.log(`Integer number "${i}" which square lower than ${N}`);
//   i++;
// }

/** do...while */
let i = 1;
do {
  console.log(`Integer number "${i}" which square lower than ${N}`);
  i++;
} while (i <= 100 && i * i <= N);

/** for */
// for (let i = 1; i <= 100 && i * i <= N; i++) {
//   console.log(`Integer number "${i}" which square lower than ${N}`);
// }