/**********
Date        : 03/22/2025
Author      : Christopher Diefenthaler
Class       : CITW 165
Exercise    : Exercise # 8
Abstract    : This JavaScript file is used to create a to-do list application, which allows users to add tasks
            : to a list, mark them as complete, and sorts them by urgency. The application also includes a 
            : counter that displys the number of tasks in the list.
            : By adding a '!' at the end of a task, the task will be marked as urgent and be displayed in red.
**********/

$(function() {
    // SETUP
    var $taskList, $taskForm, $taskButton;
    var task = '';                                              // task is an empty string
    $taskList = $('#page ul');                                  // Cache the unordered list within #page
    $taskForm = $('#newItemForm');                              // Cache form to add new tasks
    $taskButton = $('#newItemButton');                          // Cache button to show form

    $taskList.children('li').hide().each(function(index) {      // Hide list items
        $(this).delay(450 * index).fadeIn(1600);                // Then fade them in
    });

    // TASK COUNTER
    function updateTaskCount() {                                // Declare function
        var tasks = $taskList.children('li[class!=complete]').length; // Number of tasks in list
        $('#counter').text(tasks);                              // Added into counter circle
    }
    updateTaskCount();                                          // Call the function

    // SETUP FORM FOR NEW TASKS
    $taskButton.show();                                         // Show the button
    $taskForm.hide();                                           // Hide the form
    $('#showForm').on('click', function() {                     // When new task clicked
        $taskButton.hide();                                     // Hide the button
        $taskForm.show();                                       // Show the form
    });

    // ADDING A NEW LIST TASK
    $taskForm.on('submit', function(e) {                        // When a new task is submitted
        e.preventDefault();                                     // Prevent form being submitted
        var text = $('input:text').val();                       // Get value of text input
        var className = text.endsWith('!') ? 'urgent' : '';     // Add 'urgent' class if task ends with '!'
        if (text.endsWith('!')) {
            text = text.slice(0, -1);                           // Remove the trailing '!' if it exists
        }
        $taskList.append('<li class="' + className + '">' + text + '</li>'); // Add task to end of the list
        $('input:text').val('');                                // Empty the text input
        updateTaskCount();                                      // update the count
        sortTasks();                                            // Sort tasks after adding a new one
    });

    // CLICK HANDLING - USES DELEGATION ON <ul> ELEMENT
    $taskList.on('click', 'li', function() {
        var $this = $(this);                                    // Cache the element in a jQuery object
        var complete = $this.hasClass('complete');              // Is task complete

        if (complete === true) {                                // Check if task is complete
            $this.animate({                                     // If so, animate opacity + padding
                opacity: 0.0,
                paddingLeft: '+=180'
            }, 500, 'swing', function() {                       // Use callback when animation completes
                $this.remove();                                 // Then completely remove this task
            });
        } else {                                                // Otherwise indicate it is complete
            task = $this.text();                                // Get the text from the list task
            $this.remove();                                     // Remove the list task
            $taskList                                           // Add back to end of list as complete
                .append('<li class=\"complete\">' + task + '</li>')
                .hide().fadeIn(300);                            // Hide it so it can be faded in
            updateTaskCount();                                  // Update the counter
        }                                                       // End of else option
    });                                                         // End of event handler

    // SORT TASKS FUNCTION
    function sortTasks() {
        var $tasks = $taskList.children('li').get();
        $tasks.sort(function(a, b) {
            var aUrgent = $(a).hasClass('urgent');
            var bUrgent = $(b).hasClass('urgent');
            return (aUrgent === bUrgent) ? 0 : aUrgent ? -1 : 1;
        });
        $.each($tasks, function(idx, itm) { $taskList.append(itm); });
    }
})
