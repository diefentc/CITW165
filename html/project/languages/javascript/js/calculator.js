/**********
Author      : Christopher Diefenthaler
Name        : calculator.js
Class       : CITW 165
Exercise    : Final Project
Abstract    : Performs the calculations necessary for cat math
**********/
// global variables
var RER = 0 // resting energy requirement
var MER = 0 // maintenance energy requirement

var calPerCan = 0 // calories per can of wet food
var canSize = 0 // in ounces
var calPerOz = 0 // calPerCan / canSize
var ozPerDay = 0 // MER / calPerOz

var gramsPerCup = 0 // grams of dry food per cup
var calPerCup = 0 // calories per cup of dry food
var calPerGram = 0 // calPerCup / gramsPerCup
var gramsPerDay = 0 // MER / calPerGram
var dryCal = 0 // calories from dry food

var dryServings = 0 // number of dry food servings per day
var wetServings = 0 // number of wet food servings per day

var numMeals = 0 // dryServings + wetServings
var ozPerServe = 0 // ozTotal / numMeals
var grPerServe = 0 // grTotal / numMeals
var calPerServe = 0 // calTotal / numMeals
var wetCal = 0 // calories from wet food

var curWeight = 0 // current weight of the pet
var idealWeight = 0 // ideal weight of the pet

var petName = "" // name of the pet
var weightMode = "" // weight loss, weight gain, maintain

// mocked out dictionary for dry food values
var dryFoodTypes = {
    "0" : {
        "wtOneCup": 0,
        "kcalCup": 0
    },
    "Purina": {
        "wtOneCup": 108,
        "kcalCup": 400
    },
    "Science Hills": {
        "wtOneCup": 95,
        "kcalCup": 288
    }
}

// mocked out dictionary for wet food values
var wetFoodTypes = {
    "0" : {
        "canSize": 0,
        "calCan": 0
    },
    "Friskies": {
        "canSize": 5.5,
        "calCan": 180
    },
    "Science Hills": {
        "canSize": 5.5,
        "calCan": 174
    }
}


// functions
function getRER() {
    // calculate the RER based on the weight in field #curWeight
    let wtKg = curWeight / 2.2;

    RER = 70 * (wtKg ** 0.75);
}


function getMER() {
    // calculations for the MER based on the current and ideal weight
    let M = 0.9;

    // if the current weight is greater than the ideal weight, M = 0.8; denotes a weight loss diet
    if (curWeight > idealWeight) {
        M = 0.75;
    }
    MER = RER * M;
}


function calcWetServe() {
    // calculations for the wet food servings
    // ozPerDay = MER / calPerOz
    calPerOz = calPerCan / canSize;
    ozPerDay = MER / calPerOz;
    ozPerServe = ozPerDay / numMeals;

    if (isNaN(ozPerServe)) {
        ozPerServe = 0;
    }
    
    wetCal = (ozPerServe * calPerOz) * wetServings;
    
    if (isNaN(wetCal)) {
        wetCal = 0;
    }
}


function calcDryServe() {
    // calculations for the dry food servings
    // gramsPerDay = MER / calPerGram
    calPerGram = calPerCup / gramsPerCup;
    gramsPerDay = MER / calPerGram;
    grPerServe = gramsPerDay / numMeals;

    if (isNaN(grPerServe)) {
        grPerServe = 0;
    }
    
    dryCal = grPerServe * calPerGram * dryServings;
    
    if (isNaN(dryCal)) {
        dryCal = 0;
    }
}


function getValues() {
    // get the values from the form fields and store them in variables
    let wetFood = wetFoodTypes[$("#wetFood").val()];
    let dryFood = dryFoodTypes[$("#dryFood").val()];

    petName = $("#petName").val();
    curWeight = parseInt($("#curWeight").val());
    idealWeight = parseInt($("#desWeight").val());

    calPerCup = dryFood["kcalCup"];
    gramsPerCup = dryFood["wtOneCup"];

    calPerCan = wetFood["calCan"];
    canSize = wetFood["canSize"];

    dryServings = parseInt($("#dryServings").val());
    
    if (isNaN(dryServings)) {
        dryServings = 0;
    }

    wetServings = parseInt($("#wetServings").val());

    if (isNaN(wetServings)) {
        wetServings = 0;
    }

    numMeals = dryServings + wetServings;
}

function assemble_message() {
    /* 
    Oscar should be recieving {numMeals} per day with {dryServings} consisting of {gramsPerServe} grams each serving\n
    as well as {wetServings} consisting of {ozPerServe} ounces each serving.\n
    This will result in {dryCal + wetCal} calories per day, and should assist in their goal of {weightMode}
    */
    let msg = "";
    
    msg = petName + " should be receiving " + numMeals + " meals per day<br><br>"

    if (dryServings > 0) {
        msg = msg + dryServings + " meals of dry food, each weighing " + Math.round(grPerServe) + " grams.<br>"
    }

    if (wetServings > 0) {
        msg = msg + wetServings + " meals of wet food, each weiging " + Math.round(ozPerServe) + " ounces.<br>";    
    }

    
    msg = msg + "This will result in " + Math.round((dryCal + wetCal)) + " calories per day, and should assist in their goal of " + weightMode + ".\n";

    $("#msg").html(msg);
}

// missing weights
// wet food and no wet servings
// wet servings and no wet food
// dry food and no dry servings
// dry servings and no dry food
// no food selected
// no servings selected
function value_checks() {
    // check curWeight and idealWeight for NaN
    if (isNaN(curWeight) || isNaN(idealWeight)) {
        alert("Please enter valid weights")
        return false;
    }

    // if neither wet food or dry food is selected, alert the user
    if ($("#wetFood").val() == "0" && $("#dryFood").val() == "0") {
        alert("Please select either wet food or dry food, or both.");
        return false;
    }

    // make sure that if wet food is selected, a number of servings is entered
    if ($("#wetFood").val() !== "0" && wetServings == 0) {
        alert("Please enter a valid number of servings for wet food.");
        return false;
    }

    // make sure that if wet servings are selected, a wet food is entered
    if (wetServings > 0 && $("#wetFood").val() == "0") {
        alert("Please select a wet food.");
        return false;
    }

    // make sure that if dry food is selected, a number of servings is entered
    if ($("#wetFood").val() !== "0" && wetServings == 0) {
        alert("Please enter a valid number of servings for wet food.");
        return false;
    }

    // make sure that if dry servings are selected, a dry food is entered
    if (dryServings > 0 && $("#dryFood").val() == "0") {
        alert("Please select a dry food.");
        return false;
    }
    
}

function main() {
    // main function that calls all the other functions to perform the calculations
    // get the values from the form fields and store them in variables
    getValues();
    let check = value_checks();

    if (check === false) {
        return false;
    }

    // check for any required values that are missing
    // check curWeight and idealWeight for NaN

    if (curWeight < idealWeight) {
        weightMode = "weight gain";
    } else if (curWeight > idealWeight) {
        weightMode = "weight loss";
    } else {
        weightMode = "weight maintainence";
    }

    getRER();
    getMER();
    calcDryServe();
    calcWetServe();
    assemble_message();

    // populate the modal with the results
    $("#MER").text(Math.round(MER) + " calories");
    $("#dryCalPerDay").text(Math.round(dryCal) + " calories");
    $("#wetCalPerDay").text(Math.round(wetCal) + " calories");
    $("#grPerServe").text(Math.round(grPerServe) + " grams");
    $("#ozPerServe").text(Math.round(ozPerServe) + " ounces");

    $("#results").css("display", "block");
    
    return false;
}

function validateAndSubmit(event) {
    // Trigger jQuery validation
    if ($("#cat_math").valid()) {
        // If the form is valid, call the main function
        return main(event);
    } else {
        // If the form is invalid, prevent submission
        return false;
    }
}

/* force a refresh of the page */
function refresh() {
    location.reload();
}