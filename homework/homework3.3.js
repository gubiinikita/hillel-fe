const number = 10369;

/** First Solution: Slice */
let firstSign = number.toString().slice(0, 1);
let secondSign = number.toString().slice(1, 2);
let thirdSign = number.toString().slice(2, 3);
let fourthSign = number.toString().slice(3, 4);
let fifthSign = number.toString().slice(4, 5);

console.log(`Slice ` + `${firstSign} `+ `${secondSign} ` + `${thirdSign} ` + `${fourthSign} ` + `${fifthSign} `);

/** Second Solution: Substring */
console.log(`Substring: ` + `${String(number).substring(0, 1)} `+
  `${String(number).substring(1, 2)} ` +
  `${String(number).substring(2, 3)} ` +
  `${String(number).substring(3, 4)} ` +
  `${String(number).substring(4, 5)} `);

/** Third Solution: Split */
let signs = number.toString().split('');

console.log(`Split: ` + `${signs[0]} ` + `${signs[1]} ` + `${signs[2]} ` + `${signs[3]} ` + `${signs[4]} `);