var update = function() {
  alert("Click!");
}

var updateBttn = document.getElementById("updateBttn");

if( updateBttn.addEventListener ) {
  updateBttn.addEventListener( "click", update, false );
} else if( updateBttn.attachEvent ) {
  updateBttn.attachEvent( "onclick", update, false );
}
