"use strict";

$(document).ready(function () {
  function saveTasksToLocalStorage() {
    var tasks = $("#taskList .list-group-item").map(function () {
      return $(this).text().replace('Delete', '').trim();
    }).get();
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  function loadTasksFromLocalStorage() {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(function (taskText) {
      var li = createTaskElement(taskText);
      $("#taskList").append(li);
    });
  }
  function createTaskElement(taskText) {
    return "\n      <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n        <span class=\"task-text\">".concat(taskText, "</span>\n        <button class=\"btn btn-danger btn-sm delete-btn\">Delete</button>\n      </li>\n    ");
  }
  $("#addTaskBtn").on("click", function () {
    var taskText = $("#taskInput").val().trim();
    if (taskText) {
      var li = createTaskElement(taskText);
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
