var curImg = document.getElementById("img");
var curInd = 0; 

var slideLeft = function() {
  // JavaScript's % operator returns a negative result if the left operand is negative
  // Adding 5, the base of the modulo operator, prevents the left oeprand from being negative
  curInd = ( curInd - 1 + 5 ) % 5;
  curImg.src = "./images/slide" + curInd + ".png";
}

var slideRight = function() {
  curInd = ( curInd + 1 ) % 5;
  curImg.src = "./images/slide" + curInd + ".png";
}

var main = function() {
  var prevBttn = document.getElementById("prev");
  var nextBttn = document.getElementById("next");

  if( prevBttn.addEventListener ) {
    prevBttn.addEventListener( "click", slideLeft, false );
    nextBttn.addEventListener( "click", slideRight, false );
  } else if( prevBttn.attachEvent ) {
    prevBttn.attachEvent( "click", slideLeft );
    nextBttn.attachEvent( "click", slideRight );
  }
}

main();
