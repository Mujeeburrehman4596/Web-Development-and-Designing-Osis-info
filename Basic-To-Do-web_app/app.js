// Select DOM elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const pendingTasksList = document.getElementById("pendingTasksList");
const completedTasksList = document.getElementById("completedTasksList");

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const taskItem = createTaskElement(taskText, false);
    pendingTasksList.appendChild(taskItem);
    taskInput.value = "";
}

// Function to create a task element
function createTaskElement(taskText, isCompleted) {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;

    const completeButton = document.createElement("button");
    completeButton.textContent = "Complete";
    completeButton.classList.add("complete-btn");
    completeButton.addEventListener("click", () => completeTask(taskItem));

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");
    deleteButton.addEventListener("click", () => deleteTask(taskItem, isCompleted));

    taskItem.appendChild(completeButton);
    taskItem.appendChild(deleteButton);

    return taskItem;
}

// Function to mark a task as completed
function completeTask(taskItem) {
    taskItem.classList.add("completed-task");
    completedTasksList.appendChild(taskItem);
    taskItem.querySelector(".complete-btn").remove();
}

// Function to delete a task
function deleteTask(taskItem, isCompleted) {
    if (isCompleted) {
        completedTasksList.removeChild(taskItem);
    } else {
        pendingTasksList.removeChild(taskItem);
    }
}

// Event listener for adding tasks
addTaskButton.addEventListener("click", addTask);

// Event listener for pressing Enter to add tasks
taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
