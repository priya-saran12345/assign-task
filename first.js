document.addEventListener("DOMContentLoaded", function () {
    const friendsList = document.getElementById("friends");
    const tasksList = document.getElementById("tasks");
    const assignTaskButton = document.getElementById("assign-task");

    assignTaskButton.addEventListener("click", function () {
        const taskTitle = prompt("Enter task title:");
        const taskDueDate = prompt("Enter task due date:");

        if (taskTitle && taskDueDate) {
            const taskText = `Task - ${taskTitle} by ${taskDueDate}`;
            const newTask = document.createElement("li");
            newTask.textContent = taskText;
            tasksList.appendChild(newTask);
        }
    });

    // You can add more functionality, like adding friends, posting updates, etc.
});
