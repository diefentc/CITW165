/**********
Date: 04/12/2025
Author: Christopher Diefenthaler
Class: CITW 165
Exercise: Exercise # 10
**********/

// Wait for the DOM to be fully loaded
$(function () {
    // Initialize form validation for the email form
    $("#email_form").validate({
        // Define validation rules for form fields
        rules: {
            email: {
                required: true, // Email is required
                email: true // Must be a valid email format
            },
            email_confirm: {
                required: true, // Confirmation email is required
                email: true, // Must be a valid email format
                equalTo: "#email" // Must match the email field
            },
            zip: {
                required: true, // Zip code is required
                digits: true, // Must contain only digits
                minlength: 5, // Must be exactly 5 digits
                maxlength: 5 // Must be exactly 5 digits
            }
        },
        // Define custom error messages for validation rules
        messages: {
            email: {
                required: "Please enter your email address.", // Message if email is empty
                email: "Please enter a valid email address." // Message if email format is invalid
            },
            email_confirm: {
                required: "Please confirm your email address.", // Message if confirmation email is empty
                email: "Please enter a valid email address.", // Message if confirmation email format is invalid
                equalTo: "Email addresses must match." // Message if emails do not match
            },
            zip: {
                required: "Please enter your zip code.", // Message if zip code is empty
                digits: "Please enter only digits.", // Message if zip code contains non-digit characters
                minlength: "Zip code must be exactly 5 digits.", // Message if zip code is too short
                maxlength: "Zip code must be exactly 5 digits." // Message if zip code is too long
            }
        },
        // Define what happens when the form is valid
        submitHandler: function (form) {
            form.submit(); // Submit the form
        }
    });
});
