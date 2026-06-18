/**********
Author      : Christopher Diefenthaler
Name        : calc_verify.js
Class       : CITW 165
Exercise    : Final Project
Abstract    : jQuery validation for the calculator
**********/

// Wait for the DOM to be fully loaded
$(function () {
    // Custom validation method to ensure a food is selected
    $.validator.addMethod("notDefault", function (value, element) {
        return value !== "0"; // Ensure the value is not the default "0"
    }, "Please select a valid option.");

    // Initialize form validation for the cat_math form
    $("#cat_math").validate({
        // Define validation rules for form fields
        rules: {
            petName: {
                required: true, // Name is required
            },
            curWeight: {
                required: true, // Current Weight is required
                digits: true, // Must contain only digits
                min: 1 // Must be greater than 0
            },
            desWeight: {
                required: true, // Goal Weight is required
                digits: true, // Must contain only digits
                min: 1 // Must be greater than 0
            },
            wetFood: {
                required: true, // Wet food is required
                notDefault: true // Ensure a valid wet food is selected
            },
            dryFood: {
                required: true, // Dry food is required
                notDefault: true // Ensure a valid dry food is selected
            },
            wetServings: {
                required: true, // Wet food servings are required
                digits: true, // Must contain only digits
                min: 1 // Must be greater than 0
            },
            dryServings: {
                required: true, // Dry food servings are required
                digits: true, // Must contain only digits
                min: 1 // Must be greater than 0
            }
        },
        // Define custom error messages for validation rules
        messages: {
            petName: {
                required: "Please enter your pet's name.", // Message if name is empty
            },
            curWeight: {
                required: "Please enter your pet's current weight.", // Message if current weight is empty
                digits: "Please enter a valid weight.", // Message if current weight format is invalid
                min: "Weight must be greater than 0." // Message if weight is less than 1
            },
            desWeight: {
                required: "Please enter your pet's goal weight.", // Message if goal weight is empty
                digits: "Please enter a valid weight.", // Message if goal weight format is invalid
                min: "Weight must be greater than 0." // Message if weight is less than 1
            },
            wetFood: {
                required: "Please select a wet food type.", // Message if wet food is not selected
                notDefault: "Please select a valid wet food type." // Message if default option is selected
            },
            dryFood: {
                required: "Please select a dry food type.", // Message if dry food is not selected
                notDefault: "Please select a valid dry food type." // Message if default option is selected
            },
            wetServings: {
                required: "Please enter the number of wet food servings.", // Message if wet servings are empty
                digits: "Please enter a valid number of servings.", // Message if wet servings format is invalid
                min: "Servings must be greater than 0." // Message if servings are less than 1
            },
            dryServings: {
                required: "Please enter the number of dry food servings.", // Message if dry servings are empty
                digits: "Please enter a valid number of servings.", // Message if dry servings format is invalid
                min: "Servings must be greater than 0." // Message if servings are less than 1
            }
        },
    });
});
