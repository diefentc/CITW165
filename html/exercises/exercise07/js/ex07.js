 /**********
Date: 03/01/2025
Author: Christopher Diefenthaler
Class: CITW 165
Exercise: Exercise #7
**********/ 
var noteName, textEntered, target;        // Declare variables

noteName = document.getElementById('noteName');     // Element that holds note

function writeLabel(e) {
    if (!e) {                                       // If event object is not present
        e = window.event;                           // Use IE5-8 fallback
    }
    target = event.target || event.srcElement;      // Get the target element
    textEntered = e.target.value;                   // Value of that element
    noteName.textContent = textEntered;             // Update note text
}


if (document.addEventListener) {                    // If event listener is supported
    document.addEventListener('click', function(e) {// for any click document
        console.log("triggered click")
        
        if (e.target.closest('nav')) {
            console.log("click in nav")
            return;
        }
        recorderControls(e);                        // Call recorderControls()
    }, false)                                       // Capture during bubble phase
    // If input event fires on username input call writeLabel()
    document.addEventListener('input', writeLabel, false);
} else {                                            // Otherwise
    document.attachEvent('onclick', function(e) {   // IE Fallback: any click
        recorderControls(e);                        // Calls recorderControls()
    });
    // If keyup event fires on username input call writeLabel()
    document.attachEvent('onkeyup', writeLabel, false);
}


function recorderControls(e) {                      // Declare recorderControls()
    if (!e) {                                       // If event object is not present
        e = window.event;                           // Use IE5-8 fallback
    }
    target = event.target || event.srcElement;      // Get the target element
    if (event.preventDefault) {                     // If preventDefault() is supported
        event.preventDefault();                     // Stop default action
    } else {                                        // Otherwise
        event.returnValue = false;                  // IE fallback: Stop default action
    }

    switch(target.getAttribute('data-state')) {     // Get the data-state attribute
        case 'record':                              // If its value is record
            record(target);                         // Call the record() function
            break;                                  // Exit function to where called
        case 'stop':                                // If is value is stop
            stop(target);                           // Call the stop() function
            break;                                  // Exit function to where called
            // more buttons could go here ...
    }
};


function record(target) {                           // Declare record()
    target.setAttribute('data-state', 'stop');      // Set dat-state attr to stop
    target.textContent = 'stop';                    // Set text to 'stop'
}


function stop(target) {
    target.setAttribute('data-state', 'record');    // Set data-state attr to record
    target.textContent = 'record';                  // Set text to 'record'
}
