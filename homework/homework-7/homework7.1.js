/** Написати функцію, яка приймає 1 параметр.
 *  Та скадае значення з тим, що передали перший раз і т. д. Все це із замиканнями, наприклад:
 */
function add() {
  let sum = 0;

  return function(num) {
    sum += num;
    return sum;
  };
}

const sum = add();

console.log(sum(4)); // 4
console.log(sum(6)); // 10
console.log(sum(10)); // 20
console.log(sum(7)); // 27