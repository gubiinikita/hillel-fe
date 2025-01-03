$(document).ready(function () {
  function saveTasksToLocalStorage() {
    const tasks = $("#taskList .list-group-item").map(function () {
      return $(this).text().replace('Delete', '').trim();
    }).get();
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  function loadTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(taskText => {
      const li = createTaskElement(taskText);
      $("#taskList").append(li);
    });
  }

  function createTaskElement(taskText) {
    return `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="task-text">${taskText}</span>
        <button class="btn btn-danger btn-sm delete-btn">Delete</button>
      </li>
    `;
  }

  $("#addTaskBtn").on("click", function () {
    const taskText = $("#taskInput").val().trim();
    if (taskText) {
      const li = createTaskElement(taskText);
      $("#taskList").append(li);
      $("#taskInput").val('');
      saveTasksToLocalStorage();
    } else {
      alert('Please add task text');
    }
  });

  $("#taskList").on("click", ".delete-btn", function () {
    $(this).closest("li").remove();
    saveTasksToLocalStorage();
  });

  loadTasksFromLocalStorage();
});
