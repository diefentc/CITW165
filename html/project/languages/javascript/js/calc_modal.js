/**********
Author      : Christopher Diefenthaler
Name        : calculator.js
Class       : CITW 165
Exercise    : Final Project
Abstract    : jQuery modal display for calculator results
**********/

$(document).ready(function () {
    // Get the modal
    var modal = $("#results-modal");

    // Get the close button
    var closeBtn = $(".close-btn");

    // Show the modal when the form is submitted and passes validation
    $("#cat_math").on("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Perform validation (if needed)
        if ($("#cat_math").valid()) {
            // Show the modal
            modal.show();
        }
    });

    // Close the modal when the close button is clicked
    closeBtn.on("click", function () {
        modal.hide();
    });

    // Close the modal when clicking outside the modal content
    $(window).on("click", function (event) {
        if ($(event.target).is(modal)) {
            modal.hide();
        }
    });
});
