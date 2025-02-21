
/*
Name: letter_grade.js
Author: Christopher Diefenthaler
Date: 2025-02-20
Abstract: This script will take a numeric score and return the letter grade

        A = 90-100
        B = 80-89
        C = 68-79
        D = 60-67
        F = < 60

The user will enter a numeric score in the text box and click the button to receive a popup that displays the letter grade
# ===========================
Number grade = <score>
Letter grade = <letterGrade>
# ===========================
*/

function displayAlert(score, letterGrade) {
        /*
        Displays the alert box with the letter grade
        Parameters: score - the numeric score entered by the user
                    letterGrade - the letter grade calculated by the calc() function
        Returns: none
        */

        alert("Number grade = " + score + "\n" + "Letter grade = " + letterGrade + "\n");
}


function calc(){
        /*
        This function will take the numeric score entered by the user and pass the score and the letter to the displayAlert() function
        */
        // get the value of the text box and convert it to an integer
        var entry = parseInt(document.getElementById("score").value);
        // var letterGrade; // This variable holds the letter grade, but it is unnecessary because of the logic gates

        // the return statements within each if block will exit the function when a condition is met
        // this prevents the need for an else if statement
        // the alert box in a separate function prevents the need for a variable to hold the letter grade
        
        // check if the entry is a valid number
        if (isNaN(entry) || entry < 0 || entry > 100) {
                // either the entry is not a number or outside the range of acceptable values
                alert("Please enter a valid number (0-100)");
                return;
        }

        // the entry must be a valid number between 0 and 100
        // is the entry below 60?
        if (entry < 60) {
                displayAlert(entry, "F");
                return;
        }

        // is the entry between 60 and 67?
        if (entry < 68) {
                displayAlert(entry, "D");
                return;
        }

        // is the entry between 68 and 79?
        if (entry < 80) {
                displayAlert(entry, "C");
                return;
        }

        // is the entry between 80 and 89?
        if (entry < 90) {
                displayAlert(entry, "B");
                return;
        }
        
        // the entry must be a valid number beween 90 and 100
        displayAlert(entry, "A");
} //don't remove this line