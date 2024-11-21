const taskInput = document.getElementById("task");
const priorityInput = document.getElementById("priority");
const deadlineInput = document.getElementById("deadline");
const addButton = document.getElementById("add");
const List = document.getElementById("list");
 
addButton.addEventListener("click", () => {
    const task = taskInput.value;
    const priority = priorityInput.value;
    const deadline = deadlineInput.value;
    if (task.trim() === "" || deadline === "") {
        alert("Please select an upcoming date for the deadline.")
        return; 
    }
 
    const selectedDate = new Date(deadline);
    const currentDate = new Date();
 
    if (selectedDate <= currentDate) {
        alert("Please select an upcoming date for the deadline.");
        return; 
    }
 
    const taskItem = document.createElement("div");
    taskItem.classList.add("task");
    taskItem.innerHTML = `
    <p>${task}</p>
    <p>Priority: ${priority}</p>
    <p>Deadline: ${deadline}</p>
    <button class="mark-done">Mark Done</button>
  `;
 
    List.appendChild(taskItem);
 
    taskInput.value = "";
    priorityInput.value = "top";
    deadlineInput.value = "";
});
 
List.addEventListener("click", (event) => {
    if (event.target.classList.contains("mark-done")) {
        const taskItem = event.target.parentElement;
        taskItem.style.backgroundColor = "#f2f2f2";
        event.target.disabled = true;
    }
});