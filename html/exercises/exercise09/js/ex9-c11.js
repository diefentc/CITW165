/**********
Author      : Christopher Diefenthaler
Class       : CITW 165
Exercise    : Exercise # 9 - Modal / Photo Viewer
Abstract    : 
**********/
// Modal Window Script
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var openModalButton = document.getElementById("openModal");

openModalButton.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Photo Viewer Script
function changeImage(src) {
  document.getElementById("mainImage").src = src;
}

// Add event listeners for thumbnails
document.getElementById("thumb1").onclick = function() {
  changeImage('./img/nala_500x375.jpg');
}
document.getElementById("thumb2").onclick = function() {
  changeImage('./img/oscar_500x375.jpg');
}
document.getElementById("thumb3").onclick = function() {
  changeImage('./img/rory_500x375.jpg');
}
