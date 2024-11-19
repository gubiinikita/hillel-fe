/**
 * Є блок із текстом на сторінці та кнопка. При натисканні на кнопку текст змінює колір.
 * При повторному натисканні – повертається попередній колір
 */
const button = document.getElementById('btn');
const text = document.getElementById('txt');

let isBlack = true;

button.addEventListener('click', () => {
  if (isBlack) {
    text.style.color = 'green';
  } else {
    text.style.color = 'black';
  }
  isBlack = !isBlack;
});