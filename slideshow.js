var curImg = document.getElementById("img");
var curInd = 0; 

var slideLeft = function() {
  curInd = ( curInd - 1 ) % 5;
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
