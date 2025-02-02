/**********************************************************************
Date    : 2025-02-01
Author  : Christopher Diefenthaler
Class   : CITW 165
Exercise: Exercise 03
**********************************************************************/

// Create variables for the welcome message
var greetingMessage = 'Hello ';
var userName = 'John';
var welcomeMessage = ', please review your order details:';

// Concatenate the three variables above to create the welcome message
var fullWelcomeMessage = greetingMessage + userName + welcomeMessage;

// Create variables to hold details about the sign
var totalItems = 5;
var itemPrice = 3;
var totalCost = totalItems * itemPrice;
var deliveryCharge = 5;
var finalAmount = totalCost + deliveryCharge;

// Get the element that has an id of greeting
var greetingElement = document.getElementById('greeting');

// Replace the content of that element with the personalized welcome message
greetingElement.textContent = fullWelcomeMessage;

// Get the element that has an id of ppi then update its contents
var pricePerItemElement = document.getElementById('ppi');
pricePerItemElement.textContent = '$' + itemPrice;

// Get the element that has an id of items then update its contents
var itemsElement = document.getElementById('items');
itemsElement.textContent = totalItems;

// Get the element that has an id of subTotal then update its contents
var subTotalElement = document.getElementById('subTotal');
subTotalElement.textContent = '$' + totalCost;

// Get the element that has an id of shipping then update its contents
var shippingElement = document.getElementById('shipping');
shippingElement.textContent = '$' + deliveryCharge;

// Get the element that has an id of grandTotal then update its contents
var grandTotalElement = document.getElementById('grandTotal');
grandTotalElement.textContent = '$' + finalAmount;
