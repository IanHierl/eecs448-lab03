var update = function() {
  var inputs = document.querySelectorAll("input[type=text]");
  var target = document.getElementById("target");
  
  try {
    let temp = []
    for( var item of inputs ) {
      let val = parseInt(item.value);

      if( isNaN(val) ) {
        throw {
          id : item.id,
          mssg : "is not set to a valid number!"
        };
      } else if( item.id == "borderWidth" && val < 0 ) {
        throw {
          id : item.id,
          mssg : "is not set to a valid width!"
        };
      } else if( val < 0 || val > 255 ) {
        throw {
          id : item.id,
          mssg : "is not set to a valid RGB value!"
        }
      } else {
        temp.push( val );
      }
    }
    var [ borderRed,
          borderGreen,
          borderBlue,
          borderWidth,
          bgRed,
          bgGreen,
          bgBlue ] = temp;
  } catch(err) {
    console.log( err );
    alert( err.id + " " + err.mssg );
  }
  
  target.style.border = borderWidth + "px solid rgb("
                      + borderRed + ", "
                      + borderGreen + ", "
                      + borderBlue + ")";
  target.style.backgroundColor = "rgb("
                                + bgRed + ", "
                                + bgGreen + ", "
                                + bgBlue +")";
}


var updateBttn = document.getElementById("updateBttn");

if( updateBttn.addEventListener ) {
  updateBttn.addEventListener( "click", update, false );
} else if( updateBttn.attachEvent ) {
  updateBttn.attachEvent( "onclick", update, false );
}
