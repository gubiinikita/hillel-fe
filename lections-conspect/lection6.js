/** task 1 */
function min(a, b) {
  return a < b ? a : b;
}

console.log(min(222, 223));

/** task 2 */
/** Потрібно написати функцію pow(x,n),
 * яка повертає x до ступеня n. Інакше кажучи, множить x на себе n разів і повертає результат. */

function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}
console.log(pow(2, 8));