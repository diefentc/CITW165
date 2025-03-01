 /**********
Date    : 02/28/2025
Author  : Christopher Diefenthaler
Class   : CITW 165
Exercise: Exercise #6
**********/
// ADDING ITEMS TO START AND END OF LIST
var groceries = document.getElementById("grocery-list");     // Get the <ul> element

// ADD NEW ITEM TO END OF LIST
var newItemLast = document.createElement("li");         // Create element
var newTextLast = document.createTextNode("milk");      // Create text node

newItemLast.appendChild(newTextLast);                   // Add text node to element
groceries.appendChild(newItemLast);                          // Add element to end of list

// ADD NEW ITEM START OF LIST
var newItemFirst = document.createElement("li");        // Create element
var newTextFirst = document.createTextNode("spinach");     // Create text node

newItemFirst.appendChild(newTextFirst);                 // Add text node to element
groceries.insertBefore(newItemFirst, groceries.firstChild);       // Add element to start of list
