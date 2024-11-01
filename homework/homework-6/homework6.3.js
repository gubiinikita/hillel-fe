/** Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
 Наприклад:
 const array = [1, 3, 4, 6, 2, 5, 7];
 removeElement(array,4);
 console.log(array); // Результат: [1, 3, 6, 2, 5, 7] */

let arr = [5, 'bis', 72, 'cat', 5];
let item = 5;

/** For one element */
function removeElement(arr, item) {
  let index = arr.indexOf(item);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

console.log(`Removed "${item}" element from array [${arr}]: ` + removeElement(arr, item));

/** For all elements */
function removeElements(arr, item) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === item) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

console.log(`Removed all "${item}" elements from array [${arr}]: ` + removeElements(arr, item));