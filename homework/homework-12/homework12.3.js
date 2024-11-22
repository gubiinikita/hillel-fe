const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', function() {
  const taskText = taskInput.value.trim();

  if (taskText !== '') {
    const li = document.createElement('li');
    li.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;
    taskList.appendChild(li);
    taskInput.value = '';
  } else {
    alert('Please add task text');
  }
});

taskList.addEventListener('click', function(event) {
  if (event.target.classList.contains('delete-btn')) {
    const li = event.target.closest('li');
    li.remove();
  }
});