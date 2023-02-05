let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask(task) {
  if (!task) {
    alert("Ingrese un producto!");
    return;
  }
  let newTask = {
    id: tasks.length,
    description: task
  };
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
    document.getElementById("task-input").value = "";
}

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

function displayTasks() {
  let taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach(task => {
    let listItem = document.createElement("li");
    listItem.innerHTML = task.description;

    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "X";
    deleteButton.onclick = function() {
      deleteTask(task.id);
    };

    listItem.appendChild(deleteButton);
    taskList.appendChild(listItem);
  });
}