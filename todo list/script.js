//get the elements by their class names
const taskInput = document.querySelector(".task-input");
const addTaskButton = document.querySelector(".add-btn");
const taskList = document.querySelector(".task-list");

function addTask() {
    const taskText = taskInput.value.trim(); // Get input text & remove extra spaces
    if (taskText === "") {  // Prevent empty tasks
        alert("Please enter a task.");
        return;
    }
    const li = document.createElement("li"); // Create a new list item
    li.textContent = taskText; // Set its text to the input value
    
    taskList.appendChild(li); // Add task to the list
    taskInput.value = ""; // Clear input after adding the task
    }