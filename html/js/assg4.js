/* The script is placed inside an immediately invoked function expression
   which helps protect the scope of variables */

(function() {

  // PART ONE: CREATE HOTEL OBJECT AND WRITE OUT THE OFFER DETAILS

  // Create a hotel object using object literal syntax
  var book = {
    name: 'Biographies',
    bookRate: 29.99, // Amount in dollars
    discount: 20,  // Percentage discount
    offerPrice: function() {
      var offerRate = this.bookRate * ((100 - this.discount) / 100);
      return offerRate.toFixed(2);
    }
  }

  // Write out the hotel name, standard rate, and the special rate
  var bookName, bookRate, specialRate;                    // Declare variables

  bookName = document.getElementById('bookName');        // Get elements
  bookRate = document.getElementById('bookRate');
  specialRate = document.getElementById('specialRate');

  bookName.textContent = book.name;                      // Write book name
  bookRate.textContent =  '$' + book.bookRate.toFixed(2); // Write book rate
  specialRate.textContent = '$' + book.offerPrice();      // Write offer price


// PART TWO: CALCULATE AND WRITE OUT THE EXPIRY DETAILS FOR THE OFFER
var expiryMsg; // Message displayed to users
var today;     // Today's date
var elEnds;    // The element that shows the message about the offer ending

function offerExpires(today) {
  // Declare variables within the function for local scope
  var weekFromToday, day, date, month, year, dayNames, monthNames;

  // Add 7 days time (added in milliseconds)
  weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);

  // Create arrays to hold the names of days / months
  dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // Collect the parts of the date to show on the page
  day = dayNames[weekFromToday.getDay()];
  date = weekFromToday.getDate();
  month = monthNames[weekFromToday.getMonth()];
  year = weekFromToday.getFullYear();

  // Create the message
  expiryMsg = 'Offer expires next ';
  expiryMsg += day + ' <br />(' + date + ' ' + month + ' ' + year + ')';
  return expiryMsg;
}

today = new Date();                             // Put today's date in variable
elEnds = document.getElementById('offerEnds');  // Get the offerEnds element
elEnds.innerHTML = offerExpires(today);         // Add the expiry message

// Finish the immediately invoked function expression
}());