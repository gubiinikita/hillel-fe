let link;
const addButton = document.getElementById('add');
const redirectButton = document.getElementById('redirect');

addButton.addEventListener('click', function() {
  link = prompt('Input link to redirect');
});

redirectButton.addEventListener('click', function () {
  window.open(link);
});

