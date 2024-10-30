/** Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
 *  'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач. */
function cutLetters(text, lettersToCut) {
  let result = '';
  let i = 0;

  while (i < text.length) {
    if (!lettersToCut.includes(text[i])) {
      result += text[i];
    }
    i++;
  }

  return result;
}

let text = prompt('Insert text which you want to cut');
let lettersToCut = prompt(`Insert letters which you want to cut from text separated by commas: "${text}"`);
let array = lettersToCut.split(", ");

alert('Here is the result: ' + cutLetters(text, array));
