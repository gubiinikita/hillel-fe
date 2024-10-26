/** Один долар коштує 26 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів */
let usd = 26;

/** while */
// let i = 10;
//
// while (i <= 100) {
//   let result = i * usd;
//   console.log(`${i} dollars are ${result} hryvnas`);
//   i += 10;
// }

/** do...while */
// let i = 10;
//
// do {
//   let result = i * usd;
//   console.log(`${i} dollars are ${result} hryvnas`);
//   i += 10;
// } while (i <= 100);

/** for */
for (let i = 10; i <= 100; i += 10) {
  let result = i * usd;
  console.log(`${i} dollars are ${result} hryvnas`);
}