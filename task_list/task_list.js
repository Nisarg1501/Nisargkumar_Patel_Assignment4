"use strict";

$(document).ready(() => {
  const tasks = []; //Array to store tasks

  // Event listener for adding tasks
  $("#add_task").click(() => {
    const textbox = $("#task");
    const task = textbox.val();
    if (task === "") {
      alert("Please enter a task.");
      textbox.focus();
    } else {

      //Tasks entered with commas will be split into individual tasks
      const taskString = task.split(",");
      taskString.forEach((task) => {
        if (task !== "")
          // adding the task to an array
          tasks.push(task);
      });

      //Clear the task input field and update the display of tasks
      textbox.val("");
      $("#task_list").val(tasks.join("\n"));
      textbox.focus();
    }
  });
  // Event listener for clearing tasks
  $("#clear_tasks").click(() => {
    tasks.length = 0;
    $("#task_list").val("");
    $("#task").focus();
  });

  $("#task").focus();
});
