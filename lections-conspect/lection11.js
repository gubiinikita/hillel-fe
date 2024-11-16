/** Practice 1 */
// const list = document.querySelector('.list');
//
// const secondList = list.querySelectorAll('li')[1];
// secondList.innerHTML = 'New text';
//
// const divElement = document.querySelector('div');
// divElement.style.color = 'red';

/** Practice 2 */
// const button = document.getElementById('btn');
// const inputField = document.querySelector('input');
//
// button.addEventListener('click', () => {
//   const inputValue = inputField.value;
//
//   console.log(inputValue);
// });

/** Practice 3 */
const toggleButton = document.getElementById('toggle-btn');
const list = document.getElementById('list');
toggleButton.addEventListener('click', () => {
  list.classList.toggle('hidden');

  if (!list.classList.contains('hidden')) {
    const newLink = document.createElement('li');
    newLink.innerHTML = `<a href="#">New Link</a>`;
    list.appendChild(newLink);
  }
});