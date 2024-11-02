/** Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2).
 * Функція повинна повертати результат (у середині функції не має бути консоль лога!)
 */
function multiplyCurry(a) {
  return (b) => {
    return a * b;
  }
}

let a = parseInt(prompt('Input first number for multiplication'));
let b = parseInt(prompt('Input second number for multiplication'));

console.log(`${a} * ${b} = ` + multiplyCurry(a)(b));
