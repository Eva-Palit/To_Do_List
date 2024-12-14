// Get elements from the DOM
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

// Add a new task
addTaskBtn.addEventListener("click", function() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Create new task element
    const li = document.createElement("li");
    
    // Add task text
    const text = document.createTextNode(taskText);
    li.appendChild(text);
    
    // Create "Complete" button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.addEventListener("click", function() {
      li.classList.toggle("completed");
    });
    
    // Create "Delete" button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
      taskList.removeChild(li);
    });

    // Append buttons to the task item
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);

    // Append the task to the list
    taskList.appendChild(li);
    
    // Clear input field
    taskInput.value = "";
  }
});
