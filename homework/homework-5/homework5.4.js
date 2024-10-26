/** Дано ціле число (ввести через 'prompt'). З'ясувати, чи просто воно
 *  (простим називається число, більше 1, що не має інших дільників, крім 1 і себе). */
let N = prompt('Enter an integer');
let isSimple = N > 1;

/** while */
// let i = 2;
// while (i * i <= N && isSimple) {
//   if (N % i === 0) {
//     isSimple = false;
//   }
//   i++;
// }

/** do...while */
// let i = 2;
// do {
//   if (N % i === 0) {
//     isSimple = false;
//   }
//   i++;
// } while (i * i <= N && isSimple);

/** for */
for (let i = 2; i * i <= N && isSimple; i++) {
  if (N % i === 0) {
    isSimple = false;
  }
}

/** Output */
if (isSimple) {
  console.log(`${N} is a simple number.`);
} else {
  console.log(`${N} is not a simple number.`);
}