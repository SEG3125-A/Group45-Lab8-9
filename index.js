document.getElementById("addTaskBtn").addEventListener("click", function(event) {

    // Get the value of the new task input
    var newTaskValue = document.getElementById("newTaskInput").value;

    // If the input is not empty, create a new task
    if (newTaskValue.trim() !== "") {
        var taskList = document.getElementById("taskList");

        // Create a new input element for the task
        var newTaskInput = document.createElement("input");
        newTaskInput.type = "checkbox";
        newTaskInput.id = "task" + (taskList.children.length + 1); // Generate unique ID
        newTaskInput.className = "task";

        // Create a new label element for the task
        var newTaskLabel = document.createElement("label");
        newTaskLabel.htmlFor = newTaskInput.id;
        newTaskLabel.textContent = " " + newTaskValue;

        // Add event listener to checkbox for strikethrough effect
        newTaskInput.addEventListener("change", function() {
            if (this.checked) {
                newTaskLabel.classList.add("checked");
            } else {
                newTaskLabel.classList.remove("checked");
            }
        });

        // Create a line break element
        var lineBreak = document.createElement("br");

        // Append the new elements to the taskList
        taskList.appendChild(newTaskInput);
        taskList.appendChild(newTaskLabel);
        taskList.appendChild(lineBreak);

        // Clear the input field
        document.getElementById("newTaskInput").value = "";
    }
});

// Show the new task input when the "New Task" button is clicked
document.getElementById("addTaskBtn").addEventListener("click", function() {
    document.getElementById("newTaskInput").style.display = "inline-block";
});

// Show the second study session when the "Start Session" button is clicked
document.getElementById("start-session").addEventListener("click", function() {
    var studyTimeInSeconds = parseInt(document.getElementById("study-time").value);
    var countdown = document.getElementById("countdown");

    var minutes, seconds;

    var timer = setInterval(function() {
        minutes = Math.floor(studyTimeInSeconds / 60);
        seconds = studyTimeInSeconds % 60;

        countdown.textContent = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;

        if (--studyTimeInSeconds < 0) {
            clearInterval(timer);
            countdown.textContent = "Time's up!";
        }
    }, 1000);

    document.getElementById("study-session-1").style.display = "none";
    document.getElementById("study-session-2").style.display = "block";
});

document.getElementById("end-session").addEventListener("click", function(){
    document.getElementById("study-session-1").style.display = "block";
    document.getElementById("study-session-2").style.display = "none";
})