/** Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу) .
 * Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше.
 * Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації,
 * то функція виводить в консоль останній введення користувача і завершує функцію.
 */
function promptForNumber() {
  let input;
  for (let i = 0; i < 10; i++) {
    input = prompt('Input number > 100: ');
    if (input > 100) {
      console.log('Input > 100: ' + input);
      return;
    }
    if (input === null) break;
  }
  console.log('Last input number: ' + input);
}
promptForNumber();