/** Дано масив з елементами різних типів.
 *  Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву. */
function avg(array) {
  let integerArray = array.filter(Number.isFinite);
  let sum = 0;
  for (let i = 0; i < integerArray.length; i++) {
    sum += integerArray[i];
  }
  return sum / integerArray.length;
}

let array = [0, 4, '2', 8, 15, 'abc', null, undefined, 16, 23, 42];

console.log('Avg: ' + avg(array));