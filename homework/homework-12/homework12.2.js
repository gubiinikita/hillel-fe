const buttons = document.getElementById('buttons');

buttons.addEventListener('click', function (event) {
  if (event.target.tagName === 'BUTTON') {
    const clickedItemText = event.target.textContent;
    alert('You clicked on: ' + clickedItemText);
  }
});