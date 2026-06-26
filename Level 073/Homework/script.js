const addBtn = document.querySelector("button");
const taskInput = document.getElementById("task");
const tasks = document.querySelector("ul")

addBtn.onclick = function () {

    let newTask = document.createElement("li");
    let completed = document.createElement("input");


    completed.type = "checkbox"
    newTask.textContent = taskInput.value;
    taskInput.value = '';

    newTask.appendChild(completed)

    newTask.onclick = function () {
        newTask.style.color = "green"
    }

    tasks.appendChild(newTask)
}
